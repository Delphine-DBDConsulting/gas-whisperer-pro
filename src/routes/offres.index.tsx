import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldAlert, TrendingUp } from "lucide-react";

import usineFiligrane from "@/assets/usine-filigrane.jpg.asset.json";
import xflr9 from "@/assets/xflr9-analyzer.png.asset.json";
import { BookingButton } from "@/components/site/booking";
import { Container } from "@/components/site/container";

const DESCRIPTION =
  "Deux solutions de mesure de gaz industriels : campagne ponctuelle de conformité VLEP/CMR, ou monitoring continu des émissions pour optimiser vos installations.";

export const Route = createFileRoute("/offres/")({
  head: () => ({
    meta: [
      { title: "Nos solutions de mesure de gaz industriels — CLM Industry" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Nos solutions de mesure de gaz industriels — CLM Industry" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OffresIndex,
});

const offers = [
  {
    title: "Santé & Environnement",
    situation: "Un contrôle est annoncé",
    text: "Identifier les molécules réellement présentes dans l'air de vos ateliers, poste par poste, et documenter votre conformité VLEP et CMR.",
    duration: "1 à 5 jours",
    image: xflr9.url,
    imageAlt: "Analyseur XFLR-9 utilisé pour les campagnes de mesure de gaz",
    Icon: ShieldAlert,
    to: "/offres/sante-environnement",
  },
  {
    title: "Émissions & Performance",
    situation: "Un investissement est à arbitrer",
    text: "Mesurer le rendement réel de vos systèmes d'abattage, amont et aval, et optimiser vos cycles de production dans la durée.",
    duration: "1 à 2 mois",
    image: usineFiligrane.url,
    imageAlt: "Installations industrielles et cheminées d'usine",
    Icon: TrendingUp,
    to: "/offres/emissions-performance",
  },
] as const;

function OffresIndex() {
  return (
    <section>
      <Container className="py-14 md:py-20">
        <header className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Deux situations. Deux campagnes.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            On ne nous appelle pas par curiosité. On nous appelle parce qu'un contrôle est annoncé,
            ou parce qu'une installation coûte trop cher. Votre point de départ décide de la campagne.
          </p>
        </header>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 md:mt-14">
          {offers.map((o) => (
            <article
              key={o.title}
              className="card-hover flex min-w-0 flex-col overflow-hidden border border-border bg-card"
            >
              <div className="h-48 overflow-hidden border-b border-border bg-footer md:h-56">
                <img src={o.image} alt={o.imageAlt} className={`h-full w-full ${o.Icon === ShieldAlert ? "object-contain p-5" : "object-cover"}`} loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase text-accent">
                  <o.Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{o.situation}</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">{o.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{o.text}</p>
                <div className="mt-auto flex flex-wrap items-end justify-between gap-5 pt-10">
                  <div>
                    <p className="text-xs font-semibold uppercase text-muted-foreground">Durée · Résultat</p>
                    <p className="mt-1 text-2xl font-extrabold text-foreground">{o.duration}</p>
                  </div>
                  <Link
                    to={o.to}
                    aria-label={`Découvrir ${o.title}`}
                    className="inline-flex h-11 items-center gap-3 border border-accent px-5 text-sm font-semibold text-accent transition-colors hover:border-cta-hover hover:bg-cta-hover hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    Découvrir <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
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
    </section>
  );
}