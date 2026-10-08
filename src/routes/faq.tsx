import { createFileRoute, Link } from "@tanstack/react-router";

import { Container, PageHeader } from "@/components/site/container";

type QA = { q: string; a: string };

const groups: { title: string; to: "/sante-environnement" | "/emissions-performance"; items: QA[] }[] = [
  {
    title: "Santé & Environnement",
    to: "/sante-environnement",
    items: [
      {
        q: "Le rapport CLM Industry est-il présentable en cas d'inspection ?",
        a: "Oui. Chaque rapport est horodaté, tracé et signé. Il documente les concentrations mesurées molécule par molécule, les comparaisons aux VLEP en vigueur et les recommandations. Il peut être présenté à la DRIETS, la DREETS, au médecin du travail ou au CSE.",
      },
      {
        q: "Quelle est la différence avec un capteur PID classique ?",
        a: "Un capteur PID mesure le Carbone Organique Total (COT) sans identifier la molécule. Le XFLR-9 identifie et quantifie plus de 500 espèces gazeuses en temps réel, avec une précision à l'ordre du ppb. C'est cette identification qui donne à votre dossier toute sa valeur.",
      },
      {
        q: "Combien de temps dure une campagne de mesure ?",
        a: "La durée dépend du nombre de postes de travail et de la complexité du site. Une campagne de conformité VLEP classique se déroule sur quelques jours à deux semaines, avec un déploiement rapide et sans interruption de production.",
      },
      {
        q: "Le XFLR-9 peut-il mesurer plusieurs gaz simultanément ?",
        a: "Oui. L'analyseur mesure jusqu'à 10 espèces gazeuses en un seul passage. Cela permet de cartographier l'exposition réelle sans multiplier les interventions et les consommables.",
      },
      {
        q: "Faut-il arrêter la production ?",
        a: "Non. Le déploiement prend moins d'une heure et la mesure se fait en conditions réelles d'exploitation, ce qui est justement l'intérêt de la méthode.",
      },
      {
        q: "La campagne remplace-t-elle le contrôle CMR accrédité ?",
        a: "Elle le prépare et le sécurise en identifiant précisément les molécules et les zones à risque. Le contrôle réglementaire par organisme accrédité reste requis pour les substances CMR.",
      },
      {
        q: "Quelles molécules pouvez-vous détecter ?",
        a: "Plus de 500 espèces gazeuses, dont le benzène, le formaldéhyde, les fréons et la majorité des COV rencontrés en milieu industriel.",
      },
    ],
  },
  {
    title: "Émissions & Performance",
    to: "/emissions-performance",
    items: [
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
    ],
  },
];

const DESCRIPTION =
  "Questions fréquentes sur les campagnes de mesure de gaz industriels CLM Industry : conformité VLEP/CMR, analyseur XFLR-9, ICPE, durée et rapports.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Questions fréquentes | CLM Industry" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "FAQ — Questions fréquentes | CLM Industry" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: groups.flatMap((g) =>
            g.items.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: i.a },
            })),
          ),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions fréquentes"
        intro="Les réponses aux questions que nous posent le plus souvent les responsables HSE, environnement et production."
      />
      <Container className="py-12 md:py-20">
        <div className="space-y-16">
          {groups.map((g) => (
            <section key={g.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h2 className="text-2xl font-bold text-foreground">{g.title}</h2>
                <Link to={g.to} className="text-sm font-semibold text-accent hover:underline">
                  Découvrir la solution →
                </Link>
              </div>
              <div className="mt-6 divide-y divide-border rounded-lg border border-border bg-card">
                {g.items.map((i) => (
                  <details key={i.q} className="group p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                      {i.q}
                      <span className="text-accent transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{i.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
