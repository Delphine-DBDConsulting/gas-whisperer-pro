import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/company";

/**
 * Bouton de prise de rendez-vous Brevo Meetings.
 * Ouvre la page de réservation dans un nouvel onglet (fallback natif du
 * widget popup Brevo, sans script tiers bloquant le rendu).
 */
export function BookingButton({
  children = "Prendre rendez-vous",
  variant = "primary",
  className = "",
}: {
  children?: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}) {
  return (
    <Button asChild variant={variant === "primary" ? "default" : "outline"} className={`${variant === "primary" ? "cta-primary" : "cta-outline"} ${className}`}><a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a></Button>
  );
}

/** Page de réservation Brevo intégrée en iframe. */
export function BookingEmbed({ title = "Réserver un créneau avec un expert CLM Industry" }) {
  return (
    <iframe
      title={title}
      src={BOOKING_URL}
      loading="lazy"
      className="h-[720px] w-full rounded-lg border border-border bg-card"
    />
  );
}