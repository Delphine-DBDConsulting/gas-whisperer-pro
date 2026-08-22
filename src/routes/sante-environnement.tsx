import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Award,
  Check,
  ClipboardList,
  FileCheck2,
  LineChart,
  Map as MapIcon,
  RefreshCw,
  Search,
  Wrench,
} from "lucide-react";

import { BookingButton } from "@/components/site/booking";
import { Container } from "@/components/site/container";

const DESCRIPTION =
  "CLM Industry identifie et quantifie les substances CMR sur vos postes de travail. Campagne de mesure ponctuelle, rapport de conformité VLEP opposable. Analyseur XFLR-9 technologie OPO Laser.";
const TITLE = "Mesure de conformité VLEP sur site industriel | CLM Industry";

const VLEP_URL = "https://www.inrs.fr/publications/bdd/vlep.html";

const comparison: [string, string, string][] = [
  ["Identification des molécules", "✗ Carbone global uniquement", "✓ 500+ espèces identifiées"],
  ["Précision", "Ordre du ppm", "Ordre du ppb"],
  ["Différenciation CMR", "✗ Impossible", "✓ Instantanée"],
  ["Consommables", "Gaz vecteurs, tubes, filtres", "Zéro consommable"],
  ["Déploiement sur site", "Lourd et intrusif", "< 1 heure"],
];

const steps = [
  {
    icon: ClipboardList,
    title: "Prise de contact et cadrage",
    text: "Analyse de votre site, identification des postes exposés, définition du périmètre de mesure.",
  },
  {
    icon: Wrench,
    title: "Déploiement sur site",
    text: "Installation du XFLR-9 en moins d'une heure, sans interruption de production, sans consommable.",
  },
  {
    icon: LineChart,
    title: "Mesure et analyse",
    text: "Cartographie simultanée de jusqu'à 10 espèces gazeuses, quantification par rapport aux seuils VLEP et CMR en vigueur.",
  },
  {
    icon: FileCheck2,
    title: "Remise du rapport",
    text: "Document de conformité complet, exploitable lors d'un audit interne ou présentable en cas de contrôle par la DRIETS, la DREETS, le médecin du travail, le COFRAC ou encore le CSE.",
  },
];

const useCases = [
  {
    icon: Award,
    title: "Audit de conformité réglementaire",
    text: "Vous devez justifier du respect des VLEP sur vos postes de travail auprès de l'inspection du travail, de la médecine du travail ou de votre CSE. La campagne CLM Industry produit un rapport opposable, daté et signé.",
  },
  {
    icon: Search,
    title: "Diagnostic avant inspection",
    text: "Une inspection est programmée sur votre site par la DRIETS ou la DREETS. Vous souhaitez anticiper les résultats et corriger d'éventuels écarts avant le contrôle.",
  },
  {
    icon: AlertTriangle,
    title: "Identification d'un risque chimique inconnu",
    text: "Un salarié signale des symptômes inhabituels. Grâce à son identification ad nihilo, le XFLR-9 fournit un inventaire exhaustif des gaz présents dans la zone concernée, y compris des substances que vous ne soupçonniez pas.",
  },
  {
    icon: RefreshCw,
    title: "Mise à jour du DUER",
    text: "Votre process industriel a évolué — nouveau produit, nouvelle ligne de production, changement de matières premières. Vous devez réévaluer les risques chimiques sur les postes de travail concernés.",
  },
  {
    icon: MapIcon,
    title: "Première évaluation de site",
    text: "Vous n'avez jamais réalisé de campagne de mesure de gaz et souhaitez établir un état des lieux complet des émissions présentes sur votre site avant d'engager un plan d'action.",
  },
];

const deliverables = [
  "L'inventaire exhaustif des espèces gazeuses identifiées sur votre site, y compris les substances détectées ad nihilo",
  "Les concentrations mesurées, comparées aux Valeurs Limites d'Exposition Professionnelle (VLEP) contraignantes et indicatives en vigueur",
  "La cartographie des postes de travail concernés et des niveaux d'exposition par zone",
  "L'identification des substances Cancérogènes, Mutagènes et Reprotoxiques (CMR) détectées, avec leur catégorie de danger",
  "Les recommandations d'action en cas de dépassement détecté",
  "Un document exploitable directement dans votre Document Unique d'Évaluation des Risques (DUER) et opposable lors d'un contrôle par la DRIETS, la DREETS, le médecin du travail ou le CSE",
];

const faq = [
  {
    q: "Le rapport CLM Industry est-il opposable en cas d'inspection ?",
    a: "Oui. Chaque rapport est horodaté, tracé et signé. Il documente les concentrations mesurées molécule par molécule, les comparaisons aux VLEP en vigueur et les recommandations. Il peut être présenté à la DRIETS, la DREETS, au médecin du travail ou au CSE.",
  },
  {
    q: "Quelle est la différence avec un capteur PID classique ?",
    a: "Un capteur PID mesure le Carbone Organique Total (COT) sans identifier la molécule. Le XFLR-9 identifie et quantifie plus de 500 espèces gazeuses en temps réel, avec une précision à l'ordre du ppb. C'est cette identification qui rend le rapport juridiquement solide.",
  },
  {
    q: "Combien de temps dure une campagne de mesure ?",
    a: "La durée dépend du nombre de postes de travail et de la complexité du site. Une campagne de conformité VLEP classique se déroule sur quelques jours à deux semaines, avec un déploiement rapide et sans interruption de production.",
  },
  {
    q: "Le XFLR-9 peut-il mesurer plusieurs gaz simultanément ?",
    a: "Oui. L'analyseur mesure jusqu'à 10 espèces gazeuses en un seul passage. Cela permet de cartographier l'exposition réelle sans multiplier les interventions et les consommables.",
  },
];

const caseStudies = [
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
      "Une campagne de mesure amont/aval sur un mois a démontré qu'un remplacement mensuel suffisait pour ce procédé. Coût annuel ramené de 520 000 € à 390 000 €.",
    kpi: "130 000 € d'économie par an",
  },
];

export const Route = createFileRoute("/sante-environnement")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SanteEnvironnementPage,
});

/* --- Graphique SVG (SSR-safe) --- */
const CHART = [0.05, 0.1, 0.28, 0.35, 0.18, 0.12, 0.08, 0.06];
const LIMIT = 0.2;

function MeasurementChart() {
  const w = 720;
  const h = 320;
  const pad = { top: 16, right: 16, bottom: 34, left: 52 };
  const iw = w - pad.left - pad.right;
  const ih = h - pad.top - pad.bottom;
  const maxY = 0.45;
  const x = (i: number) => pad.left + (iw * i) / (CHART.length - 1);
  const y = (v: number) => pad.top + ih - (ih * v) / maxY;
  const ticks = Array.from({ length: 10 }, (_, i) => Number(((i * 5) / 100).toFixed(2)));
  const line = CHART.map((v, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(v)}`).join(" ");
  const area = `${line} L${x(CHART.length - 1)},${y(0)} L${x(0)},${y(0)} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-label="Concentration mesurée en benzène sur 8 points de prélèvement, comparée à la VLEP de 0,2 ppm"
      className="h-[320px] w-full"
    >
      <text
        x={14}
        y={h / 2}
        transform={`rotate(-90 14 ${h / 2})`}
        textAnchor="middle"
        className="fill-muted-foreground"
        fontSize="11"
      >
        Concentration (ppm)
      </text>
      {ticks.map((t) => (
        <g key={t}>
          <line
            x1={pad.left}
            x2={w - pad.right}
            y1={y(t)}
            y2={y(t)}
            stroke="currentColor"
            className="text-border"
            strokeWidth="1"
            opacity="0.4"
          />
          <text
            x={pad.left - 8}
            y={y(t) + 4}
            textAnchor="end"
            fontSize="10"
            className="fill-muted-foreground"
          >
            {t.toFixed(2)}
          </text>
        </g>
      ))}
      <path d={area} fill="#2a78d6" opacity="0.15" />
      {CHART.slice(0, -1).map((v, i) => (
        <line
          key={i}
          x1={x(i)}
          y1={y(v)}
          x2={x(i + 1)}
          y2={y(CHART[i + 1])}
          stroke={v > LIMIT || CHART[i + 1] > LIMIT ? "#d03b3b" : "#2a78d6"}
          strokeWidth="2.5"
        />
      ))}
      <line
        x1={pad.left}
        x2={w - pad.right}
        y1={y(LIMIT)}
        y2={y(LIMIT)}
        stroke="#d03b3b"
        strokeWidth="2"
        strokeDasharray="6 4"
      />
      {CHART.map((v, i) => (
        <g key={i}>
          <circle cx={x(i)} cy={y(v)} r="4" fill={v > LIMIT ? "#d03b3b" : "#2a78d6"} />
          <text
            x={x(i)}
            y={h - 12}
            textAnchor="middle"
            fontSize="10"
            className="fill-muted-foreground"
          >
            Point {i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}

function SanteEnvironnementPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <span className="inline-flex rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
            Solution 1
          </span>
          <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl">
            Conformité VLEP sur site industriel : identifiez les gaz que vous ne voyez pas
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Les Composés Organiques Volatils s'évaporent dans l'air de vos ateliers sans signal
            d'alarme. CLM Industry réalise une campagne de mesure exhaustive sur votre site et vous
            remet un rapport de conformité VLEP opposable.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <BookingButton />
            <Link to="/offres/emissions-performance" className="cta-outline">
              Découvrir Émissions &amp; Performance
            </Link>
          </div>
        </Container>
      </section>

      {/* CE QUE LA LOI IMPOSE */}
      <Container className="py-16 md:py-24">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Ce que la loi impose à votre entreprise
        </h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Le Code du travail fait peser sur l'employeur une obligation de résultat en matière
              d'exposition aux agents chimiques dangereux. Pour les substances Cancérogènes,
              Mutagènes et Reprotoxiques (CMR), une évaluation régulière est obligatoire — et en cas
              de dépassement d'une{" "}
              <a
                href={VLEP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline underline-offset-4"
              >
                Valeur Limite d'Exposition Professionnelle (VLEP)
              </a>{" "}
              contraignante, l'arrêt immédiat des postes de travail exposés s'impose.
            </p>
            <p>
              Depuis avril 2024, la VLEP contraignante du benzène est abaissée à 0,2 ppm. Le
              formaldéhyde est limité à 0,3 ppm. Ces seuils ne tolèrent aucune approximation : seule
              une mesure précise, molécule par molécule, permet de garantir la conformité avec
              certitude.
            </p>
          </div>
          <aside className="rounded-lg border-l-4 border-accent bg-accent/10 p-8">
            <div className="text-[28px] font-medium leading-none text-accent">0,2 ppm</div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Valeur limite d'exposition au benzène en vigueur depuis avril 2024. En cas de
              dépassement : responsabilité pénale de l'employeur engagée.
            </p>
          </aside>
        </div>
      </Container>

      {/* CAPTEURS CLASSIQUES */}
      <section className="border-y border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Ce que les capteurs classiques ne peuvent pas vous dire
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Les capteurs FID (Détecteur à Ionisation de Flamme) et PID (Détecteur à
              Photo-Ionisation) sont les instruments de mesure les plus répandus dans l'industrie.
              Ils détectent une présence de gaz dans l'air — mais mesurent uniquement le Carbone
              Organique Total (COT) sans être capables d'identifier quelle molécule est concernée.
            </p>
            <p>
              Résultat : vous savez qu'il y a quelque chose dans l'air. Vous ne savez pas si c'est
              du benzène à 0,2 ppm ou un solvant inoffensif. Sans identification précise des espèces
              gazeuses présentes, votre dossier de conformité reste incomplet — et juridiquement
              fragile.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#1A2E44] text-white">
                  <th className="px-5 py-4 font-bold">Critère</th>
                  <th className="px-5 py-4 font-bold">Capteurs classiques FID/PID</th>
                  <th className="px-5 py-4 font-bold">XFLR-9 — CLM Industry</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row[0]} className={i % 2 ? "bg-card" : "bg-transparent"}>
                    <td className="px-5 py-4 font-semibold text-foreground">{row[0]}</td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {row[1].startsWith("✗") ? (
                        <>
                          <span className="font-bold text-[#d03b3b]">✗</span>
                          {row[1].slice(1)}
                        </>
                      ) : (
                        row[1]
                      )}
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {row[2].startsWith("✓") ? (
                        <>
                          <span className="font-bold text-accent">✓</span>
                          {row[2].slice(1)}
                        </>
                      ) : (
                        row[2]
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* CAMPAGNE DE MESURE */}
      <Container className="py-16 md:py-24">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          La campagne de mesure CLM Industry
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            CLM Industry déploie son analyseur propriétaire XFLR-9 directement sur votre site
            industriel. En s'appuyant sur la technologie OPO Laser, l'instrument identifie et
            quantifie plus de 500 espèces gazeuses en temps réel, avec une précision à l'ordre du
            ppb — bien en dessous des seuils VLEP les plus exigeants.
          </p>
          <p>
            Contrairement aux analyseurs mono-gaz classiques, le XFLR-9 mesure simultanément jusqu'à
            10 gaz différents en un seul passage, établissant une cartographie complète des
            émissions présentes sur votre site. Une vision globale et instantanée, là où d'autres
            instruments nécessitent autant d'interventions que de molécules à analyser.
          </p>
        </div>

        <h3 className="mt-14 text-xl font-bold text-foreground">
          Comment se déroule une campagne ?
        </h3>
        <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="card-hover rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent text-sm font-bold text-accent-foreground">
                  {i + 1}
                </span>
                <s.icon className="h-5 w-5 text-accent" aria-hidden />
              </div>
              <h4 className="mt-4 text-base font-bold text-foreground">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>

      {/* CAS D'USAGE */}
      <section className="border-y border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Quand faire appel à CLM Industry ?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((c) => (
              <article
                key={c.title}
                className="card-hover rounded-xl border border-border bg-card p-7"
              >
                <c.icon className="h-6 w-6 text-accent" aria-hidden />
                <h3 className="mt-4 text-base font-bold text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CE QUE VOUS RECEVEZ */}
      <Container className="py-16 md:py-24">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Ce que vous recevez à l'issue de la campagne
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          À l'issue de chaque campagne de mesure, CLM Industry remet un rapport d'expertise complet
          incluant :
        </p>
        <ul className="mt-8 grid gap-4 lg:grid-cols-2">
          {deliverables.map((d) => (
            <li key={d.slice(0, 30)} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
              <span>{d}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-lg border border-border bg-card p-6 md:p-8">
          <h3 className="text-lg font-bold text-foreground">Exemple de rapport de mesure</h3>
          <div className="mt-4 flex flex-wrap gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#2a78d6]" aria-hidden />
              Concentration mesurée (ppm)
            </span>
            <span className="flex items-center gap-2">
              <span
                className="h-0.5 w-6"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg,#d03b3b 0 6px,transparent 6px 10px)",
                }}
                aria-hidden
              />
              VLEP contraignante — 0,2 ppm
            </span>
          </div>
          <div className="mt-4">
            <MeasurementChart />
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <div className="flex-1 rounded-md border border-[#d03b3b]/40 bg-[#d03b3b]/10 px-5 py-4 text-sm font-semibold text-foreground">
              Zone de dépassement — Points 3 et 4
            </div>
            <div className="flex-1 rounded-md border border-accent/40 bg-accent/10 px-5 py-4 text-sm font-semibold text-foreground">
              Zone de conformité — Points 1, 2, 5, 6, 7, 8
            </div>
          </div>
          <p className="mt-5 text-center text-[11px] text-muted-foreground">
            Exemple illustratif — Campagne de mesure benzène (C₆H₆) — 8 points de prélèvement — Site
            industriel anonymisé
          </p>
        </div>
      </Container>

      {/* CAS CLIENTS */}
      <section className="border-y border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Cas clients</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Des campagnes réelles, anonymisées à la demande des exploitants concernés.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <article
                key={c.title}
                className="card-hover flex flex-col rounded-lg border border-border bg-card p-8"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {c.sector}
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{c.problem}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.result}</p>
                <div className="mt-auto pt-6 text-sm font-semibold text-accent">{c.kpi}</div>
              </article>
            ))}
          </div>
          <Link to="/cas-clients" className="cta-outline mt-10 inline-block">
            Voir tous les cas clients
          </Link>
        </Container>
      </section>

      {/* CTA FINALE */}
      <section className="border-t-2 border-accent">
        <Container className="py-16 text-center md:py-24">
          <h2 className="mx-auto max-w-3xl text-2xl font-bold text-foreground md:text-3xl">
            Vous souhaitez évaluer l'exposition de vos équipes ?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Nos experts analysent votre situation et vous proposent une campagne de mesure adaptée à
            votre site, vos contraintes de production et vos obligations réglementaires.
          </p>
          <div className="mt-9 flex justify-center">
            <BookingButton />
          </div>
        </Container>
      </section>
    </>
  );
}
