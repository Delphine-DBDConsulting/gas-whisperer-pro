import { createFileRoute, Link } from "@tanstack/react-router";

import { BookingButton } from "@/components/site/booking";
import { Container, PageHeader } from "@/components/site/container";

const DESCRIPTION =
  "Deux solutions de mesure de gaz industriels : campagne ponctuelle de conformité VLEP/CMR, ou monitoring continu des émissions pour optimiser vos installations.";

export const Route = createFileRoute("/offres/")({
  head: () => ({
    meta: [
      { title: "Nos solutions de mesure de gaz industriels — CLM Industry" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Nos solutions de mesure de gaz industriels — CLM Industry" },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: OffresIndex,
});

const offers = [
  {
    title: "Santé & Environnement",
    subtitle: "Pour connaître précisément ce que respirent vos équipes",
    text: "Campagne de mesure ponctuelle — identification exhaustive des gaz présents sur votre site à un instant T, rapport de conformité VLEP remis en fin de mission.",
    to: "/offres/sante-environnement",
  },
  {
    title: "Émissions & Performance",
    subtitle: "Pour piloter vos émissions dans la durée et optimiser vos installations",
    text: "Monitoring continu sur 1 à 2 mois — mesures amont/aval de vos systèmes d'abattage, reporting régulier, données exploitables pour vos cycles de production.",
    to: "/offres/emissions-performance",
  },
] as const;

function OffresIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Nos solutions"
        title="Deux solutions adaptées à votre situation"
        intro="Que vous deviez démontrer votre conformité réglementaire ou piloter vos émissions dans la durée, la campagne de mesure est calibrée sur votre site et vos contraintes."
      />
      <Container className="py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {offers.map((o) => (
            <article
              key={o.title}
              className="card-hover relative overflow-hidden rounded-lg border border-border bg-card p-8"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-accent" />
              <h2 className="text-2xl font-bold text-foreground">{o.title}</h2>
              <p className="mt-2 italic text-muted-foreground">{o.subtitle}</p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{o.text}</p>
              <Link
                to={o.to}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
              >
                Découvrir la solution <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-14 rounded-lg border border-border bg-card p-8 text-center">
          <h2 className="text-xl font-bold text-foreground">
            Vous vous interrogez sur la solution qui correspond à votre besoin ?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Décrivez-nous votre site et vos obligations : nous vous répondons sous 48 heures avec
            une recommandation argumentée.
          </p>
          <BookingButton className="mt-8" />
        </div>
      </Container>
    </>
  );
}