import { createFileRoute } from "@tanstack/react-router";

import { OfferPage } from "@/components/site/offer-page";

const DESCRIPTION =
  "Monitoring continu des émissions de gaz industriels sur 1 à 2 mois : mesures amont/aval des systèmes d'abattage, reporting régulier et optimisation des installations.";

export const Route = createFileRoute("/offres/emissions-performance")({
  head: () => ({
    meta: [
      { title: "Offre Émissions & Performance — Monitoring continu | CLM Industry" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Offre Émissions & Performance — Monitoring continu" },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: () => (
    <OfferPage
      eyebrow="Offre 2"
      title="Émissions & Performance : piloter vos émissions dans la durée"
      intro="Un monitoring continu de vos rejets sur 1 à 2 mois, pour mesurer l'efficacité réelle de vos systèmes d'abattage et optimiser vos cycles de production."
      duration="1 à 2 mois de monitoring"
      context={[
        "Un système d'abattage n'a de valeur que par son rendement réel, en conditions d'exploitation. Une mesure ponctuelle ne dit rien des pics liés aux changements de série, aux démarrages ou aux dérives d'un média filtrant.",
        "En mesurant simultanément en amont et en aval de vos équipements, nous quantifions l'efficacité d'abattage molécule par molécule, et non en carbone organique total.",
        "Les données produites alimentent directement vos déclarations environnementales, votre dossier ICPE et vos arbitrages d'investissement.",
      ]}
      steps={[
        {
          title: "Cadrage",
          text: "Définition des points de mesure, des molécules cibles et des indicateurs de performance attendus.",
        },
        {
          title: "Installation",
          text: "Mise en place de l'analyseur sur les points amont/aval, sans consommable ni gaz vecteur.",
        },
        {
          title: "Monitoring",
          text: "Acquisition continue sur 1 à 2 mois, corrélée à vos cycles de production et à vos événements process.",
        },
        {
          title: "Optimisation",
          text: "Analyse des dérives, calcul des rendements d'abattage et plan d'optimisation chiffré.",
        },
      ]}
      deliverables={[
        "Courbes d'émission continues, par molécule, sur toute la durée de la campagne.",
        "Rendement d'abattage réel de chaque équipement, amont/aval.",
        "Identification des pics d'émission et corrélation avec les événements de production.",
        "Reporting intermédiaire régulier pendant la campagne.",
        "Plan d'optimisation : réglages process, dimensionnement et maintenance des systèmes de traitement.",
      ]}
      faq={[
        {
          q: "Les données sont-elles exploitables pour l'ICPE ?",
          a: "Oui. Les mesures sont horodatées, tracées et fournies par molécule, ce qui les rend directement exploitables pour vos déclarations et vos échanges avec la DREAL.",
        },
        {
          q: "Quel retour sur investissement attendre ?",
          a: "Le ROI provient principalement de l'optimisation du dimensionnement et de la maintenance des systèmes d'abattage, et de la réduction des consommations associées.",
        },
        {
          q: "Peut-on enchaîner avec l'offre Santé & Environnement ?",
          a: "Oui, les deux offres sont complémentaires : l'une documente l'exposition des personnes, l'autre la performance des installations.",
        },
      ]}
    />
  ),
});