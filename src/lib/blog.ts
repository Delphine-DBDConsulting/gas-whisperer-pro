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
  | { type: "ul"; items: string[] }
  | { type: "callout"; title: string; text: string; tone?: "accent" | "warning" }
  | { type: "table"; headers: string[]; rows: string[][] };

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
  body: BlogBlock[];
  /** Slugs affichés dans « À lire aussi » (par défaut : les 3 premiers autres articles). */
  related?: string[];
  /** CTA de la sidebar. */
  sidebarCta?: { title: string; text: string };
  /** Bloc CTA de bas d'article. */
  footerCta?: { text: string; linkLabel: string; linkTo: string };
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
    slug: "systemes-abattage-cov-guide-complet",
    category: "Systèmes d'abattage",
    title: "Systèmes d'abattage des COV : quel traitement choisir pour votre site industriel ?",
    date: "Juin 2026",
    readingTime: "7 min de lecture",
    excerpt:
      "Charbon actif, RTO, oxydation catalytique, biofiltre, condensation : guide complet pour choisir le système d'abattage des COV adapté à votre process industriel, vos contraintes et vos obligations VLEP.",
    tags: [
      "Systèmes d'abattage",
      "COV",
      "RTO",
      "Charbon actif",
      "VLEP",
      "Conformité",
      "Mesure industrielle",
    ],
    related: [
      "duer-risque-chimique-obligations",
      "clm-industry-french-fab",
      "opo-laser-vs-fid-pid",
    ],
    sidebarCta: {
      title: "Évaluer votre système d'abattage",
      text: "Nos experts analysent votre installation et vous proposent une campagne de monitoring adaptée.",
    },
    footerCta: {
      text: "Découvrez comment CLM Industry peut vous aider à mesurer l'efficacité réelle de votre système d'abattage.",
      linkLabel: "Découvrir Émissions & Performance",
      linkTo: "/emissions-performance",
    },
    body: [
      {
        type: "p",
        text: "Les Composés Organiques Volatils (COV) émis par les process industriels sont soumis à des réglementations de plus en plus strictes. Choisir le bon système d'abattage ne se réduit pas à une question de budget — c'est une décision technique qui engage la conformité réglementaire, les coûts d'exploitation et la sécurité de vos équipes sur le long terme. Ce guide passe en revue les principales technologies disponibles, leurs conditions d'utilisation optimales et les critères qui orientent le choix.",
      },
      { type: "h2", text: "Les deux grandes familles de traitement" },
      {
        type: "p",
        text: "Avant d'entrer dans le détail des technologies, il faut comprendre la distinction fondamentale entre deux approches :",
      },
      {
        type: "p",
        text: "La récupération (transfert de phase) — le COV est capturé et transféré vers une phase solide ou liquide sans être détruit. Les technologies concernées sont l'absorption, l'adsorption sur charbon actif, la condensation et la séparation membranaire. Ces procédés permettent de récupérer les solvants à des fins de valorisation, mais génèrent des déchets secondaires à gérer.",
      },
      {
        type: "p",
        text: "La destruction (oxydation) — les COV sont convertis en CO₂, eau et chaleur par réaction chimique. Les technologies concernées sont l'oxydation thermique (RTO), l'oxydation catalytique et la biodégradation. Ces procédés éliminent définitivement les polluants mais consomment de l'énergie et peuvent générer des sous-produits secondaires.",
      },
      {
        type: "p",
        text: "Le choix entre les deux dépend de cinq paramètres opérationnels : le débit d'air à traiter, la concentration en COV, la nature chimique des polluants, la compatibilité du système avec le process, et le taux d'abattage visé.",
      },
      { type: "h2", text: "Cinq paramètres pour orienter votre choix" },
      {
        type: "p",
        text: "Chaque technologie d'abattage opère dans une plage d'optimisation définie par deux axes : le débit volumique (m³/h) et la concentration en COV (g/m³). Comprendre où se situe votre process sur cette matrice est la première étape de tout choix éclairé.",
      },
      {
        type: "ul",
        items: [
          "Biofiltre et photocatalyse — faibles débits, faibles concentrations.",
          "Adsorption et absorption — concentrations variables, débits modérés à élevés.",
          "Oxydation thermique (RTO) — hauts débits continus, concentrations élevées.",
          "Condensation — fortes concentrations, applications spécifiques de récupération.",
        ],
      },
      { type: "h2", text: "Les technologies de récupération" },
      { type: "h3", text: "Absorption — laver le gaz avec un solvant" },
      {
        type: "p",
        text: "L'absorption consiste à faire traverser le flux gazeux par un solvant liquide qui capte les COV par transfert de masse. Adaptée aux polluants solubles (acides, bases, composés polaires), elle permet parfois de récupérer le solvant par distillation en aval. Sa principale contrainte : elle génère des effluents liquides à traiter.",
      },
      { type: "h3", text: "Adsorption sur charbon actif — piéger les molécules" },
      {
        type: "p",
        text: "Le charbon actif est le média adsorbant le plus répandu dans l'industrie. Son réseau de micropores offre une surface d'échange considérable qui retient les molécules de COV par liaisons électrostatiques (forces de Van der Waals).",
      },
      {
        type: "p",
        text: "Ses avantages : faible investissement initial, bonne efficacité sur une large gamme de COV, possibilité de régénération. Ses contraintes : coûts d'exploitation élevés liés aux cycles de remplacement ou de régénération, saturation progressive du média.",
      },
      {
        type: "callout",
        title: "Point critique",
        text: "Sans mesure réelle de la saturation du lit de charbon, les industriels ont tendance à remplacer les filtres par précaution, bien avant qu'ils ne soient saturés. C'est précisément ce que permet d'éviter une campagne de mesure amont/aval CLM Industry.",
      },
      { type: "h3", text: "Condensation — refroidir pour récupérer" },
      {
        type: "p",
        text: "La condensation exploite la réduction de température pour faire passer les COV de la phase gazeuse à la phase liquide, permettant leur récupération et valorisation. Elle est particulièrement efficace sur les flux à forte concentration et s'utilise souvent en pré-traitement avant adsorption (système condenseur/adsorbeur synergique).",
      },
      { type: "h3", text: "Séparation membranaire — filtrer sous pression" },
      {
        type: "p",
        text: "Les membranes polymères denses, sous pression, laissent passer sélectivement certaines molécules selon leur taille (pores < 2 nm). Encore peu répandue en traitement industriel des COV, cette technologie reste réservée à des applications très spécifiques.",
      },
      { type: "h2", text: "Les technologies de destruction" },
      { type: "h3", text: "Oxydation thermique — brûler les COV" },
      {
        type: "p",
        text: "L'oxydation thermique traite les COV comme un combustible : à haute température (700-1000°C), les molécules organiques réagissent avec l'oxygène pour donner du CO₂ et de la vapeur d'eau. L'efficacité de destruction dépend de trois facteurs simultanés — la Température, la Turbulence et le Temps de séjour — connus sous le nom de règle des « 3T ». Si l'un de ces trois facteurs fait défaut, la destruction est incomplète et des sous-produits potentiellement plus dangereux peuvent se former.",
      },
      { type: "p", text: "Il existe trois variantes principales :" },
      {
        type: "ul",
        items: [
          "DFTO (Direct Fired Thermal Oxidizer) — combustion directe sans récupération thermique, rapide à déployer mais gourmand en énergie.",
          "Récupératif — récupère la chaleur des fumées pour préchauffer les gaz entrants, meilleure efficacité énergétique.",
          "RTO (Regenerative Thermal Oxidizer) — atteint jusqu'à 97 % d'efficacité thermique grâce à des médias céramiques qui stockent et restituent la chaleur. Standard pour les flux continus à fort débit.",
        ],
      },
      { type: "h3", text: "Oxydation catalytique — abaisser la température" },
      {
        type: "p",
        text: "En introduisant un catalyseur (généralement à base de métaux précieux platine/palladium), la température de réaction descend à 200-450°C, réduisant drastiquement la consommation d'énergie. Le catalyseur abaisse l'énergie d'activation de la réaction, mais présente une sensibilité aux poisons catalytiques (métaux lourds, silicium, halogènes) qui peuvent dégrader ses performances de manière irréversible.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Attention particulière",
        text: "Pour les COV contenant des hétéro-atomes (halogènes, soufre, azote), l'oxydation thermique simple peut générer des sous-produits secondaires — acides, dioxines — plus dangereux que les polluants initiaux. Dans ces cas, un laveur de gaz (scrubber) doit être couplé en aval du système d'oxydation.",
      },
      { type: "h3", text: "Biodégradation — faire travailler les bactéries" },
      {
        type: "p",
        text: "Les biofiltres et bioréacteurs utilisent des micro-organismes fixés sur un support (tourbe, compost, mousse) pour dégrader les COV en CO₂, eau et biomasse. Très efficaces sur les BTEX (benzène, toluène, éthylbenzène, xylènes), ils offrent les coûts d'exploitation les plus faibles de toutes les technologies de destruction. Leur limite principale est la fragilité biologique : les variations de température, d'humidité ou de charge polluante peuvent perturber la population bactérienne et dégrader significativement les performances.",
      },
      { type: "h2", text: "Matrice de décision" },
      { type: "p", text: "Quelle technologie pour quel contexte ?" },
      {
        type: "table",
        headers: ["Technologie", "Mécanisme", "Investissement", "Exploitation", "Sous-produits"],
        rows: [
          ["Absorption", "Transfert", "Moyen", "Moyen", "Effluents liquides"],
          ["Adsorption (charbon actif)", "Transfert", "Faible", "Élevé", "Déchets solides"],
          ["Condensation", "Transfert", "Élevé", "Élevé", "Condensats à traiter"],
          ["Membrane", "Transfert", "Élevé", "Élevé", "Aucun"],
          [
            "Oxydation thermique (RTO)",
            "Destruction",
            "Élevé",
            "Élevé",
            "Sous-produits si hétéro-atomes",
          ],
          ["Oxydation catalytique", "Destruction", "Élevé", "Faible", "Minimal"],
          ["Biodégradation", "Destruction", "Moyen", "Faible", "Biomasse"],
        ],
      },
      { type: "h2", text: "Pourquoi la mesure est indispensable" },
      {
        type: "p",
        text: "Choisir et installer un système d'abattage ne suffit pas. La question qui se pose ensuite — et que trop peu d'industriels se posent — est : mon système fonctionne-t-il réellement comme prévu ?",
      },
      {
        type: "p",
        text: "Un système d'abattage peut sembler opérationnel tout en laissant passer des substances Cancérogènes, Mutagènes et Reprotoxiques (CMR) au-dessus des Valeurs Limites d'Exposition Professionnelle (VLEP). Sans mesure précise en amont et en aval, cette dérive reste invisible.",
      },
      {
        type: "p",
        text: "C'est précisément le rôle des campagnes de mesure CLM Industry : déployer simultanément deux analyseurs XFLR-9 de part et d'autre de votre système d'abattage pour quantifier, molécule par molécule, son efficacité réelle dans vos conditions d'exploitation.",
      },
      { type: "p", text: "Les données produites permettent de :" },
      {
        type: "ul",
        items: [
          "Ajuster la fréquence de maintenance selon la saturation réelle (et non par précaution).",
          "Moduler la puissance de combustion selon les cycles de production.",
          "Constituer un dossier de conformité opposable en cas de contrôle réglementaire.",
        ],
      },
      { type: "h2", text: "En résumé" },
      {
        type: "p",
        text: "Il n'existe pas de technologie d'abattage universelle. Le bon choix résulte toujours d'une analyse fine de votre process : nature des COV émis, débit, concentration, contraintes ATEX, tolérance aux sous-produits et objectifs réglementaires.",
      },
      {
        type: "p",
        text: "Ce qui est certain : quelle que soit la technologie retenue, sa performance réelle ne peut être garantie sans mesure indépendante. La conformité aux VLEP ne se décrète pas — elle se prouve.",
      },
    ],
  },

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
