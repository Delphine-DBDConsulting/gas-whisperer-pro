import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";

import { brochureLeadSchema, contactRequestSchema } from "./leads.schema";

function clientIp() {
  return (
    getRequestHeader("cf-connecting-ip") ??
    getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ??
    null
  );
}

function splitName(fullName: string) {
  const parts = fullName.trim().split(/\s+/);
  const firstName = parts.shift() ?? fullName;
  return { firstName, lastName: parts.join(" ") || firstName };
}

export const submitContactRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactRequestSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot : on répond OK sans rien enregistrer.
    if (data.website) return { ok: true as const };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_requests").insert({
      full_name: data.fullName,
      company: data.company,
      job_title: data.jobTitle || null,
      email: data.email,
      phone: data.phone || null,
      site_location: data.siteLocation || null,
      offer: data.offer,
      message: data.message,
      ip_address: clientIp(),
    });

    if (error) {
      console.error("contact_requests insert failed", error);
      throw new Error("Enregistrement impossible");
    }

    const { notifyNewLead } = await import("./notify.server");
    await notifyNewLead({
      subject: `Nouvelle demande de contact — ${data.company}`,
      lines: [
        `Nom : ${data.fullName}`,
        `Société : ${data.company}`,
        `Fonction : ${data.jobTitle || "—"}`,
        `Email : ${data.email}`,
        `Téléphone : ${data.phone || "—"}`,
        `Site industriel : ${data.siteLocation || "—"}`,
        `Offre : ${data.offer}`,
        "",
        data.message,
      ],
    });

    // Synchronisation CRM Brevo (non bloquante).
    const { upsertBrevoContact } = await import("./brevo.server");
    const { firstName, lastName } = splitName(data.fullName);
    await upsertBrevoContact({
      email: data.email,
      attributes: {
        PRENOM: firstName,
        NOM: lastName,
        SOCIETE: data.company,
        FONCTION: data.jobTitle || undefined,
        TELEPHONE: data.phone || undefined,
        SITE_INDUSTRIEL: data.siteLocation || undefined,
        OFFRE: data.offer,
        MESSAGE: data.message,
        SOURCE: "formulaire_contact",
        LANGUE: "fr",
      },
    });

    return { ok: true as const };
  });

export const submitBrochureLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => brochureLeadSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true as const };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("brochure_leads").insert({
      full_name: data.fullName,
      company: data.company,
      email: data.email,
      ip_address: clientIp(),
    });

    if (error) {
      console.error("brochure_leads insert failed", error);
      throw new Error("Unable to register your request");
    }

    const { notifyNewLead } = await import("./notify.server");
    await notifyNewLead({
      subject: `English brochure download — ${data.company}`,
      lines: [`Name: ${data.fullName}`, `Company: ${data.company}`, `Email: ${data.email}`],
    });

    const { upsertBrevoContact } = await import("./brevo.server");
    const { firstName, lastName } = splitName(data.fullName);
    await upsertBrevoContact({
      email: data.email,
      attributes: {
        PRENOM: firstName,
        NOM: lastName,
        SOCIETE: data.company,
        SOURCE: "brochure_en",
        LANGUE: "en",
      },
    });

    return { ok: true as const };
  });