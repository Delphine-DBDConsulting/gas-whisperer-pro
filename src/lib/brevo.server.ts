// Synchronisation CRM Brevo.
// La clé API est stockée côté serveur (BREVO_API_KEY) et n'est jamais exposée
// au navigateur. Un échec Brevo ne doit jamais faire échouer le formulaire :
// la demande reste enregistrée dans Lovable Cloud (backup / audit).

const BREVO_API = "https://api.brevo.com/v3";

type BrevoContact = {
  email: string;
  attributes: Record<string, string | undefined>;
  listIds?: number[];
};

export async function upsertBrevoContact({
  email,
  attributes,
  listIds,
}: BrevoContact): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.warn("[brevo] BREVO_API_KEY manquante — synchronisation ignorée");
    return { ok: false, error: "missing_api_key" };
  }

  const cleanAttributes = Object.fromEntries(
    Object.entries(attributes).filter(([, value]) => value !== undefined && value !== ""),
  );

  try {
    const response = await fetch(`${BREVO_API}/contacts`, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: cleanAttributes,
        listIds,
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`[brevo] contact sync failed [${response.status}]: ${body}`);
      return { ok: false, error: `${response.status}: ${body}` };
    }

    return { ok: true };
  } catch (error) {
    console.error("[brevo] contact sync error", error);
    return { ok: false, error: String(error) };
  }
}