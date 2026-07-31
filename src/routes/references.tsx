import { createFileRoute, Link } from "@tanstack/react-router";

import { BookingButton } from "@/components/site/booking";
import { Container, PageHeader } from "@/components/site/container";

const DESCRIPTION =
  "Cas clients et retour sur investissement des campagnes de mesure de gaz industriels CLM Industry : conformité VLEP, optimisation des systèmes d'abattage, arrêts évités.";

export const Route = createFileRoute("/references")({
  head: () => ({
    meta: [
      { title: "Références, cas clients & ROI — CLM Industry" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Références, cas clients & ROI — CLM Industry" },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: References,
});

const cases = [
  {
    sector: "Chimie de spécialités",
    title: "Une VLEP benzène dépassée identifiée avant contrôle",
    problem:
      "Des capteurs PID signalaient une hausse de COV sans permettre d'en identifier l'origine, à quelques semaines d'un contrôle réglementaire.",
    result:
      "La campagne a isolé le benzène comme molécule responsable et localisé la fuite sur une ligne de transfert. Correction réalisée avant le contrôle.",
    kpi: "Arrêt de poste évité",
  },
  {
    sector: "Traitement de surface",
    title: "Un système d'abattage surdimensionné de 40 %",
    problem:
      "L'exploitant ne disposait d'aucune mesure amont/aval fiable du rendement réel de son oxydateur.",
    result:
      "Le monitoring continu a montré un rendement stable très au-dessus du besoin réel, permettant de revoir les consignes de fonctionnement.",
    kpi: "Consommation énergétique réduite",
  },
  {
    sector: "Pharmacie",
    title: "Cartographie d'exposition sur 12 postes de travail",
    problem:
      "Le service HSE devait documenter l'exposition réelle aux solvants pour son document unique et le CSE.",
    result:
      "Une cartographie molécule par molécule, poste par poste, a permis de prioriser trois zones de captage.",
    kpi: "Plan d'action HSE argumenté",
  },
  {
    sector: "Industrie pharmaceutique",
    title: "Charbons actifs : cycle de remplacement optimisé",
    problem:
      "Une installation d'abattage des COV (mélange CMR et non CMR) imposait un remplacement des filtres toutes les trois semaines, sans donnée de saturation réelle.",
    result:
      "Une campagne de mesure amont/aval sur un mois a démontré qu'un remplacement mensuel suffisait pour ce procédé. Coût annuel ramené de 520 000 € à 390 000 € (30 000 € par remplacement).",
    kpi: "130 000 € d'économie par an",
  },
  {
    sector: "Industrie chimique",
    title: "RTO : consommation de gaz naturel réduite de 25 %",
    problem:
      "L'oxydateur thermique régénératif fonctionnait en permanence au maximum, à 50 m³/h de gaz naturel, faute de mesure du besoin réel.",
    result:
      "Trois semaines de mesure amont/aval ont montré que la consommation du brûleur pouvait être abaissée de 10 % à 50 % selon les périodes d'activité : 438 000 m³/an et 657 000 € avant campagne, 328 500 m³/an et 492 750 € après.",
    kpi: "164 250 € d'économie par an — 292 tonnes de CO₂ évitées",
  },
];

const sectors = [
  "Chimie & pétrochimie",
  "Pharmacie & cosmétique",
  "Traitement de surface",
  "Agroalimentaire",
  "Plasturgie",
  "Traitement des déchets",
  "Énergie",
  "Automobile",
];

function References() {
  return (
    <>
      <PageHeader
        eyebrow="Références & ROI"
        title="Ce que change une mesure réellement précise"
        intro="Nos campagnes servent d'abord à décider : corriger une exposition, dimensionner un équipement, sécuriser un contrôle réglementaire."
      />

      <Container className="py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.title}
              className="card-hover flex flex-col rounded-lg border border-border bg-card p-8"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-accent">
                {c.sector}
              </div>
              <h2 className="mt-4 text-xl font-bold text-foreground">{c.title}</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{c.problem}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.result}</p>
              <div className="mt-auto pt-6 text-sm font-semibold text-accent">{c.kpi}</div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          Cas clients anonymisés à la demande des exploitants concernés.
        </p>
      </Container>

      <section className="border-y border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Les secteurs où nous intervenons
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <div
                key={s}
                className="card-hover flex h-24 items-center justify-center rounded-lg border border-border bg-card px-4 text-center text-sm font-semibold uppercase tracking-wider text-foreground"
              >
                {s}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t-2 border-accent">
        <Container className="py-16 text-center md:py-24">
          <h2 className="mx-auto max-w-3xl text-2xl font-bold text-foreground md:text-3xl">
            Votre site présente-t-il le même profil de risque ?
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <BookingButton />
            <Link to="/offres" className="cta-outline">
              Nos solutions de mesure
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}