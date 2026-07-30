## Objectif

Passer de la maquette (une seule page d'accueil avec ancres) à un site complet et fonctionnel : pages dédiées, intégration CRM **Brevo** pour les formulaires de contact et de prise de rendez-vous en ligne, page de téléchargement de la brochure anglaise, et pages légales.

## Arborescence cible

```text
/                              Accueil (existant, allégé : teasers + liens vers les pages)
/offres/sante-environnement    Offre 1 — détail complet
/offres/emissions-performance  Offre 2 — détail complet
/technologie                   XFi-9, laser OPO, comparatif FID/PID, chiffres clés
/references                    Clients, cas clients / ROI
/contact                       Formulaire de contact + CTA vers rendez-vous
/rendez-vous                   Prise de rendez-vous en ligne (widget Brevo Meetings)
/en/brochure                   English brochure download page (cible du drapeau 🇬🇧)
/mentions-legales
/politique-de-confidentialite
```

Chaque page a ses propres `title`, `description`, `og:title`, `og:description`.

## Étape 1 — Structure et navigation partagée

- Extraction de l'en-tête et du pied de page dans des composants réutilisés par toutes les pages (aujourd'hui ils sont codés en dur dans la page d'accueil).
- Menu de navigation en liens de route réels (plus d'ancres `#`), avec état actif, menu mobile (burger) et bouton « Prendre rendez-vous » vers `/rendez-vous`.
- Page 404 en français, aux couleurs Stratos.
- L'accueil garde le hero, la section réglementaire et des blocs de synthèse renvoyant vers les pages dédiées.

## Étape 2 — Pages de contenu

- **Offres** : deux pages construites sur un gabarit commun (contexte, déroulé de la mission, livrables, durée, FAQ courte, CTA contact).
- **Technologie** : principe OPO Laser, tableau comparatif FID/PID (déplacé depuis l'accueil), chiffres clés (500+, <1h, ppb).
- **Références** : logos clients + 2 à 3 cas clients avec le ROI chiffré.
- Effets de survol cyan, largeur max 1200 px, paddings 80/48 px conservés partout.

## Étape 3 — Intégration CRM Brevo (contact et rendez-vous)

- **Connexion Brevo** : lier le connecteur Brevo au projet. Dans Brevo, autoriser l'adresse IP sortante du **Lovable Connector Gateway** : `34.49.40.81`. Pour les tests depuis l'éditeur Lovable, autoriser aussi `34.22.168.241`.
- **Formulaire `/contact`** : à chaque soumission, créer ou mettre à jour un contact Brevo avec les attributs suivants (mapping 1-for-1 avec les champs du formulaire) :
  - `EMAIL`, `NOM` / `PRENOM`, `SOCIETE`, `FONCTION`, `TELEPHONE`, `SITE_INDUSTRIEL`, `OFFRE`, `MESSAGE`.
- **Page `/rendez-vous`** : intégrer le widget de prise de rendez-vous en ligne **Brevo Meetings**. Les champs demandés au prospect (nom, email, société, téléphone) doivent correspondre aux champs du formulaire de contact. Si possible, le widget est pré-rempli avec les informations déjà saisies.
- **Brochure anglaise `/en/brochure`** : créer un contact Brevo avec `EMAIL`, `NOM`, `SOCIETE`, `LANGUE = en`, `SOURCE = brochure_en`.
- **Backup local** : conserver une copie de chaque soumission dans les tables `contact_requests` et `brochure_leads` de Lovable Cloud pour traçabilité et audit.
- **Notifications** : envoyer un email interne à CLM à chaque nouveau contact/réception via Brevo (ou via Lovable Emails si le domaine d'envoi Brevo n'est pas encore configuré), plus un accusé de réception automatique au prospect.

## Étape 4 — Page brochure anglaise

- `/en/brochure` : page en anglais présentant brièvement CLM Industry et proposant le téléchargement du PDF.
- Téléchargement conditionné à un mini-formulaire (nom, email, société) enregistré dans Brevo, afin de tracer les leads — ou en accès direct si vous préférez.
- Le drapeau 🇬🇧 de la navigation pointe vers cette page.

## Étape 5 — Pages légales

- Mentions légales (éditeur C.L.M.I. S.A.R.L., SIRET, directeur de publication, hébergeur) et politique de confidentialité (données collectées par les formulaires, durée de conservation, droits RGPD, traitement par Brevo, contact DPO).
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
6. **Le lien de rendez-vous Brevo Meetings** (URL du widget ou identifiant de la réunion) pour la page `/rendez-vous`.

## Détails techniques

- TanStack Start avec routage par fichiers (`src/routes/`), un fichier par page ; composants partagés dans `src/components/`.
- Formulaires traités par des server functions avec validation Zod.
- **Brevo** : connecteur `brevo` lié au projet via le Lovable Connector Gateway (`https://connector-gateway.lovable.dev/brevo`). Les appels utilisent `Authorization: Bearer ${LOVABLE_API_KEY}` et `X-Connection-Api-Key: ${BREVO_API_KEY}`.
- Contacts Brevo créés via `POST /contacts` (ou `PUT /contacts/{email}` pour la mise à jour) avec les attributs listés ci-dessus.
- Backup local dans Lovable Cloud (Supabase) : tables `contact_requests` et `brochure_leads` avec insertion publique et lecture réservée aux administrateurs.
- Emails transactionnels via Brevo SMTP/API ou Lovable Emails en fallback si le domaine d'envoi CLM n'est pas encore configuré.
- Design system existant (`src/styles.css`) inchangé.
