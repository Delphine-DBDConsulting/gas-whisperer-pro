// Notification interne des nouvelles demandes.
// L'envoi d'email nécessite un domaine expéditeur vérifié (Cloud → Emails).
// Tant qu'il n'est pas configuré, la demande reste enregistrée en base et la
// notification est simplement journalisée : le formulaire ne doit jamais échouer
// à cause de l'email.
export async function notifyNewLead({
  subject,
  lines,
}: {
  subject: string;
  lines: string[];
}): Promise<void> {
  try {
    console.info(`[lead] ${subject}\n${lines.join("\n")}`);
  } catch (error) {
    console.error("lead notification failed", error);
  }
}