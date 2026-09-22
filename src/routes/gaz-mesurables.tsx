import { createFileRoute, Link } from "@tanstack/react-router";

import { BookingButton } from "@/components/site/booking";
import { Container } from "@/components/site/container";

const TITLE = "Gaz mesurables par le XFLR-9 — liste des espèces identifiées | CLM Industry";
const DESCRIPTION =
  "Plus de 500 espèces gazeuses identifiables par l'analyseur XFLR-9 : COV, BTEX, aldéhydes, réfrigérants, composés inorganiques, NOx. Découvrez les familles de gaz mesurées sur site.";

const VLEP_URL = "https://www.inrs.fr/publications/bdd/vlep.html";

const lodRows: [string, string, string][] = [
  ["Formaldéhyde", "0,03", "ppm (0,04 mg/m³)"],
  ["Cyclohexane", "0,005", "ppm (0,02 mg/m³)"],
  ["Chlorure d'hydrogène (HCl)", "0,04", "ppm (0,06 mg/m³)"],
  ["Benzène", "0,05", "ppm"],
  ["Toluène", "0,3", "ppm (1 mg/m³)"],
  ["Acétone", "0,1", "ppm (0,3 mg/m³)"],
  ["Cyanure d'hydrogène (HCN)", "0,6", "ppm (0,6 mg/m³)"],
];

const families = [
  {
    title: "COV & BTEX",
    examples: "Benzène, toluène, xylènes, cyclohexane, acétone, solvants industriels",
    detail:
      "Les Composés Organiques Volatils représentent la majeure partie des émissions industrielles. Le XFLR-9 les distingue molécule par molécule, y compris au sein d'un mélange complexe.",
  },
  {
    title: "Substances CMR & aldéhydes",
    examples: "Formaldéhyde, substances cancérogènes, mutagènes et reprotoxiques",
    detail:
      "Suivies par des VLEP contraignantes, ces substances exigent une mesure sélective et précise, bien en dessous des seuils réglementaires.",
  },
  {
    title: "Réfrigérants & fluides techniques",
    examples: "CFC, HCFC, HFC, fréons, ammoniac",
    detail:
      "Fluides frigorigènes et agents de transfert thermique, mesurables même à faible concentration pour détecter les fuites et documenter les inventaires.",
  },
  {
    title: "Composés inorganiques & acides",
    examples: "Chlorure d'hydrogène (HCl), cyanure d'hydrogène (HCN)",
    detail:
      "Des composés dangereux souvent invisibles pour les capteurs classiques, identifiables directement par leur empreinte infrarouge.",
  },
  {
    title: "Oxydes d'azote (NOx)",
    examples: "NO, NO₂ et composés azotés",
    detail:
      "Mesurés en continu pour le suivi des émissions atmosphériques et le dossier ICPE.",
  },
  {
    title: "Applications sectorielles",
    examples: "Arômes et fragrances, agents de gravure plasma, solvants de synthèse, carburants et additifs",
    detail:
      "De l'agroalimentaire à la microélectronique en passant par la pharmacie et la pétrochimie, l'analyseur s'adapte à tous les process émetteurs.",
  },
];

export const Route = createFileRoute("/gaz-mesurables")({
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
  component: GazMesurables,
});

function GazMesurables() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <span className="inline-flex rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
            Capacités de mesure
          </span>
          <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl">
            Plus de 500 espèces gazeuses identifiables sur votre site
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Bien au-delà du benzène et du formaldéhyde, l'analyseur XFLR-9 identifie et quantifie
            plus de 500 espèces gazeuses en temps réel — des COV aux NOx, en un seul passage.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <BookingButton />
            <Link to="/notre-technologie" className="cta-outline">
              Découvrir la technologie OPO Laser
            </Link>
          </div>
        </Container>
      </section>

      {/* FAMILLES DE GAZ */}
      <Container className="py-16 md:py-24">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Les familles de gaz mesurées
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          La liste ci-dessous n'est pas exhaustive : elle présente les principales familles de
          composés suivies lors de nos campagnes. Pour vérifier la mesurabilité d'une molécule
          précise, contactez-nous.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {families.map((f) => (
            <article
              key={f.title}
              className="card-hover rounded-xl border border-border bg-card p-7"
            >
              <h3 className="text-base font-bold text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm font-medium text-accent">{f.examples}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.detail}</p>
            </article>
          ))}
        </div>
      </Container>

      {/* LOD */}
      <section className="border-y border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Exemples de limites de détection (LOD)
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Quelques valeurs de limite de détection, à comparer aux{" "}
            <a
              href={VLEP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline underline-offset-4"
            >
              VLEP en vigueur
            </a>
            .
          </p>
          <div className="mt-10 overflow-x-auto rounded-lg border border-border">
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
      </section>

      {/* CTA */}
      <section className="border-t-2 border-accent">
        <Container className="py-16 text-center md:py-24">
          <h2 className="mx-auto max-w-3xl text-2xl font-bold text-foreground md:text-3xl">
            Une molécule précise à mesurer sur votre site ?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Nos experts vous confirment la mesurabilité de vos composés et construisent avec vous le
            protocole de campagne adapté à vos enjeux.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <BookingButton />
            <Link to="/contact" className="cta-outline">
              Nous contacter
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
