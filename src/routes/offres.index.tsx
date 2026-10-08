import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldAlert, TrendingUp } from "lucide-react";

import usineFiligrane from "@/assets/usine-filigrane.jpg.asset.json";
import xflr9 from "@/assets/xflr9-analyzer.png.asset.json";
import { BookingButton } from "@/components/site/booking";
import { SolutionCards } from "@/components/site/design-v2";
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
        <div className="mt-10"><SolutionCards /></div>
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-l-2 border-accent bg-footer p-7 text-center md:flex-row md:text-left">
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