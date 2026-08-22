import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Atom,
  BarChart3,
  Check,
  ClipboardList,
  Droplets,
  FileCheck2,
  Filter,
  Flame,
  Leaf,
  Search,
  Snowflake,
  Wifi,
  Wrench,
  Zap,
  Award,
} from "lucide-react";

import { BookingButton } from "@/components/site/booking";
import { Container } from "@/components/site/container";

const TITLE =
  "Monitoring des émissions COV et optimisation des systèmes d'abattage | CLM Industry";
const DESCRIPTION =
  "CLM Industry mesure et monitore vos émissions de gaz industriels sur la durée. Mesures amont/aval de vos systèmes d'abattage, reporting régulier, optimisation des installations. Analyseur XFLR-9 OPO Laser.";

const VLEP_URL = "https://www.inrs.fr/publications/bdd/vlep.html";
const COV_URL = "https://aida.ineris.fr/inspection-icpe/air/cov/cov";
const ADEME_URL =
  "https://librairie.ademe.fr/air-et-bruit/1183-reduction-a-la-source-des-emissions-de-cov-solutions-existantes-par-secteur-d-activite.html";
const DRIETS_URL = "https://drieets.ile-de-france.gouv.fr";

const abatement = [
  {
    icon: Filter,
    title: "Charbon actif",
    text: "Adsorption des COV sur lit de charbon. Le XFLR-9 détermine la saturation réelle du filtre et optimise la fréquence de remplacement.",
  },
  {
    icon: Flame,
    title: "Oxydateur thermique (RTO)",
    text: "Combustion des COV à haute température. La mesure aval confirme le taux de destruction réel et permet d'ajuster la puissance du brûleur selon l'activité.",
  },
  {
    icon: Atom,
    title: "Oxydation catalytique",
    text: "Oxydation à basse température par catalyseur. Le XFLR-9 surveille l'efficacité du lit catalytique et détecte les composés susceptibles d'empoisonner le catalyseur.",
  },
  {
    icon: Leaf,
    title: "Biofiltre",
    text: "Dégradation biologique des COV. La mesure évalue les performances réelles du biofiltre et détecte les pics d'émission liés aux cycles de production.",
  },
  {
    icon: Droplets,
    title: "Scrubber / Laveur de gaz",
    text: "Absorption des COV par solvant liquide. Le XFLR-9 quantifie l'efficacité de l'absorption molécule par molécule.",
  },
  {
    icon: Snowflake,
    title: "Condensation",
    text: "Refroidissement du flux pour récupérer les COV en phase liquide. Recommandé sur fortes concentrations, souvent couplé à l'adsorption.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Cadrage et préparation",
    text: "Analyse de votre installation, identification des points de prélèvement amont et aval, définition de la durée de campagne selon vos cycles de production.",
  },
  {
    icon: Wrench,
    title: "Déploiement sur site",
    text: "Installation des deux analyseurs XFLR-9 en moins d'une heure, sans interruption de production. Connexion au routeur 3G/4G pour surveillance à distance.",
  },
  {
    icon: Wifi,
    title: "Monitoring continu",
    text: "Mesures en temps réel, surveillance à distance via cloud, débriefing quotidien. Les données sont accessibles en continu depuis nos équipes.",
  },
  {
    icon: FileCheck2,
    title: "Rapport et recommandations",
    text: "À l'issue de la campagne : réunion de débriefing, remise d'un rapport d'expertise complet avec analyses, conclusions et recommandations d'optimisation.",
  },
];

const deliverables = [
  "Courbes d'émission continues, par molécule, sur toute la durée de la campagne.",
  "Rendement d'abattage réel de chaque équipement, amont/aval.",
  "Identification des pics d'émission et corrélation avec les événements de production.",
  "Reporting intermédiaire régulier pendant la campagne.",
  "Plan d'optimisation : réglages process, dimensionnement et maintenance des systèmes de traitement.",
];

const faq = [
  {
    q: "Les données sont-elles exploitables pour l'ICPE ?",
    a: "Oui. Les mesures sont horodatées, tracées et fournies par molécule, ce qui les rend directement exploitables pour vos déclarations et vos échanges avec la DREAL.",
  },
  {
    q: "Quel retour sur investissement attendre ?",
    a: "Le ROI provient principalement de l'optimisation du dimensionnement et de la maintenance des systèmes d'abattage, et de la réduction des consommations associées.",
  },
  {
    q: "Peut-on enchaîner avec la solution Santé & Environnement ?",
    a: "Oui, les deux solutions sont complémentaires : l'une documente l'exposition des personnes, l'autre la performance des installations.",
  },
];

const caseStudies = [
  {
    sector: "Industrie chimique",
    title: "RTO : consommation de gaz naturel réduite de 25 %",
    problem:
      "L'oxydateur thermique régénératif fonctionnait en permanence au maximum, à 50 m³/h de gaz naturel, faute de mesure du besoin réel.",
    result:
      "Trois semaines de mesure amont/aval ont montré que la consommation du brûleur pouvait être abaissée de 10 % à 50 % selon les périodes d'activité.",
    kpi: "164 250 € d'économie par an — 292 tonnes de CO₂ évitées",
  },
  {
    sector: "Industrie pharmaceutique",
    title: "Charbons actifs : cycle de remplacement optimisé",
    problem:
      "Une installation d'abattage des COV imposait un remplacement des filtres toutes les trois semaines, sans donnée de saturation réelle.",
    result:
      "Une campagne de mesure amont/aval sur un mois a démontré qu'un remplacement mensuel suffisait pour ce procédé.",
    kpi: "130 000 € d'économie par an",
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
];

const useCases = [
  {
    icon: BarChart3,
    title: "Optimisation de la maintenance",
    text: "Votre système d'abattage est remplacé ou régénéré selon un calendrier fixe, sans donnée réelle de saturation. La campagne CLM Industry détermine la fréquence optimale et réduit vos coûts de maintenance.",
  },
  {
    icon: Zap,
    title: "Réduction de la consommation énergétique",
    text: "Votre RTO ou oxydateur catalytique fonctionne à puissance maximale en permanence. La mesure amont/aval révèle les plages où la puissance peut être abaissée sans risque de dépassement des VLEP.",
  },
  {
    icon: Search,
    title: "Diagnostic d'un système sous-performant",
    text: "Vos capteurs signalent des anomalies en aval de votre système d'abattage. Le XFLR-9 identifie précisément les molécules qui passent au travers et oriente votre plan d'action corrective.",
  },
];

export const Route = createFileRoute("/emissions-performance")({
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
  component: EmissionsPerformancePage,
});

/* ---------- Graphique multi-espèces (SVG, SSR-safe) ---------- */
const SERIES = [
  {
    name: "Benzène",
    vlep: 0.2,
    unitMax: 0.5,
    axis: "left" as const,
    color: "#2a78d6",
    data: [0.05, 0.1, 0.28, 0.35, 0.18, 0.12, 0.08, 0.06],
  },
  {
    name: "Formaldéhyde",
    vlep: 0.3,
    unitMax: 0.5,
    axis: "left" as const,
    color: "#1baf7a",
    data: [0.08, 0.15, 0.22, 0.38, 0.28, 0.2, 0.14, 0.1],
  },
  {
    name: "Toluène",
    vlep: 50,
    unitMax: 600,
    axis: "right" as const,
    color: "#eb6834",
    data: [12, 18, 32, 45, 28, 22, 15, 10],
  },
  {
    name: "Acétone",
    vlep: 500,
    unitMax: 600,
    axis: "right" as const,
    color: "#4a3aa7",
    data: [80, 120, 180, 210, 160, 130, 95, 70],
  },
];

function MultiSpeciesChart() {
  const w = 760;
  const h = 340;
  const pad = { top: 16, right: 60, bottom: 34, left: 56 };
  const iw = w - pad.left - pad.right;
  const ih = h - pad.top - pad.bottom;
  const n = SERIES[0].data.length;
  const x = (i: number) => pad.left + (iw * i) / (n - 1);
  const y = (v: number, max: number) => pad.top + ih - (ih * v) / max;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-label="Mesure simultanée de quatre espèces gazeuses sur huit points de prélèvement, comparée aux VLEP respectives"
      className="h-[340px] w-full"
    >
      {Array.from({ length: 6 }, (_, i) => (i * 0.1).toFixed(1)).map((t) => (
        <g key={t}>
          <line
            x1={pad.left}
            x2={w - pad.right}
            y1={y(Number(t), 0.5)}
            y2={y(Number(t), 0.5)}
            stroke="currentColor"
            className="text-border"
            opacity="0.4"
          />
          <text
            x={pad.left - 8}
            y={y(Number(t), 0.5) + 4}
            textAnchor="end"
            fontSize="10"
            className="fill-muted-foreground"
          >
            {t}
          </text>
          <text
            x={w - pad.right + 8}
            y={y(Number(t), 0.5) + 4}
            fontSize="10"
            className="fill-muted-foreground"
          >
            {Math.round(Number(t) * 1200)}
          </text>
        </g>
      ))}

      {SERIES.map((s) => {
        const max = s.unitMax;
        const line = s.data.map((v, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(v, max)}`).join(" ");
        return (
          <g key={s.name}>
            <path d={line} fill="none" stroke={s.color} strokeWidth="2.5" />
            <line
              x1={pad.left}
              x2={w - pad.right}
              y1={y(s.vlep, max)}
              y2={y(s.vlep, max)}
              stroke={s.color}
              strokeWidth="1.5"
              strokeDasharray="6 4"
              opacity="0.7"
            />
            {s.data.map((v, i) => (
              <circle
                key={i}
                cx={x(i)}
                cy={y(v, max)}
                r="3.5"
                fill={v > s.vlep ? "#d03b3b" : s.color}
              >
                <title>{`${s.name} — ${v} ppm — ${v > s.vlep ? "⚠ dépassement" : "✓ conforme"}`}</title>
              </circle>
            ))}
          </g>
        );
      })}

      {Array.from({ length: n }, (_, i) => (
        <text
          key={i}
          x={x(i)}
          y={h - 12}
          textAnchor="middle"
          fontSize="10"
          className="fill-muted-foreground"
        >
          Point {i + 1}
        </text>
      ))}
    </svg>
  );
}

/* ---------- Schéma amont/aval ---------- */
function UpstreamDownstreamDiagram() {
  return (
    <figure className="mt-10">
      <svg
        width="100%"
        viewBox="0 0 680 340"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Schéma explicatif — mesure simultanée amont/aval d'un système d'abattage de COV avec analyseur XFLR-9"
        className="rounded-xl"
      >
        <defs>
          <marker
            id="arrow-abat"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path
              d="M2 1L8 5L2 9"
              fill="none"
              stroke="#4A5568"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>

        {/* Background */}
        <rect width="680" height="340" fill="#F5F6F8" rx="12" />

        {/* PROCESS INDUSTRIEL */}
        <rect x="20" y="100" width="100" height="80" rx="8" fill="#E8ECF0" stroke="#C8D0DA" strokeWidth="0.8" />
        <rect x="38" y="76" width="12" height="28" rx="2" fill="none" stroke="#6B7280" strokeWidth="0.8" />
        <rect x="58" y="68" width="12" height="36" rx="2" fill="none" stroke="#6B7280" strokeWidth="0.8" />
        <rect x="78" y="73" width="12" height="31" rx="2" fill="none" stroke="#6B7280" strokeWidth="0.8" />
        <path d="M44 76 Q42 68 46 62" fill="none" stroke="#9CA3AF" strokeWidth="0.8" opacity="0.6" />
        <path d="M64 68 Q62 58 66 52" fill="none" stroke="#9CA3AF" strokeWidth="0.8" opacity="0.6" />
        <path d="M84 73 Q82 63 86 57" fill="none" stroke="#9CA3AF" strokeWidth="0.8" opacity="0.6" />
        <text x="70" y="136" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="600" fill="#1C2B3A">Process</text>
        <text x="70" y="154" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="#4A5568">industriel</text>

        {/* Flèche process → amont */}
        <line x1="120" y1="140" x2="158" y2="140" stroke="#4A5568" strokeWidth="1.5" markerEnd="url(#arrow-abat)" fill="none" />
        <text x="139" y="133" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#4A5568">COV</text>

        {/* ANALYSEUR AMONT */}
        <rect x="160" y="108" width="110" height="64" rx="8" fill="#E6F1FB" stroke="#185FA5" strokeWidth="1" />
        <text x="215" y="132" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#0C447C">XFLR-9</text>
        <text x="215" y="150" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="600" fill="#185FA5">Amont</text>
        <text x="215" y="163" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#378ADD">(upstream)</text>

        {/* Spectre amont */}
        <rect x="168" y="186" width="94" height="44" rx="4" fill="white" stroke="#D0D5DD" strokeWidth="0.5" />
        <polyline
          points="172,224 180,210 188,218 196,200 204,212 212,196 220,208 228,202 236,215 244,205 252,216 256,218"
          fill="none"
          stroke="#185FA5"
          strokeWidth="1.2"
        />
        <line x1="168" y1="224" x2="262" y2="224" stroke="#D0D5DD" strokeWidth="0.5" />
        <text x="215" y="243" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#4A5568">Spectre amont</text>

        {/* Flèche amont → abattage */}
        <line x1="270" y1="140" x2="308" y2="140" stroke="#4A5568" strokeWidth="1.5" markerEnd="url(#arrow-abat)" fill="none" />

        {/* SYSTÈME D'ABATTAGE */}
        <rect x="310" y="96" width="120" height="88" rx="8" fill="#E1F5EE" stroke="#0F6E56" strokeWidth="1" />
        <line x1="328" y1="108" x2="328" y2="180" stroke="#0F6E56" strokeWidth="0.6" opacity="0.4" />
        <line x1="344" y1="108" x2="344" y2="180" stroke="#0F6E56" strokeWidth="0.6" opacity="0.4" />
        <line x1="360" y1="108" x2="360" y2="180" stroke="#0F6E56" strokeWidth="0.6" opacity="0.4" />
        <line x1="380" y1="108" x2="380" y2="180" stroke="#0F6E56" strokeWidth="0.6" opacity="0.4" />
        <line x1="396" y1="108" x2="396" y2="180" stroke="#0F6E56" strokeWidth="0.6" opacity="0.4" />
        <line x1="412" y1="108" x2="412" y2="180" stroke="#0F6E56" strokeWidth="0.6" opacity="0.4" />
        <text x="370" y="128" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#085041">Système</text>
        <text x="370" y="146" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#085041">d'abattage</text>
        <text x="370" y="164" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="#0F6E56">COV</text>

        {/* Label efficacité */}
        <line x1="310" y1="88" x2="430" y2="88" stroke="#1B4F8A" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.5" />
        <text x="370" y="82" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#1B4F8A" opacity="0.9">Efficacité d'abattage mesurée</text>

        {/* Flèche abattage → aval */}
        <line x1="430" y1="140" x2="468" y2="140" stroke="#4A5568" strokeWidth="1.5" markerEnd="url(#arrow-abat)" fill="none" />

        {/* ANALYSEUR AVAL */}
        <rect x="470" y="108" width="110" height="64" rx="8" fill="#E6F1FB" stroke="#185FA5" strokeWidth="1" />
        <text x="525" y="132" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#0C447C">XFLR-9</text>
        <text x="525" y="150" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="600" fill="#185FA5">Aval</text>
        <text x="525" y="163" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#378ADD">(downstream)</text>

        {/* Spectre aval réduit */}
        <rect x="478" y="186" width="94" height="44" rx="4" fill="white" stroke="#D0D5DD" strokeWidth="0.5" />
        <polyline
          points="482,224 490,222 498,221 506,222 514,221 522,222 530,220 538,222 546,221 554,222 562,221 566,222"
          fill="none"
          stroke="#185FA5"
          strokeWidth="1.2"
        />
        <line x1="478" y1="224" x2="572" y2="224" stroke="#D0D5DD" strokeWidth="0.5" />
        <text x="525" y="243" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#4A5568">Spectre aval</text>

        {/* Flèches vers cloud */}
        <path d="M215 172 L215 272 L348 272" fill="none" stroke="#4A5568" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrow-abat)" opacity="0.5" />
        <path d="M525 172 L525 272 L394 272" fill="none" stroke="#4A5568" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrow-abat)" opacity="0.5" />

        {/* CLOUD */}
        <ellipse cx="370" cy="272" rx="46" ry="20" fill="#E8ECF0" stroke="#C8D0DA" strokeWidth="0.8" />
        <ellipse cx="348" cy="264" rx="20" ry="14" fill="#E8ECF0" stroke="#C8D0DA" strokeWidth="0.8" />
        <ellipse cx="392" cy="264" rx="20" ry="14" fill="#E8ECF0" stroke="#C8D0DA" strokeWidth="0.8" />
        <text x="370" y="277" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="600" fill="#1C2B3A">Cloud</text>

        {/* Flèche cloud → rapport */}
        <line x1="416" y1="272" x2="450" y2="272" stroke="#4A5568" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrow-abat)" fill="none" opacity="0.6" />

        {/* RAPPORT */}
        <rect x="452" y="252" width="90" height="40" rx="8" fill="#EAF3DE" stroke="#3B6D11" strokeWidth="1" />
        <text x="497" y="268" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#27500A">Rapport</text>
        <text x="497" y="284" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#3B6D11">d'expertise</text>

        {/* Légende */}
        <rect x="20" y="255" width="10" height="10" rx="2" fill="#E6F1FB" stroke="#185FA5" strokeWidth="0.8" />
        <text x="34" y="265" fontFamily="Arial, sans-serif" fontSize="10" fill="#4A5568">Analyseur XFLR-9</text>
        <rect x="130" y="255" width="10" height="10" rx="2" fill="#E1F5EE" stroke="#0F6E56" strokeWidth="0.8" />
        <text x="144" y="265" fontFamily="Arial, sans-serif" fontSize="10" fill="#4A5568">Système d'abattage</text>

        {/* Note bas */}
        <text x="20" y="322" fontFamily="Arial, sans-serif" fontSize="10" fill="#6B7280">
          Routeur 3G/4G intégré — Surveillance à distance — Débriefing quotidien — Rapport de conformité VLEP
        </text>
      </svg>
      <figcaption className="mt-3 text-center text-[11px] text-muted-foreground">
        Schéma explicatif — Mesure simultanée amont/aval d'un système d'abattage de COV — CLM Industry XFLR-9
      </figcaption>
    </figure>
  );
}

const receipt = [
  "Les courbes de concentration mesurées en amont et en aval de votre système sur toute la durée de la campagne",
  "Le taux d'efficacité réel de votre installation d'abattage, molécule par molécule",
  "L'identification de toutes les espèces gazeuses présentes, y compris les composés détectés ad nihilo",
  "Les recommandations d'optimisation : fréquence de maintenance, ajustement de puissance, plan d'action corrective",
  "Un document opposable présentable en cas de contrôle réglementaire (DRIETS, DREETS, inspection des installations classées, CSE)",
];

function EmissionsPerformancePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <h1 className="max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl">
            Surveillez vos émissions de COV et optimisez l'efficacité de vos systèmes d'abattage
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            CLM Industry met en place une solution de surveillance continue pour mesurer vos
            émissions de COV sur 1 à 2 mois. Le monitoring, couplé avec un système d'alertes et
            accessible à distance, permet de mesurer l'efficacité de vos systèmes d'abattage en
            temps réel, et d'optimiser les cycles de production.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <BookingButton />
            <Link to="/sante-environnement" className="cta-outline">
              Découvrir Santé &amp; Environnement
            </Link>
          </div>
        </Container>
      </section>

      {/* LE CONTEXTE */}
      <Container className="py-16 md:py-24">
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Vos systèmes d'abattage sont-ils réellement efficaces ?</h2>
          <p>
            Un système d'abattage des COV n'a de valeur que par son rendement réel, en conditions
            d'exploitation. Une mesure ponctuelle ne dit rien des pics liés aux changements de
            série, aux démarrages ou aux dérives d'un média filtrant.
          </p>
          <p>
            En mesurant simultanément en amont et en aval de vos équipements, nous quantifions
            l'efficacité d'abattage molécule par molécule, lorsque des solutions plus classiques
            mesurent en carbone organique total, sans distinction.
          </p>
          <p>
            Les données produites alimentent directement vos déclarations environnementales, votre
            dossier ICPE et vos arbitrages d'investissement.
          </p>
        </div>
      </Container>


      {/* LA SOLUTION */}
      <Container className="py-16 md:py-24">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          La mesure amont/aval par CLM Industry
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            CLM Industry déploie deux analyseurs XFLR-9 simultanément — l'un en amont, l'autre en
            aval de votre système d'abattage. Les mesures sont réalisées en temps réel, en continu,
            sur une durée de 1 à 2 mois selon vos cycles de production.
          </p>
          <p>
            Le XFLR-9 se déploie simultanément sur les deux points de mesure pour quantifier
            l'efficacité réelle de votre système, molécule par molécule. Les données produites
            permettent d'ajuster la fréquence de maintenance, d'optimiser la consommation
            énergétique, et de constituer un dossier de conformité opposable en cas de contrôle.
          </p>
          <p>
            Grâce à sa technologie OPO Laser et son identification ad nihilo de plus de 500 espèces
            gazeuses, le XFLR-9 différencie instantanément chaque molécule présente dans le flux —
            des COV aux NOx — sans spectre de référence préalable. Une capacité unique qui permet de
            détecter des composés inconnus que les instruments classiques ne peuvent pas identifier.
          </p>
        </div>
        <UpstreamDownstreamDiagram />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["500+", "espèces gazeuses identifiables"],
            ["Temps réel", "mesure continue amont/aval"],
            ["1 à 2 mois", "durée de campagne type"],
          ].map(([v, l]) => (
            <div key={v} className="rounded-lg border border-border bg-card p-7">
              <div className="text-2xl font-extrabold text-accent">{v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </Container>

      {/* SYSTÈMES D'ABATTAGE */}
      <section className="border-y border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Compatible avec tous vos systèmes d'abattage
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Quelle que soit la technologie installée sur votre site, le XFLR-9 mesure simultanément
            les émissions à l'entrée et à la sortie de vos{" "}
            <a
              href={ADEME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline underline-offset-4"
            >
              systèmes d'abattage
            </a>{" "}
            pour en quantifier l'efficacité réelle.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {abatement.map((c) => (
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

      {/* DÉROULEMENT */}
      <Container className="py-16 md:py-24">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Comment se déroule une campagne Émissions &amp; Performance ?
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="card-hover rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent text-sm font-bold text-accent-foreground">
                  {i + 1}
                </span>
                <s.icon className="h-5 w-5 text-accent" aria-hidden />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{s.title}</h3>
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
          <div className="mt-10 grid gap-6 md:grid-cols-2">
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
            <article className="card-hover rounded-xl border border-border bg-card p-7">
              <Award className="h-6 w-6 text-accent" aria-hidden />
              <h3 className="mt-4 text-base font-bold text-foreground">
                Dossier de conformité environnementale
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Vous devez justifier de l'efficacité de votre système d'abattage auprès des
                autorités (
                <a
                  href={DRIETS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent underline underline-offset-4"
                >
                  DRIETS
                </a>
                , DREETS,{" "}
                <a
                  href={COV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent underline underline-offset-4"
                >
                  inspection des installations classées
                </a>
                ). Le rapport CLM Industry constitue une preuve documentée et opposable.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* LIVRABLES + FAQ */}
      <Container className="py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Vos livrables</h2>
            <ul className="mt-8 space-y-4">
              {deliverables.map((d) => (
                <li key={d.slice(0, 30)} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Questions fréquentes</h2>
            <div className="mt-8 space-y-4">
              {faq.map((f) => (
                <details key={f.q} className="rounded-lg border border-border bg-card p-6">
                  <summary className="cursor-pointer text-base font-semibold text-foreground">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* CE QUE VOUS RECEVEZ */}
      <section className="border-y border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Ce que vous recevez à l'issue de la campagne
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            À l'issue de chaque campagne Émissions &amp; Performance, CLM Industry remet un rapport
            d'expertise complet incluant :
          </p>
          <ul className="mt-8 grid gap-4 lg:grid-cols-2">
            {receipt.map((d) => (
              <li key={d.slice(0, 30)} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span>{d}</span>
              </li>
            ))}
            <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
              <span>
                La comparaison des concentrations mesurées aux{" "}
                <a
                  href={VLEP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent underline underline-offset-4"
                >
                  Valeurs Limites d'Exposition Professionnelle
                </a>{" "}
                (VLEP) en vigueur
              </span>
            </li>
          </ul>

          <div className="mt-14 rounded-lg border border-border bg-card p-6 md:p-8">
            <h3 className="text-lg font-bold text-foreground">
              Exemple de mesure simultanée multi-espèces
            </h3>
            <div className="mt-4 flex flex-wrap gap-5 text-xs text-muted-foreground">
              {SERIES.map((s) => (
                <span key={s.name} className="flex items-center gap-2">
                  <span
                    className="inline-block h-2.5 w-2.5"
                    style={{ backgroundColor: s.color }}
                    aria-hidden
                  />
                  {s.name} (VLEP {s.vlep.toString().replace(".", ",")} ppm)
                </span>
              ))}
              <span className="flex items-center gap-2">
                <span
                  className="h-0.5 w-6"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg,#9aa4b2 0 6px,transparent 6px 10px)",
                  }}
                  aria-hidden
                />
                VLEP respective
              </span>
            </div>
            <div className="mt-4 overflow-x-auto">
              <MultiSpeciesChart />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Benzène", "⚠ Dépassement pts 3-4", true],
                ["Formaldéhyde", "⚠ Dépassement pts 3-5", true],
                ["Toluène", "✓ Conforme", false],
                ["Acétone", "✓ Conforme", false],
              ].map(([name, label, danger]) => (
                <div
                  key={name as string}
                  className={`rounded-md border px-5 py-4 text-sm ${
                    danger
                      ? "border-[#d03b3b]/40 bg-[#d03b3b]/10"
                      : "border-accent/40 bg-accent/10"
                  }`}
                >
                  <div className="font-semibold text-foreground">{name}</div>
                  <div className="mt-1 text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-[11px] text-muted-foreground">
              Exemple illustratif — Mesure simultanée de 4 espèces gazeuses — 8 points de
              prélèvement — Site industriel anonymisé
            </p>
          </div>
        </Container>
      </section>

      {/* CAS CLIENTS */}
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

      {/* CTA FINALE */}
      <section className="border-t-2 border-accent">
        <Container className="py-16 text-center md:py-24">
          <h2 className="mx-auto max-w-3xl text-2xl font-bold text-foreground md:text-3xl">
            Prêt à mesurer l'efficacité réelle de vos installations ?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Nos experts analysent votre configuration et vous proposent une campagne de monitoring
            adaptée à votre système d'abattage, vos cycles de production et vos obligations
            réglementaires.
          </p>
          <div className="mt-9 flex justify-center">
            <BookingButton />
          </div>
        </Container>
      </section>
    </>
  );
}
