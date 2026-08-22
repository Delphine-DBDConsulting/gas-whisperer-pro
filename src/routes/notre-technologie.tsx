import frenchFabLogo from "@/assets/french-fab-logo.png.asset.json";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Atom,
  Beaker,
  Brush,
  CircuitBoard,
  Clock,
  Crosshair,
  Database,
  FireExtinguisher,
  Factory,
  IdCard,
  Layers,
  Leaf,
  LineChart,
  MapPin,
  Pill,
  Snowflake,
  Waves,
  Wrench,
  Zap,
} from "lucide-react";

import { BookingButton } from "@/components/site/booking";
import { Container } from "@/components/site/container";

const TITLE = "Technologie OPO Laser pour la mesure de gaz industriels | CLM Industry";
const DESCRIPTION =
  "Le XFLR-9 de CLM Industry repose sur la technologie OPO Laser. Identification ad nihilo de 500+ espèces gazeuses, précision au ppb, mesure simultanée de 10 gaz. Unique en France.";

const VLEP_URL = "https://www.inrs.fr/publications/bdd/vlep.html";

export const Route = createFileRoute("/notre-technologie")({
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
  component: NotreTechnologie,
});

const heroStats = [
  ["500+", "espèces gazeuses identifiables"],
  ["ppb", "niveau de précision"],
  ["< 1h", "déploiement sur site"],
];

const opoSteps = [
  {
    icon: Zap,
    title: "Émission laser",
    text: "Le laser OPO émet un faisceau infrarouge accordable sur une large plage spectrale.",
  },
  {
    icon: Waves,
    title: "Balayage spectral",
    text: "Le faisceau balaie le spectre infrarouge et traverse l'échantillon gazeux.",
  },
  {
    icon: Atom,
    title: "Absorption moléculaire",
    text: "Chaque molécule absorbe les longueurs d'onde qui lui sont propres.",
  },
  {
    icon: LineChart,
    title: "Identification et quantification",
    text: "Le système isole l'empreinte de chaque espèce et calcule sa concentration en temps réel.",
  },
];

const specCards = [
  {
    icon: Database,
    title: "500+ espèces gazeuses",
    text: "Identification et quantification de plus de 500 espèces gazeuses, des COV aux NOx, en un seul passage. Des réfrigérants aux substances CMR, en passant par les arômes industriels et les agents de gravure.",
  },
  {
    icon: Layers,
    title: "Jusqu'à 10 gaz en temps réel",
    text: "Mesure simultanée de jusqu'à 10 espèces gazeuses différentes en un seul déploiement. Là où d'autres instruments nécessitent autant d'interventions que de molécules à analyser.",
  },
  {
    icon: Crosshair,
    title: "Précision à l'ordre du ppb",
    text: "Sensibilité exceptionnelle, bien en dessous des seuils VLEP les plus exigeants. Le XFLR-9 détecte des concentrations infimes là où les capteurs classiques atteignent leurs limites.",
  },
  {
    icon: Clock,
    title: "Installation en moins d'une heure",
    text: "Système rack mobile, zéro consommable, aucun gaz vecteur requis. Déploiement sur site sans interruption de production, avec surveillance à distance via routeur 3G/4G intégré.",
  },
];

const lodRows: [string, string, string][] = [
  ["Formaldéhyde", "0,03", "ppm (0,04 mg/m³)"],
  ["Cyclohexane", "0,005", "ppm (0,02 mg/m³)"],
  ["Chlorure d'hydrogène (HCl)", "0,04", "ppm (0,06 mg/m³)"],
  ["Benzène", "0,05", "ppm"],
  ["Toluène", "0,3", "ppm (1 mg/m³)"],
  ["Acétone", "0,1", "ppm (0,3 mg/m³)"],
  ["Cyanure d'hydrogène (HCN)", "0,6", "ppm (0,6 mg/m³)"],
];

const comparison: [string, string, string][] = [
  ["Sélectivité", "✗ Mesure globale du COT", "✓ Isolation par empreinte spectrale"],
  ["Identification CMR", "✗ Impossible", "✓ Instantanée, sans ambiguïté"],
  ["Limite de détection", "Ordre du ppm", "✓ Ordre du ppb"],
  ["Mesure en continu", "Ponctuel / lent", "✓ Temps réel, quelques minutes"],
  ["Identification ad nihilo", "✗ Spectre préalable obligatoire", "✓ Sans spectre préalable"],
  ["Consommables", "Gaz vecteurs, filtres, tubes", "✓ Zéro consommable"],
  ["Analyse non-destructive", "✗", "✓"],
  ["Déploiement sur site", "Lourd et intrusif", "✓ < 1 heure"],
  ["Mesures simultanées", "1 molécule à la fois", "✓ Jusqu'à 10 gaz"],
];

const sectors = [
  {
    icon: Beaker,
    title: "Chimie industrielle",
    text: "Solvants, résines, agents de nettoyage, intermédiaires de réaction",
  },
  {
    icon: Snowflake,
    title: "Réfrigération & transfert thermique",
    text: "Fluides frigorigènes CFC, HCFC, HFC, ammoniac",
  },
  {
    icon: Brush,
    title: "Peintures, revêtements & colles",
    text: "Solvants, encres, vernis, adhésifs",
  },
  {
    icon: Leaf,
    title: "Agroalimentaire & fragrances",
    text: "Arômes, agents de fermentation, agrochimie",
  },
  {
    icon: Factory,
    title: "Pétrochimie & énergie",
    text: "Carburants, additifs, hydrocarbures, biocarburants",
  },
  {
    icon: Pill,
    title: "Pharmacie & biotech",
    text: "Principes actifs, solvants de synthèse, biomarqueurs",
  },
  {
    icon: CircuitBoard,
    title: "Microélectronique",
    text: "Gravure plasma, dépôt de couches minces, agents de fabrication",
  },
  {
    icon: FireExtinguisher,
    title: "Sécurité incendie",
    text: "Agents extincteurs, systèmes de suppression Halon/FM-200",
  },
];

const fleetCards = [
  {
    icon: Wrench,
    title: "4 analyseurs disponibles",
    text: "Une flotte dimensionnée pour répondre à plusieurs missions simultanées, sur des sites industriels de toute taille.",
  },
  {
    icon: IdCard,
    title: "Intervenants certifiés N1 et N2",
    text: "Nos techniciens sont certifiés pour intervenir en milieu industriel, avec tenue adaptée et respect des protocoles de sécurité site.",
  },
  {
    icon: MapPin,
    title: "Déplacement sur site",
    text: "CLM Industry se déplace sur votre site industriel partout en France. Installation en moins d'une heure, sans interruption de votre production.",
  },
];

function Cell({ value }: { value: string }) {
  if (value.startsWith("✓")) {
    return <span className="text-accent">{value}</span>;
  }
  if (value.startsWith("✗")) {
    return <span className="text-destructive">{value}</span>;
  }
  return <span className="text-muted-foreground">{value}</span>;
}

function NotreTechnologie() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="border-b border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Notre technologie
          </div>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl">
            Une technologie de rupture au service de la mesure industrielle
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Le XFLR-9 repose sur la technologie OPO Laser (Oscillateur Paramétrique Optique), issue
            de l'aérospatial. Là où les capteurs classiques ne voient qu'un signal global, le
            XFLR-9 lit l'empreinte infrarouge unique de chaque molécule — et identifie plus de 500
            espèces gazeuses, en temps réel, avec une précision à l'ordre du ppb.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <BookingButton />
            <Link to="/sante-environnement" className="cta-outline">
              Découvrir nos solutions
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {heroStats.map(([n, l]) => (
              <div key={l} className="card-hover rounded-lg border border-border bg-card p-6">
                <div className="text-3xl font-extrabold leading-none text-accent">{n}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 2 — Limites des capteurs classiques */}
      <Container className="py-16 md:py-24">
        <h2 className="max-w-3xl text-2xl font-bold text-foreground md:text-3xl">
          Ce que les capteurs classiques ne peuvent pas vous dire
        </h2>
        <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Les capteurs FID (Détecteur à Ionisation de Flamme) et PID (Détecteur à
            Photo-Ionisation) sont les instruments de mesure les plus répandus dans l'industrie.
            Leur principe repose sur la mesure du Carbone Organique Total (COT) présent dans l'air :
            ils détectent une présence de gaz, mais sont incapables d'identifier quelle molécule est
            concernée.
          </p>
          <p>
            Cette limite a des conséquences directes sur la conformité réglementaire. Sans
            identification précise des espèces gazeuses présentes, impossible de distinguer un
            solvant inoffensif d'une substance Cancérogène, Mutagène et Reprotoxique (CMR) soumise à
            une{" "}
            <a
              href={VLEP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4"
            >
              Valeur Limite d'Exposition Professionnelle
            </a>{" "}
            contraignante. Votre dossier de conformité reste incomplet — et juridiquement fragile.
          </p>
          <p>
            Une autre limite fondamentale : les capteurs FID/PID nécessitent un spectre de référence
            préalable pour chaque molécule qu'ils doivent mesurer. Ils ne peuvent identifier que ce
            qu'on leur a appris à chercher. Un composé inconnu ou inattendu passera systématiquement
            sous leur radar.
          </p>
        </div>
      </Container>

      {/* Section 3 — La résolution OPO */}
      <section className="border-y border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <h2 className="max-w-3xl text-2xl font-bold text-foreground md:text-3xl">
            La résolution OPO : lire l'empreinte digitale des molécules
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              L'Oscillateur Paramétrique Optique (OPO) est un spectromètre infrarouge accordable.
              Contrairement à un laser classique qui n'émet qu'une seule longueur d'onde, l'OPO
              balaie l'ensemble du spectre infrarouge pour isoler l'empreinte optique unique et
              indubitable de chaque molécule présente dans l'air ambiant.
            </p>
            <p>
              Chaque espèce gazeuse absorbe la lumière infrarouge à des longueurs d'onde qui lui
              sont propres — comme une empreinte digitale moléculaire. Le XFLR-9 exploite ce
              principe pour identifier et quantifier simultanément jusqu'à 10 gaz différents en
              temps réel, sans confusion possible entre molécules, et sans spectre de référence
              préalable.
            </p>
          </div>

          <div className="mt-10 max-w-3xl rounded-lg border border-border border-l-4 border-l-accent bg-accent/10 p-6">
            <div className="font-bold text-accent">Identification ad nihilo</div>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Contrairement aux capteurs classiques qui ne peuvent mesurer que des molécules
              préalablement référencées, le XFLR-9 identifie des espèces gazeuses inconnues à partir
              de zéro — sans base de comparaison préétablie. Une capacité unique qui permet de
              détecter des composés imprévus que les autres instruments ne voient tout simplement
              pas.
            </p>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {opoSteps.map((s, i) => (
              <li key={s.title} className="card-hover rounded-lg border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <s.icon className="h-7 w-7 text-accent" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Étape {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Section 4 — XFLR-9 en détail */}
      <Container className="py-16 md:py-24">
        <h2 className="max-w-3xl text-2xl font-bold text-foreground md:text-3xl">
          Le XFLR-9 : caractéristiques techniques
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Développé sur 13 années de R&amp;D, le XFLR-9 est un analyseur de gaz propriétaire unique
          en France. Conçu pour les environnements industriels complexes, il combine la précision
          de la spectroscopie laser infrarouge avec la robustesse d'un système rack mobile
          déployable en moins d'une heure.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {specCards.map((c) => (
            <div key={c.title} className="card-hover rounded-xl border border-border bg-card p-8">
              <c.icon className="h-7 w-7 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-xl font-bold text-foreground">
          Exemples de limites de détection (LOD)
        </h3>
        <div className="mt-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Limites de détection du XFLR-9 pour quelques substances courantes
            </caption>
            <thead>
              <tr className="bg-accent text-accent-foreground">
                <th scope="col" className="px-5 py-4 font-semibold">
                  Substance
                </th>
                <th scope="col" className="px-5 py-4 font-semibold">
                  LOD
                </th>
                <th scope="col" className="px-5 py-4 font-semibold">
                  Unité
                </th>
              </tr>
            </thead>
            <tbody>
              {lodRows.map(([s, lod, unit], i) => (
                <tr key={s} className={i % 2 === 0 ? "bg-background" : "bg-card"}>
                  <th scope="row" className="px-5 py-4 text-left font-medium text-foreground">
                    {s}
                  </th>
                  <td className="px-5 py-4 text-accent">{lod}</td>
                  <td className="px-5 py-4 text-muted-foreground">{unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
          LOD : Limite de Détection — concentration minimale détectable par l'analyseur dans des
          conditions standard.
        </p>
      </Container>

      {/* Section 5 — Tableau comparatif */}
      <section className="border-y border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <h2 className="max-w-3xl text-2xl font-bold text-foreground md:text-3xl">
            OPO Laser vs capteurs classiques : la matrice de diagnostic
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Face aux méthodes FID/PID traditionnelles, la technologie OPO Laser du XFLR-9 apporte
            une résolution spectrale sans équivalent sur le marché industriel français.
          </p>

          <div className="mt-10 overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Comparaison entre capteurs FID/PID classiques et l'analyseur XFLR-9
              </caption>
              <thead>
                <tr className="bg-accent text-accent-foreground">
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Critère
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Capteurs classiques FID/PID
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    XFLR-9 — CLM Industry
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([c, a, b], i) => (
                  <tr key={c} className={i % 2 === 0 ? "bg-background" : "bg-card"}>
                    <th scope="row" className="px-5 py-4 text-left font-medium text-foreground">
                      {c}
                    </th>
                    <td className="px-5 py-4">
                      <Cell value={a} />
                    </td>
                    <td className="px-5 py-4">
                      <Cell value={b} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 rounded-lg border border-accent/40 bg-card p-8 text-center">
            <p className="mx-auto max-w-3xl text-base italic leading-relaxed text-muted-foreground">
              Sans résolution spectrale, impossible de garantir la conformité VLEP avec certitude
              pour les substances CMR. La technologie OPO Laser est la seule approche permettant une
              identification moléculaire complète en conditions industrielles réelles.
            </p>
          </div>
        </Container>
      </section>

      {/* Section 6 — La flotte */}
      <Container className="py-16 md:py-24">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">La flotte CLM Industry</h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          CLM Industry dispose d'une flotte de 4 analyseurs XFLR-9, maintenus en état optimal de
          fonctionnement et disponibles pour des déploiements simultanés sur plusieurs sites. Chaque
          appareil est régulièrement étalonné et vérifié pour garantir la fiabilité et la
          traçabilité des mesures produites.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {fleetCards.map((c) => (
            <div key={c.title} className="card-hover rounded-xl border border-border bg-card p-8">
              <c.icon className="h-7 w-7 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-accent/40 bg-[color:var(--footer)] p-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <div className="shrink-0 rounded-lg bg-white p-4">
              <img
                src={frenchFabLogo.url}
                alt="La French Fab — Le label de la French Industry"
                width={200}
                height={100}
                loading="lazy"
                className="h-20 w-auto"
              />
            </div>
            <p className="max-w-3xl text-center text-base leading-relaxed text-muted-foreground md:text-left">
              CLM Industry est membre La French Fab depuis 2025 — le label du Ministère de l'Économie
              qui distingue les industriels français engagés dans l'excellence et l'innovation
              manufacturière.
            </p>
          </div>
        </div>
      </Container>

      {/* Section 7 — Secteurs d'application */}
      <Container className="py-16 md:py-24">
        <h2 className="max-w-3xl text-2xl font-bold text-foreground md:text-3xl">
          Nos secteurs d'application
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Le XFLR-9 identifie et mesure les émissions gazeuses dans l'ensemble des environnements
          industriels émetteurs de COV et de NOx. Sa capacité d'identification ad nihilo de plus de
          500 espèces gazeuses en fait un instrument universel, adapté à tous les process
          industriels.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s) => (
            <div
              key={s.title}
              className="card-hover rounded-xl border border-border bg-card p-6 text-center"
            >
              <s.icon className="mx-auto h-7 w-7 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-sm font-medium text-foreground">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Section 8 — Deux exemples concrets */}
      <section className="border-y border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Deux exemples concrets</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="card-hover flex flex-col rounded-xl border border-border bg-card p-8">
              <span className="w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                Santé &amp; Environnement
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Une VLEP benzène dépassée identifiée avant contrôle
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Des capteurs PID signalaient une hausse de COV sans permettre d'en identifier
                l'origine, à quelques semaines d'un contrôle réglementaire. La campagne CLM Industry
                a isolé le benzène comme molécule responsable et localisé la fuite sur une ligne de
                transfert. Correction réalisée avant le contrôle.
              </p>
              <p className="mt-5 font-bold text-accent">Arrêt de poste évité</p>
              <Link
                to="/sante-environnement"
                className="mt-5 text-sm font-semibold text-accent hover:underline"
              >
                Découvrir la solution Santé &amp; Environnement →
              </Link>
            </article>

            <article className="card-hover flex flex-col rounded-xl border border-border bg-card p-8">
              <span className="w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                Émissions &amp; Performance
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Charbons actifs : cycle de remplacement optimisé
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Une installation d'abattage des COV dans l'industrie pharmaceutique imposait un
                remplacement des filtres toutes les trois semaines par simple précaution. Une
                campagne de mesure amont/aval sur un mois a démontré qu'un remplacement mensuel
                était amplement suffisant pour garantir la conformité VLEP.
              </p>
              <p className="mt-5 font-bold text-accent">130 000 € économisés par an</p>
              <Link
                to="/emissions-performance"
                className="mt-5 text-sm font-semibold text-accent hover:underline"
              >
                Découvrir la solution Émissions &amp; Performance →
              </Link>
            </article>
          </div>
          <div className="mt-10 text-center">
            <Link to="/references" className="text-sm font-semibold text-accent hover:underline">
              Voir tous nos cas clients →
            </Link>
          </div>
        </Container>
      </section>


      {/* Section 9 — CTA finale */}
      <section className="border-t-2 border-accent">
        <Container className="py-16 text-center md:py-24">
          <h2 className="mx-auto max-w-3xl text-2xl font-bold text-foreground md:text-3xl">
            Vous souhaitez en savoir plus sur notre technologie ?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Nos experts sont disponibles pour vous présenter le XFLR-9 en détail, répondre à vos
            questions techniques et évaluer la faisabilité d'une campagne de mesure sur votre site.
          </p>
          <div className="mt-9 flex justify-center">
            <BookingButton />
          </div>
        </Container>
      </section>
    </>
  );
}
