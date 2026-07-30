## Objectif

Passer de la maquette (une seule page d'accueil avec ancres) à un site complet et fonctionnel : pages dédiées, formulaire de prise de rendez-vous relié à une base de données avec notification email, page de téléchargement de la brochure anglaise, et pages légales.

## Arborescence cible

```text
/                              Accueil (existant, allégé : teasers + liens vers les pages)
/offres/sante-environnement    Offre 1 — détail complet
/offres/emissions-performance  Offre 2 — détail complet
/technologie                   XFi-9, laser OPO, comparatif FID/PID, chiffres clés
/references                    Clients, cas clients / ROI
/contact                       Formulaire de prise de rendez-vous
/en/brochure                   English brochure download page (cible du drapeau 🇬🇧)
/mentions-legales
/politique-de-confidentialite
```

Chaque page a ses propres `title`, `description`, `og:title`, `og:description`.

## Étape 1 — Structure et navigation partagée

- Extraction de l'en-tête et du pied de page dans des composants réutilisés par toutes les pages (aujourd'hui ils sont codés en dur dans la page d'accueil).
- Menu de navigation en liens de route réels (plus d'ancres `#`), avec état actif, menu mobile (burger) et bouton « Prendre rendez-vous » vers `/contact`.
- Page 404 en français, aux couleurs Stratos.
- L'accueil garde le hero, la section réglementaire et des blocs de synthèse renvoyant vers les pages dédiées.

## Étape 2 — Pages de contenu

- **Offres** : deux pages construites sur un gabarit commun (contexte, déroulé de la mission, livrables, durée, FAQ courte, CTA contact).
- **Technologie** : principe OPO Laser, tableau comparatif FID/PID (déplacé depuis l'accueil), chiffres clés (500+, <1h, ppb).
- **Références** : logos clients + 2 à 3 cas clients avec le ROI chiffré.
- Effets de survol cyan, largeur max 1200 px, paddings 80/48 px conservés partout.

## Étape 3 — Formulaire de contact (Lovable Cloud)

- Activation de Lovable Cloud (base de données intégrée).
- Table `contact_requests` : nom, société, fonction, email, téléphone, site industriel, offre concernée, message, date. Sécurisée : insertion publique autorisée, lecture réservée aux administrateurs.
- Formulaire `/contact` : validation Zod côté client **et** côté serveur, limites de longueur, anti-spam (honeypot + limitation par IP), message de confirmation.
- **Email de notification** vers l'adresse CLM à chaque nouvelle demande, plus un accusé de réception automatique au prospect. Nécessite la configuration d'un domaine d'envoi appartenant à CLM (ex. `notify.clm-industry.fr`) — je vous guiderai à ce moment-là.

## Étape 4 — Page brochure anglaise

- `/en/brochure` : page en anglais présentant brièvement CLM Industry et proposant le téléchargement du PDF.
- Téléchargement conditionné à un mini-formulaire (nom, email, société) enregistré dans la même base, afin de tracer les leads — ou en accès direct si vous préférez.
- Le drapeau 🇬🇧 de la navigation pointe vers cette page.

## Étape 5 — Pages légales

- Mentions légales (éditeur C.L.M.I. S.A.R.L., SIRET, directeur de publication, hébergeur) et politique de confidentialité (données collectées par le formulaire, durée de conservation, droits RGPD, contact DPO).
- Bandeau cookies uniquement si un outil de mesure d'audience est ajouté.

## Étape 6 — SEO et finitions

- `robots.txt` et `sitemap.xml` couvrant toutes les pages, données structurées JSON-LD `Organization` + `Service`.
- Vérification responsive mobile / tablette / desktop et défilement fluide.

## Contenus réels à me fournir

Je pose des contenus provisoires clairement marqués tant que je n'ai pas :

1. Logos clients réels autorisés (fichiers) — les noms actuels (Air Liquide, TotalEnergies…) sont fictifs et juridiquement risqués ; je les retire d'ici là.
2. Téléphone, SIRET, adresse exacte, nom du directeur de publication, hébergeur.
3. 2 à 3 cas clients avec chiffres de ROI (même anonymisés : « site pétrochimique, 800 salariés »).
4. Le PDF de la brochure anglaise.
5. L'adresse email destinataire des demandes et le domaine d'envoi.

## Détails techniques

TanStack Start avec routage par fichiers (`src/routes/`), un fichier par page ; composants partagés dans `src/components/`. Formulaire traité par une server function avec validation Zod ; stockage Supabase géré par Lovable Cloud avec RLS (insertion anonyme, lecture admin uniquement) ; emails via l'infrastructure email intégrée (file d'attente + logs). Design system existant (`src/styles.css`) inchangé.
