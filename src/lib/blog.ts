export type BlogCategory =
  | "Réglementation"
  | "Technologie"
  | "Systèmes d'abattage"
  | "Cas clients & ROI"
  | "Actualités CLM Industry";

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
  body: BlogBlock[];
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Réglementation",
  "Technologie",
  "Systèmes d'abattage",
  "Cas clients & ROI",
  "Actualités CLM Industry",
];

export const posts: BlogPost[] = [
  {
    slug: "benzene-vlep-0-2-ppm",
    category: "Réglementation",
    title: "Benzène : la nouvelle VLEP à 0,2 ppm change-t-elle votre obligation de mesure ?",
    date: "À venir",
    readingTime: "5 min de lecture",
    excerpt:
      "Depuis avril 2024, la valeur limite d'exposition au benzène a été abaissée à 0,2 ppm. Ce que ça change concrètement pour les responsables de sites industriels.",
    tags: ["Benzène", "VLEP", "CMR", "HSE"],
    body: [
      {
        type: "p",
        text: "Le benzène est classé cancérogène de catégorie 1A. L'abaissement de sa valeur limite d'exposition professionnelle à 0,2 ppm impose aux exploitants de démontrer, mesure à l'appui, que l'exposition réelle de leurs opérateurs reste sous ce seuil.",
      },
      { type: "h2", text: "Ce que dit le cadre réglementaire" },
      {
        type: "p",
        text: "L'employeur doit évaluer les risques chimiques, les tracer dans son document unique, et vérifier périodiquement le respect des valeurs limites par des mesures représentatives des situations de travail.",
      },
      {
        type: "ul",
        items: [
          "Évaluation initiale du risque chimique, puis réévaluation à chaque changement de procédé.",
          "Contrôle technique du respect de la valeur limite par un organisme accrédité.",
          "Traçabilité des expositions et information des salariés concernés.",
        ],
      },
      { type: "h2", text: "Pourquoi 0,2 ppm change la donne technique" },
      {
        type: "p",
        text: "À ce niveau, une mesure de COV totaux ne suffit plus : il faut identifier le benzène parmi les autres solvants présents. Les capteurs FID et PID additionnent les molécules sans les distinguer, ce qui conduit soit à des fausses alertes, soit à des dépassements non détectés.",
      },
      { type: "h2", text: "L'approche CLM Industry" },
      {
        type: "p",
        text: "Le XFLR-9 mesure chaque molécule individuellement grâce à la spectroscopie laser OPO, jusqu'à des seuils de détection de l'ordre de 0,01 ppm. Une campagne sur site permet de cartographier l'exposition poste par poste et de prioriser les actions correctives.",
      },
    ],
  },
  {
    slug: "opo-laser-vs-fid-pid",
    category: "Technologie",
    title: "OPO Laser vs FID/PID : pourquoi la résolution spectrale change tout",
    date: "À venir",
    readingTime: "6 min de lecture",
    excerpt:
      "Les capteurs FID et PID mesurent le carbone organique total. Le XFLR-9 identifie chaque molécule individuellement. Une différence qui a des conséquences directes sur votre conformité VLEP.",
    tags: ["OPO Laser", "XFLR-9", "FID", "PID", "Spectroscopie"],
    body: [
      {
        type: "p",
        text: "FID et PID sont des technologies éprouvées, mais non sélectives : elles restituent une valeur globale, sans dire quelle molécule est présente ni en quelle proportion.",
      },
      { type: "h2", text: "Une mesure globale ne pilote rien" },
      {
        type: "ul",
        items: [
          "Un mélange de solvants non dangereux peut masquer une trace de molécule CMR.",
          "Les facteurs de réponse varient fortement d'une molécule à l'autre.",
          "L'humidité et la température dégradent la stabilité des mesures en environnement industriel.",
        ],
      },
      { type: "h2", text: "Ce qu'apporte la spectroscopie laser OPO" },
      {
        type: "p",
        text: "La source OPO balaie l'infrarouge sur une large plage accordable. Chaque molécule possède une signature d'absorption propre : le XFLR-9 lit cette signature et attribue une concentration à chaque espèce, en continu.",
      },
      { type: "h3", text: "Conséquences pratiques" },
      {
        type: "ul",
        items: [
          "Conformité vérifiable molécule par molécule face aux Valeurs Limites d'Exposition Professionnelle.",
          "Diagnostic de la source réelle d'une émission plutôt qu'une alerte globale.",
          "Suivi du rendement d'un système d'abattage espèce par espèce.",
        ],
      },
    ],
  },
  {
    slug: "cas-client-charbon-actif-economie",
    category: "Cas clients & ROI",
    title: "130 000 € économisés par an grâce à une campagne de mesure amont/aval",
    date: "À venir",
    readingTime: "4 min de lecture",
    excerpt:
      "Un industriel pharmaceutique remplaçait ses filtres à charbon actif toutes les trois semaines par précaution. Une campagne CLM Industry a tout changé.",
    tags: ["Charbon actif", "ROI", "Pharmacie", "Abattage"],
    body: [
      {
        type: "p",
        text: "Faute de donnée de saturation réelle, l'exploitant appliquait une règle de prudence : remplacement des charbons actifs toutes les trois semaines, à 30 000 € l'opération.",
      },
      { type: "h2", text: "La campagne de mesure" },
      {
        type: "p",
        text: "Un XFLR-9 a été installé en amont et en aval du système d'abattage pendant un mois, avec un suivi continu des espèces CMR et non CMR du mélange traité.",
      },
      { type: "h2", text: "Le résultat" },
      {
        type: "ul",
        items: [
          "Rendement d'abattage encore conforme au-delà de trois semaines d'exploitation.",
          "Passage à un remplacement mensuel sans dégradation des rejets.",
          "Coût annuel ramené de 520 000 € à 390 000 €, soit 130 000 € d'économie par an.",
        ],
      },
      {
        type: "p",
        text: "La mesure a aussi fourni une preuve documentée du rendement réel, réutilisable lors des contrôles réglementaires.",
      },
    ],
  },
  {
    slug: "choisir-systeme-abattage-cov",
    category: "Systèmes d'abattage",
    title: "Charbon actif, RTO, biofiltre : comment choisir son système d'abattage de COV ?",
    date: "À venir",
    readingTime: "7 min de lecture",
    excerpt:
      "Tour d'horizon des principales technologies d'abattage des COV et de leurs conditions d'utilisation optimales.",
    tags: ["COV", "RTO", "Biofiltre", "Charbon actif"],
    body: [
      {
        type: "p",
        text: "Le choix d'un système d'abattage dépend du débit, de la concentration, de la nature des molécules et de la variabilité du procédé. Aucune technologie n'est universelle.",
      },
      { type: "h2", text: "Charbon actif" },
      {
        type: "p",
        text: "Adapté aux faibles concentrations et débits modérés. Simple à exploiter, mais le coût de remplacement des médias domine le budget si la saturation n'est pas suivie par la mesure.",
      },
      { type: "h2", text: "Oxydation thermique régénérative (RTO)" },
      {
        type: "p",
        text: "Efficace sur des flux chargés et continus. La consommation de gaz naturel devient le poste principal : elle peut souvent être réduite en ajustant les consignes au besoin réel mesuré.",
      },
      { type: "h2", text: "Biofiltration" },
      {
        type: "p",
        text: "Pertinente pour des composés biodégradables à basse concentration, avec une sensibilité forte à l'humidité, à la température et aux à-coups de charge.",
      },
      { type: "h2", text: "Le point commun : mesurer avant de dimensionner" },
      {
        type: "p",
        text: "Une campagne amont/aval molécule par molécule permet de dimensionner sans marge excessive et de vérifier le rendement réel dans les conditions d'exploitation.",
      },
    ],
  },
  {
    slug: "duer-risque-chimique-obligations",
    category: "Réglementation",
    title: "DUER et risque chimique : ce que la loi impose à votre entreprise",
    date: "À venir",
    readingTime: "5 min de lecture",
    excerpt:
      "Le Document Unique d'Évaluation des Risques doit intégrer les risques chimiques. Ce que ça implique concrètement pour les sites industriels soumis aux VLEP.",
    tags: ["DUER", "Risque chimique", "HSE", "Conformité"],
    body: [
      {
        type: "p",
        text: "Le document unique d'évaluation des risques professionnels doit recenser l'ensemble des risques, dont le risque chimique, et être mis à jour à chaque évolution significative des conditions de travail.",
      },
      { type: "h2", text: "Ce qui est attendu sur le volet chimique" },
      {
        type: "ul",
        items: [
          "Inventaire des agents chimiques présents et de leurs dangers.",
          "Évaluation de l'exposition réelle des salariés, par poste et par situation de travail.",
          "Mesures de prévention hiérarchisées : substitution, captage à la source, protection collective puis individuelle.",
          "Traçabilité des expositions aux agents CMR.",
        ],
      },
      { type: "h2", text: "Le rôle de la mesure" },
      {
        type: "p",
        text: "Sans données d'exposition, l'évaluation reste déclarative. Une campagne de mesure sélective apporte des valeurs opposables, par poste, et rend le plan d'action défendable devant le CSE et l'inspection.",
      },
    ],
  },
  {
    slug: "clm-industry-french-fab",
    category: "Actualités CLM Industry",
    title: "CLM Industry rejoint La French Fab",
    date: "2025",
    readingTime: "2 min de lecture",
    excerpt:
      "CLM Industry est désormais membre La French Fab, le label du Ministère de l'Économie qui distingue les industriels français engagés dans l'excellence manufacturière.",
    tags: ["La French Fab", "CLM Industry", "Industrie française"],
    body: [
      {
        type: "p",
        text: "CLM Industry rejoint La French Fab, la bannière qui rassemble les entreprises industrielles françaises engagées dans la modernisation et l'innovation.",
      },
      { type: "h2", text: "Une reconnaissance de treize années de R&D" },
      {
        type: "p",
        text: "Le XFLR-9, analyseur de gaz à spectroscopie laser OPO, est conçu et assemblé en France. Il équipe aujourd'hui la flotte mobile déployée sur les sites industriels pour des campagnes de mesure de quelques jours à plusieurs mois.",
      },
      {
        type: "p",
        text: "Cette adhésion confirme l'engagement de CLM Industry en faveur d'une instrumentation souveraine au service de la santé au travail et de la performance environnementale.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
