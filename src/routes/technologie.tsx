import { createFileRoute, Link } from "@tanstack/react-router";

import xfi9 from "@/assets/xfi9-analyzer.jpg";
import { BookingButton } from "@/components/site/booking";
import { Container, PageHeader } from "@/components/site/container";

const DESCRIPTION =
  "Le XFLR-9 de CLM Industry utilise la technologie OPO Laser issue de l'aérospatial : identification de plus de 500 gaz au ppb, sans consommable, en moins d'une heure.";

export const Route = createFileRoute("/technologie")({
  head: () => ({
    meta: [
      { title: "Technologie OPO Laser & analyseur XFLR-9 — CLM Industry" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Technologie OPO Laser & analyseur XFLR-9" },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Technologie,
});

const rows = [
  ["Identification des molécules", "✗ Mesure globale uniquement", "✓ 500+ espèces identifiées"],
  ["Précision", "Ordre du ppm", "Ordre du ppb"],
  ["Différenciation CMR", "✗ Impossible", "✓ Instantanée"],
  ["Consommables", "Gaz vecteurs, tubes, filtres", "Zéro consommable"],
  ["Déploiement", "Lourd et intrusif", "< 1 heure sur site"],
];

const stats = [
  ["500+", "espèces gazeuses identifiables"],
  ["< 1h", "déploiement sur site, sans interruption de production"],
  ["ppb", "niveau de précision de détection"],
  ["10", "gaz mesurés simultanément en temps réel"],
];

function Technologie() {
  return (
    <>
      <PageHeader
        eyebrow="Notre technologie"
        title="La mesure de gaz industriels à la résolution spectrale"
        intro="Le XFLR-9 lit l'empreinte infrarouge de chaque molécule présente dans l'air. Là où un capteur classique détecte une présence, il identifie une substance."
      />

      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <h2 className="text-2xl font-bold text-accent md:text-3xl">
            L'OPO Laser, issu de l'aérospatial
          </h2>
          <p>
            L'Oscillateur Paramétrique Optique génère un faisceau infrarouge accordable sur une
            large plage de longueurs d'onde. Chaque molécule absorbant l'infrarouge selon une
            signature qui lui est propre, l'analyseur ne déduit pas la présence d'un gaz : il la
            lit.
          </p>
          <p>
            Le XFLR-9, analyseur propriétaire unique en France, exploite cette technologie pour
            identifier et quantifier simultanément jusqu'à 10 gaz différents en temps réel, parmi
            plus de 500 espèces gazeuses, jusqu'au niveau du ppb.
          </p>
          <p className="text-foreground">
            Aucun gaz vecteur, aucun tube, aucun filtre : la mesure est directe, non intrusive et
            reproductible.
          </p>
        </div>
        <img
          src={xfi9}
          alt="Analyseur XFLR-9 — laser OPO pour la mesure de gaz industriels"
          width={1024}
          height={1024}
          loading="lazy"
          className="w-full rounded-lg border border-border/60 shadow-2xl"
        />
      </Container>

      <section className="border-y border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <h2 className="max-w-3xl text-2xl font-bold text-foreground md:text-3xl">
            Pourquoi les méthodes classiques ne suffisent plus
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Les capteurs FID et PID mesurent le carbone organique total présent dans l'air. Ils
              détectent une présence de gaz, mais sont incapables d'identifier précisément la
              molécule mesurée.
            </p>
            <p>
              Résultat : vous savez qu'il y a quelque chose dans l'air, sans savoir s'il s'agit de
              benzène à 0,2 ppm ou d'un solvant inoffensif. Sans identification, la conformité VLEP
              ne peut pas être garantie.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Comparaison entre capteurs FID/PID classiques et l'analyseur OPO Laser de CLM
                Industry
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
                {rows.map(([c, a, b], i) => (
                  <tr key={c} className={i % 2 === 0 ? "bg-background" : "bg-card"}>
                    <th scope="row" className="px-5 py-4 text-left font-medium text-foreground">
                      {c}
                    </th>
                    <td className="px-5 py-4 text-muted-foreground">{a}</td>
                    <td className="px-5 py-4 text-accent">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l} className="card-hover rounded-lg border border-border bg-card p-8">
              <div className="text-4xl font-extrabold leading-none text-accent">{n}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="border-t-2 border-accent">
        <Container className="py-16 text-center md:py-24">
          <h2 className="mx-auto max-w-3xl text-2xl font-bold text-foreground md:text-3xl">
            Voir ce que le XFLR-9 détecte sur votre site
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