import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";

import { BookingEmbed } from "@/components/site/booking";
import { Container, PageHeader } from "@/components/site/container";
import { COMPANY } from "@/lib/company";
import { submitContactRequest } from "@/lib/leads.functions";
import { contactRequestSchema, OFFER_OPTIONS } from "@/lib/leads.schema";

const DESCRIPTION =
  "Contactez CLM Industry pour une campagne de mesure de gaz industriels : réponse sous 48 heures avec une recommandation adaptée à votre site.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Prendre rendez-vous | CLM Industry" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Contact — Prendre rendez-vous | CLM Industry" },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent";

function ContactPage() {
  const send = useServerFn(submitContactRequest);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const parsed = contactRequestSchema.safeParse(raw);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setPending(true);
    try {
      await send({ data: parsed.data });
      setSent(true);
      form.reset();
      toast.success("Votre demande a bien été envoyée.");
    } catch {
      toast.error("L'envoi a échoué. Réessayez ou écrivez-nous directement par email.");
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre site industriel"
        intro="Décrivez-nous vos installations et vos obligations réglementaires. Nous revenons vers vous sous 48 heures avec une recommandation de campagne."
      />

      <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        <div className="rounded-lg border border-border bg-card p-8">
          {sent ? (
            <div className="py-8 text-center">
              <div className="text-2xl font-bold text-accent">Demande envoyée</div>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Merci. Un expert CLM Industry revient vers vous sous 48 heures ouvrées.
              </p>
              <button type="button" className="cta-outline mt-8" onClick={() => setSent(false)}>
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <Field label="Nom et prénom *" name="fullName" error={errors.fullName} required />
              <Field label="Société *" name="company" error={errors.company} required />
              <Field label="Fonction" name="jobTitle" error={errors.jobTitle} />
              <Field
                label="Email professionnel *"
                name="email"
                type="email"
                error={errors.email}
                required
              />
              <Field label="Téléphone" name="phone" type="tel" error={errors.phone} />
              <Field
                label="Site industriel concerné"
                name="siteLocation"
                placeholder="Ville, département"
                error={errors.siteLocation}
              />

              <label className="sm:col-span-2 block text-sm font-medium text-foreground">
                Solution concernée *
                <select name="offer" defaultValue="indecis" className={fieldClass} required>
                  {OFFER_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="sm:col-span-2 block text-sm font-medium text-foreground">
                Votre besoin *
                <textarea
                  name="message"
                  rows={6}
                  required
                  maxLength={2000}
                  placeholder="Procédés concernés, molécules suspectées, échéance réglementaire…"
                  className={fieldClass}
                />
                {errors.message ? (
                  <span className="mt-1 block text-xs text-destructive">{errors.message}</span>
                ) : null}
              </label>

              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="sm:col-span-2">
                <button type="submit" className="cta-primary" disabled={pending}>
                  {pending ? "Envoi en cours…" : "Envoyer ma demande"}
                </button>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Les informations transmises sont utilisées uniquement pour traiter votre demande.
                  Voir notre politique de confidentialité.
                </p>
              </div>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-lg border border-border bg-card p-8 text-sm text-muted-foreground">
            <h2 className="text-base font-bold uppercase tracking-wider text-foreground">
              Nous joindre directement
            </h2>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-4 block text-foreground hover:text-accent"
            >
              {COMPANY.email}
            </a>
            <div className="mt-6">{COMPANY.legalName}</div>
            <div>{COMPANY.address}</div>
          </div>
          <div className="rounded-lg border-2 border-accent bg-card p-8">
            <div className="text-3xl font-extrabold text-accent">48 h</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Délai de réponse moyen à une demande de campagne de mesure.
            </p>
          </div>
        </aside>
      </Container>

      <section className="border-t border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Réserver directement un créneau
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Choisissez un horaire d'échange avec un expert CLM Industry : nous faisons le point sur
            vos procédés, vos obligations VLEP/CMR et la campagne de mesure adaptée.
          </p>
          <div className="mt-10">
            <BookingEmbed />
          </div>
        </Container>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-foreground">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={fieldClass}
      />
      {error ? <span className="mt-1 block text-xs text-destructive">{error}</span> : null}
    </label>
  );
}