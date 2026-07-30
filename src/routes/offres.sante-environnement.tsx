import { createFileRoute } from "@tanstack/react-router";

import { OfferPage } from "@/components/site/offer-page";

const DESCRIPTION =
  "Campagne de mesure ponctuelle des gaz industriels : identification des molécules présentes, cartographie des expositions et rapport de conformité VLEP/CMR.";

export const Route = createFileRoute("/offres/sante-environnement")({
  head: () => ({
    meta: [
      { title: "Offre Santé & Environnement — Conformité VLEP | CLM Industry" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Offre Santé & Environnement — Conformité VLEP" },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: () => (
    <OfferPage
      eyebrow="Offre 1"
      title="Santé & Environnement : savoir précisément ce que respirent vos équipes"
      intro="Une campagne de mesure ponctuelle qui identifie les molécules réellement présentes dans l'air de vos ateliers et documente votre conformité VLEP et CMR."
      duration="1 à 5 jours sur site"
      context={[
        "Le Code du travail impose à tout employeur d'évaluer l'exposition de ses salariés aux agents chimiques dangereux. Pour les substances CMR, un contrôle est obligatoire au moins une fois par an, et le dépassement d'une VLEP contraignante entraîne l'arrêt immédiat des postes concernés.",
        "Les capteurs FID et PID vous indiquent qu'il y a « quelque chose » dans l'air, sans dire quelle molécule. Impossible, dans ces conditions, de distinguer un solvant inoffensif d'un benzène à 0,2 ppm.",
        "Notre analyseur XFLR-9 lit l'empreinte infrarouge de chaque molécule et identifie jusqu'à 10 gaz simultanément, parmi plus de 500 espèces, jusqu'au niveau du ppb.",
      ]}
      steps={[
        {
          title: "Cadrage",
          text: "Analyse de vos procédés, de vos fiches de données de sécurité et des molécules à surveiller en priorité.",
        },
        {
          title: "Déploiement",
          text: "Installation de l'analyseur en moins d'une heure, sans interruption de production ni consommable.",
        },
        {
          title: "Mesure",
          text: "Balayage des postes de travail et des zones sensibles, identification et quantification en temps réel.",
        },
        {
          title: "Restitution",
          text: "Rapport de conformité, cartographie des expositions et recommandations d'actions correctives.",
        },
      ]}
      deliverables={[
        "Liste exhaustive des espèces gazeuses identifiées sur votre site, avec concentrations mesurées.",
        "Comparaison poste par poste avec les VLEP 8 h et court terme applicables.",
        "Identification spécifique des substances CMR et des zones à risque.",
        "Cartographie des expositions et préconisations de ventilation ou de captage.",
        "Rapport de campagne exploitable par votre HSE, votre CSE et votre médecine du travail.",
      ]}
      faq={[
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
      ]}
    />
  ),
});