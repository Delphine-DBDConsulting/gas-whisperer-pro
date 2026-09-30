# Retours client — plan de mise en œuvre

## Lot A — Structure commune à toutes les pages
1. **Bandeau d'arrivée par page** : emplacement réservé sous le titre de chaque page, avec 1 à 3 chiffres clés + un texte de preuve de 20-30 mots. Les chiffres changent selon la page (factices et signalés comme tels quand on n'a pas la vraie valeur).
2. **Visuel dès l'arrivée** : chaque en-tête de page reçoit un emplacement image (visuel d'ambiance provisoire, remplaçable ensuite).
3. **Fil d'Ariane** sous l'en-tête de toutes les pages intérieures, aussi lisible par Google.
4. **Menu flottant permanent** : barre arrondie détachée du haut, toujours visible au scroll, bouton « Prendre rendez-vous » plein. Sur mobile, uniquement logo + bouton menu (hamburger), toujours accessible.
5. **Pied de page** : icônes email (sales@clm-industry.fr) et LinkedIn.
6. **Plus de contraste entre sections** : alternance plus marquée des deux fonds navy.
7. **Boutons d'action** : le bleu reste la couleur des boutons ; au survol, passage en **rose fuchsia** (proposé par la cliente, testé à l'écran, réversible en une ligne). Le cyan reste pour les liens et détails.

## Lot B — Preuve et contenu
8. **Témoignages anonymisés** : carrousel automatique (prénom + initiale, poste, encart [secteur] + [citation]), placé sur l'accueil juste après la section des offres ; tout le texte présent dans la page pour le SEO/GEO. Témoignages provisoires à faire valider.
9. **Avis / preuve sociale** : emplacement dans l'en-tête de l'accueil avec chiffres factices (à redemander au client).
10. **Cartes d'offres** : cartes visuelles réservées pour les 2 solutions + gaz mesurables, avec emplacement image vide stylé (illustration plus tard).
11. **Liens blog / cas clients → solution** : chaque article et chaque cas client affiche un encart « Solution concernée » menant à la bonne page.
12. **Architecture du futur hub /gaz-mesurables** : données par molécule rangées pour qu'on puisse créer ensuite une section ancrée ou une page par molécule sans refonte (rien de visible ajouté maintenant).

## Lot C — Effets inspirés de ZeusLock
13. **Parallax léger** sur les visuels à côté du texte (effet CSS/scroll économe, désactivé si l'utilisateur a demandé moins d'animations).
14. **Frise 3 étapes** (cercles + pointillés) pour le déroulé des campagnes : Préparation → Mesures sur site → Rapport.
15. **Carrousel horizontal de cartes numérotées** et **carrousel vertical avec menu latéral** : uniquement sur contenus secondaires (familles de gaz, secteurs), tout le contenu présent dans la page.
16. **Chiffres avec barre de progression** : proposition = jauges « limite de détection XFLR-9 vs VLEP » (ex. benzène 0,2 ppm vs VLEP 1 ppm), barre qui se remplit à l'arrivée à l'écran.
17. **Blog** : vignette image sur chaque carte + filtres (déjà présents).
18. **Page de prise de rendez-vous en deux colonnes** : bénéfices à gauche, formulaire/agenda à droite, 3 pastilles de réassurance dessous.
19. **Listes numérotées à puces rondes** : composant prêt ; réécriture des textes en mots percutants à faire ensemble (pas de modification de texte sans vous).

## Hors périmètre (noté pour plus tard)
- Pages par molécule (non signé), certifications ISO (quand obtenues), recherche de molécule dans le menu (à rappeler à la fin du site), carte contact humaine (refusée), cartes inclinées (refusées).

## Détails techniques
- Nouveaux composants partagés : KeyFigures, PageHero (image + preuve), Breadcrumbs (+ JSON-LD BreadcrumbList), Testimonials, NumberedSteps, ProgressStat, RelatedSolution, Parallax (IntersectionObserver + transform, prefers-reduced-motion).
- Données gaz déplacées dans un module dédié avec slug par molécule.
- Couleur de survol ajoutée comme token dans styles.css.
- Mise en œuvre par lots A → B → C, vérification visuelle à chaque lot.
