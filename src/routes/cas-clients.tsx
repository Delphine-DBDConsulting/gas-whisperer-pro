import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  IconBrush,
  IconBuildingFactory,
  IconChevronLeft,
  IconChevronRight,
  IconCpu,
  IconFireExtinguisher,
  IconFlask,
  IconLeaf,
  IconPill,
  IconSnowflake,
} from "@tabler/icons-react";

import { BookingButton } from "@/components/site/booking";
import { Container, PageHeader } from "@/components/site/container";

const DESCRIPTION =
  "Découvrez comment CLM Industry aide les industriels à corriger une exposition, optimiser un système d'abattage et sécuriser un contrôle réglementaire. Cas clients réels, anonymisés.";

const DOMAIN = "https://gas-whisperer-pro.lovable.app";

export const Route = createFileRoute("/cas-clients")({
  head: () => ({
    meta: [
      { title: "Cas clients — Mesure de gaz industriels sur site | CLM Industry" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Cas clients — Mesure de gaz industriels sur site | CLM Industry" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${DOMAIN}/cas-clients` },
    ],
    links: [{ rel: "canonical", href: `${DOMAIN}/cas-clients` }],
  }),
  component: CasClients,
});

type Solution = "Santé & Environnement" | "Émissions & Performance";

type CaseStudy = {
  sector: string;
  title: string;
  problem: string;
  result: string;
  kpi: string;
  solution: Solution;
};

const cases: CaseStudy[] = [
  {
    sector: "Chimie de spécialités",
    title: "Une VLEP benzène dépassée identifiée avant contrôle",
    problem:
      "Des capteurs PID signalaient une hausse de COV sans permettre d'en identifier l'origine, à quelques semaines d'un contrôle réglementaire.",
    result:
      "La campagne a isolé le benzène comme molécule responsable et localisé la fuite sur une ligne de transfert. Correction réalisée avant le contrôle.",
    kpi: "Arrêt de poste évité",
    solution: "Santé & Environnement",
  },
  {
    sector: "Traitement de surface",
    title: "Un système d'abattage surdimensionné de 40 %",
    problem:
      "L'exploitant ne disposait d'aucune mesure amont/aval fiable du rendement réel de son oxydateur.",
    result:
      "Le monitoring continu a montré un rendement stable très au-dessus du besoin réel, permettant de revoir les consignes de fonctionnement.",
    kpi: "Consommation énergétique réduite",
    solution: "Émissions & Performance",
  },
  {
    sector: "Pharmacie",
    title: "Cartographie d'exposition sur 12 postes de travail",
    problem:
      "Le service HSE devait documenter l'exposition réelle aux solvants pour son document unique et le CSE.",
    result:
      "Une cartographie molécule par molécule, poste par poste, a permis de prioriser trois zones de captage.",
    kpi: "Plan d'action HSE argumenté",
    solution: "Santé & Environnement",
  },
  {
    sector: "Industrie pharmaceutique",
    title: "Charbons actifs : cycle de remplacement optimisé",
    problem:
      "Une installation d'abattage des COV (mélange CMR et non CMR) imposait un remplacement des filtres toutes les trois semaines, sans donnée de saturation réelle.",
    result:
      "Une campagne de mesure amont/aval sur un mois a démontré qu'un remplacement mensuel suffisait pour ce procédé. Coût annuel ramené de 520 000 € à 390 000 € (30 000 € par remplacement).",
    kpi: "130 000 € d'économie par an",
    solution: "Émissions & Performance",
  },
  {
    sector: "Industrie chimique",
    title: "RTO : consommation de gaz naturel réduite de 25 %",
    problem:
      "L'oxydateur thermique régénératif fonctionnait en permanence au maximum, à 50 m³/h de gaz naturel, faute de mesure du besoin réel.",
    result:
      "Trois semaines de mesure amont/aval ont montré que la consommation du brûleur pouvait être abaissée de 10 % à 50 % selon les périodes d'activité : 438 000 m³/an et 657 000 € avant campagne, 328 500 m³/an et 492 750 € après.",
    kpi: "164 250 € d'économie par an — 292 tonnes de CO₂ évitées",
    solution: "Émissions & Performance",
  },
];

const filters: { label: "Tous" | Solution; value: "all" | Solution }[] = [
  { label: "Tous", value: "all" },
  { label: "Santé & Environnement", value: "Santé & Environnement" },
  { label: "Émissions & Performance", value: "Émissions & Performance" },
];

const testimonials = [
  {
    quote: "Témoignage client à venir.",
    author: "Responsable HSE",
    company: "Industrie chimique — France",
  },
  {
    quote: "Témoignage client à venir.",
    author: "Directeur de site",
    company: "Industrie pharmaceutique — France",
  },
  {
    quote: "Témoignage client à venir.",
    author: "Responsable QHSE",
    company: "Pétrochimie — France",
  },
];

const sectors = [
  { label: "Chimie industrielle", icon: IconFlask },
  { label: "Réfrigération & transfert thermique", icon: IconSnowflake },
  { label: "Peintures, revêtements & colles", icon: IconBrush },
  { label: "Agroalimentaire & fragrances", icon: IconLeaf },
  { label: "Pétrochimie & énergie", icon: IconBuildingFactory },
  { label: "Pharmacie & biotech", icon: IconPill },
  { label: "Microélectronique", icon: IconCircuitBoard },
  { label: "Sécurité incendie", icon: IconFireExtinguisher },
];

function CasClients() {
  const [activeFilter, setActiveFilter] = useState<"all" | Solution>("all");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const filteredCases =
    activeFilter === "all" ? cases : cases.filter((c) => c.solution === activeFilter);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrentTestimonial(index);
  const prev = () =>
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);

  return (
    <>
      <PageHeader
        eyebrow="Cas clients"
        title="Ce que change une mesure réellement précise"
        intro="Les campagnes de CLM Industry servent avant tout à décider : corriger une exposition, dimensionner un équipement, sécuriser un contrôle réglementaire... Voici quelques cas d'usage concrets."
      />

      <Container className="py-16 md:py-24">
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          Chaque cas illustre un enjeu autour des{" "}
          <a
            href="https://www.inrs.fr/publications/bdd/vlep.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2 hover:text-foreground"
          >
            Valeurs Limites d'Exposition Professionnelle (VLEP)
          </a>{" "}
          ou des substances Cancérogènes, Mutagènes et Reprotoxiques (CMR), et la manière dont une
          mesure fiable permet de trancher.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => {
            const isActive = activeFilter === f.value;
            return (
              <button
                key={f.value}
                type="button"
                onClick={() => setActiveFilter(f.value)}
                className={`rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "border border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
                aria-pressed={isActive}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {filteredCases.map((c) => (
            <article
              key={c.title}
              className="card-hover flex flex-col rounded-lg border border-border bg-card p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {c.sector}
                </div>
                <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.solution}
                </span>
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
          <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
            Ils nous font confiance
          </h2>

          <div className="relative mt-10">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="w-full shrink-0 px-2 md:px-24">
                    <div className="mx-auto max-w-2xl rounded-lg border-l-4 border-accent bg-card p-8 md:p-10">
                      <div className="text-4xl leading-none text-accent">"</div>
                      <p className="mt-2 text-lg italic leading-relaxed text-foreground md:text-xl">
                        {t.quote}
                      </p>
                      <div className="mt-6">
                        <div className="font-bold text-foreground">{t.author}</div>
                        <div className="text-sm text-muted-foreground">{t.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={prev}
              aria-label="Témoignage précédent"
              className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-border bg-card p-2 text-foreground transition-colors hover:border-accent hover:text-accent md:inline-flex"
            >
              <IconChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Témoignage suivant"
              className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-border bg-card p-2 text-foreground transition-colors hover:border-accent hover:text-accent md:inline-flex"
            >
              <IconChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Aller au témoignage ${i + 1}`}
                aria-current={i === currentTestimonial ? "true" : undefined}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === currentTestimonial ? "bg-accent" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Les secteurs où nous intervenons
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="card-hover flex h-28 flex-col items-center justify-center rounded-lg border border-border bg-card px-4 text-center"
                >
                  <Icon className="h-7 w-7 text-accent" stroke={1.5} />
                  <div className="mt-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t-2 border-accent">
        <Container className="py-16 text-center md:py-24">
          <h2 className="mx-auto max-w-3xl text-2xl font-bold text-foreground md:text-3xl">
            Votre situation ressemble à l'un de ces cas ?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Nos experts analysent votre contexte et vous proposent la campagne de mesure adaptée à vos
            enjeux réglementaires et opérationnels.
          </p>
          <div className="mt-9 flex justify-center">
            <BookingButton>Prendre rendez-vous</BookingButton>
          </div>
        </Container>
      </section>
    </>
  );
}
