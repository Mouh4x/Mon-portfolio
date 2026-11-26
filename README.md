# Portfolio — Mouhammad Hassani Hamadi

Portfolio personnel : expérience, projets, compétences, formations et certifications, avec thème clair/sombre, galeries d'images accessibles et formulaire de contact.

**Démo :** https://mouhammad-portfolio.netlify.app/

Le site est **100 % statique** : HTML, CSS et JavaScript natif, sans framework, sans dépendance et sans étape de compilation. Tout le contenu (textes, projets, compétences, certifications…) est piloté par **un seul fichier de données**, ce qui permet de réutiliser le projet comme modèle de portfolio en ne modifiant que ce fichier et quelques images.

---

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Stack technique](#stack-technique)
- [Structure du projet](#structure-du-projet)
- [Démarrage rapide](#démarrage-rapide)
- [Fonctionnement](#fonctionnement)
- [Personnaliser le portfolio](#personnaliser-le-portfolio)
- [Formulaire de contact](#formulaire-de-contact)
- [Déploiement](#déploiement)
- [Accessibilité, performance et SEO](#accessibilité-performance-et-seo)
- [Crédits et licences](#crédits-et-licences)

---

## Fonctionnalités

- **Sections** : accueil, expérience, projets, compétences (avec langues), formations (frise chronologique), certifications, centres d'intérêt, contact.
- **Thème clair / sombre** : thème sombre par défaut, bascule en un clic, choix mémorisé dans le navigateur.
- **Introduction animée** : saisie lettre par lettre du nom, puis apparition mot par mot du texte de présentation.
- **Visionneuse d'images** pour les certifications et les captures de projets : navigation clavier, balayage tactile, plusieurs images par élément.
- **Compétences en carrousels** horizontaux (flèches, glisser à la souris, défilement tactile) avec logos locaux.
- **Formulaire de contact** avec validation, anti-spam et repli automatique vers la messagerie.
- **Responsive** : mise en page adaptée de 320 px à 1440 px, menu burger sur mobile.
- **Respect de `prefers-reduced-motion`** : toutes les animations sont désactivées si l'utilisateur le demande.
- **Autonome** : polices, icônes, logos, photos et CV sont embarqués ; aucune requête vers un CDN.

## Stack technique

| Domaine | Technologie |
| --- | --- |
| Structure | HTML5 sémantique |
| Style | CSS3 : variables CSS, Grid, Flexbox, media queries (aucun préprocesseur) |
| Logique | JavaScript natif (ES5, sans module ni bundler) |
| Typographie | Bricolage Grotesque (titres) et Instrument Sans (texte), police WOFF2 intégrée dans le CSS |
| Icônes | SVG locaux (Devicon, Simple Icons, Lucide, flag-icons) |
| Images | WebP pour les photos et captures, PNG/SVG pour les logos |
| API navigateur | `<dialog>`, `IntersectionObserver`, `localStorage`, `fetch`, `matchMedia` |
| Service externe | [Web3Forms](https://web3forms.com) (envoi du formulaire uniquement) |
| Hébergement | Netlify (tout hébergeur de fichiers statiques convient) |

## Structure du projet

```
portfolio/
├── index.html          # Structure de la page, métadonnées SEO / Open Graph
├── css/
│   └── style.css       # Styles, thèmes clair/sombre, responsive, animations
├── js/
│   ├── data.js         # ★ Tout le contenu du site (seul fichier à éditer)
│   ├── main.js         # Rendu des sections, thème, menu, visionneuse, formulaire
│   └── icons.js        # Icônes d'interface et logos en SVG intégrés
└── assets/
    ├── img/            # Portrait, captures de projets, certificats, logos d'établissements
    ├── icons/          # Logos des technologies (SVG/PNG) + licence Devicon
    ├── flags/          # Drapeaux des langues (SVG)
    ├── fonts/          # Fichiers sources des polices (déjà intégrées dans le CSS)
    ├── ui/             # Icônes d'interface (SVG, copies de référence)
    ├── docs/           # CV au format PDF
    └── favicon*, apple-touch-icon.png
```

## Démarrage rapide

Aucune installation n'est nécessaire.

**Option 1 : ouverture directe.** Ouvrir `index.html` dans un navigateur.

**Option 2 : serveur local** (recommandé pour tester le site dans des conditions proches de la production, formulaire compris) :

```bash
cd portfolio
python3 -m http.server 8000
# puis http://localhost:8000
```

## Fonctionnement

Le projet repose sur une séparation nette entre **contenu**, **structure** et **rendu** :

```
 data.js ──────► main.js ──────► index.html (DOM)
 (contenu)       (génère le HTML      (squelette avec des
  window.PORTFOLIO  de chaque section)   conteneurs vides : #exp, #proj, #skills…)
                     ▲
                 icons.js (window.ICONS)
```

1. `index.html` charge dans l'ordre `icons.js`, `data.js` puis `main.js`.
2. `data.js` expose l'objet global `window.PORTFOLIO` ; `icons.js` expose `window.ICONS`.
3. `main.js` lit `PORTFOLIO` et injecte le HTML dans les conteneurs de la page (`#exp`, `#proj`, `#skills`, `#tl`, `#certs`, `#likes`…). Les textes sont échappés avant insertion.
4. Le même script gère les comportements : thème, menu mobile, lien actif selon le défilement, apparitions au scroll, visionneuse d'images et formulaire.

Un script inline dans le `<head>` applique le thème enregistré avant le premier affichage, ce qui évite tout clignotement au chargement.

## Personnaliser le portfolio

### 1. Le contenu : `js/data.js`

Chaque section du site correspond à une clé de l'objet `window.PORTFOLIO`.

| Clé | Contenu | Champs principaux |
| --- | --- | --- |
| `identite` | Accueil et navigation | `prenom`, `nomFamille`, `marque` (texte en haut à gauche), `lieu`, `debut`, `phrases[]`, `disponibilite`, `cv` |
| `langues[]` | Langues parlées | `nom`, `niveau`, `drapeau` (code du fichier dans `assets/flags/`) |
| `formations[]` | Frise chronologique, du plus récent au plus ancien | `etablissement`, `lieu`, `diplome`, `periode`, `duree`, `logo`, `details[]` |
| `experience` | Expérience mise en avant | `poste`, `entreprise`, `lieu`, `periode`, `duree`, `logo`, `points[]`, `tags[]`, `liens[]` |
| `projets[]` | Cartes de projets | `titre`, `type`, `date`, `image`, `alt`, `resume`, `imagesSupplementaires[]`, `tags[]`, `liens[]` |
| `certifications[]` | Certifications, du plus récent au plus ancien | `titre`, `organisme`, `date`, `validite`, `image`, `alt`, `texte`, `identifiant`, `lien`, `imagesSupplementaires[]` |
| `competences[]` | Catégories de compétences | `categorie`, `presentation`, `outils[]`, `notions[]` |
| `interets[]` | Centres d'intérêt | `nom`, `icone`, `utilisateur`, `url` |
| `contact` | Coordonnées et formulaire | `invitation`, `email`, `telephone`, `adresse`, `web3formsKey`, `liens[]` |

**Exemple : ajouter un projet**

```js
{
  titre: "Nom du projet",
  type: "Projet personnel",
  date: "Mars 2026",
  image: "assets/img/mon-projet.webp",   // ou null s'il n'y a pas de visuel
  alt: "Description de l'image",
  resume: "Ce que fait le projet et le résultat obtenu.",
  imagesSupplementaires: [               // optionnel : galerie dans la visionneuse
    { image: "assets/img/mon-projet-2.png", alt: "Description" }
  ],
  tags: ["Python", "Docker"],
  liens: [{ texte: "Code source", url: "https://github.com/..." }]
}
```

**Exemple : ajouter une compétence**

```js
{ nom: "Terraform", logo: "assets/icons/terraform.svg" }
```

Options d'affichage d'un outil : `neutre: true` (pictogramme descriptif plutôt que logo de marque), `large: true` (logo large), `largeCarte: true` (carte plus large). Pour une catégorie présentée sous forme de cartes plutôt qu'en carrousel, ajouter `presentation: "cartes"`.

> **À savoir :** certains champs sont lus directement sans valeur par défaut. Les tableaux `tags`, `liens` (projets et expérience), `details` (formations) et `notions` (compétences) doivent toujours exister, même vides (`[]`). Un champ `image: null` est accepté pour un projet sans visuel.

### 2. Les images

- **Portrait** : `assets/img/portrait-480.webp` et `portrait-760.webp` (format 4:5). Le cadrage se règle avec `object-position` sur la règle `.blob img` de `css/style.css`.
- **CV** : déposer le PDF dans `assets/docs/` et mettre à jour `identite.cv`.
- **Logos de compétences** : ajouter le fichier dans `assets/icons/` et le référencer dans `competences`.
- **Icônes d'intérêt** : la valeur `icone` correspond à une clé de `js/icons.js` (`dumbbell`, `book-open`, `graduation-cap`, `clapperboard`, `chessdotcom`…).

### 3. Identité visuelle et référencement

- **Couleurs** : toutes définies en variables CSS au début de `css/style.css` (`:root` pour le thème sombre, `[data-theme=light]` pour le thème clair). Changer `--ac` modifie la couleur d'accent du site.
- **Polices** : déclarées en `@font-face` dans `css/style.css` (variables `--hd` pour les titres, `--bd` pour le texte).
- **Métadonnées** : dans le `<head>` de `index.html`, adapter `title`, `description`, `canonical`, les balises `og:*` et `twitter:*` (**URL du site et image de partage incluses**), ainsi que les favicons dans `assets/`.
- **Image de partage** : `assets/img/og-image-v3.jpg` (1200 × 630). Changer son nom à chaque modification force les réseaux sociaux à rafraîchir leur aperçu.

## Formulaire de contact

Le formulaire envoie les messages via l'API [Web3Forms](https://web3forms.com), directement depuis le navigateur (pas de serveur à maintenir).

**Configuration**

1. Créer une clé d'accès sur web3forms.com avec l'adresse de réception souhaitée.
2. La renseigner dans `contact.web3formsKey` (`js/data.js`).
3. Dans le compte Web3Forms, restreindre la clé au domaine du site.

**Comportement**

- Les quatre champs (nom, email, sujet, message) sont obligatoires et validés côté client.
- Un champ piège invisible (`botcheck`) écarte les robots.
- Un envoi est limité à 20 secondes ; en cas d'échec, la saisie est conservée et un message d'erreur s'affiche.
- La confirmation n'apparaît qu'après réponse positive du service.
- **Sans clé** (`web3formsKey: ""`), le formulaire ouvre la messagerie de l'utilisateur via `mailto:` et indique clairement que le message n'est pas encore envoyé.

Une clé Web3Forms est conçue pour être visible côté navigateur ; ce n'est pas un secret, d'où l'importance de la restriction par domaine.

## Déploiement

Le site se publie sur n'importe quel hébergement statique en HTTPS. Le dossier à publier est celui qui contient `index.html` : `index.html`, `css/`, `js/` et `assets/` doivent se trouver à la racine publiée.

- **Netlify** : glisser-déposer le dossier, ou relier le dépôt Git (aucune commande de build, répertoire de publication = racine du projet).
- **GitHub Pages / Cloudflare Pages / Vercel** : même principe, sans configuration de build.

## Accessibilité, performance et SEO

**Accessibilité**
- Structure sémantique (`header`, `nav`, `main`, `section`, `footer`) et libellés ARIA sur les contrôles.
- Visionneuse basée sur l'élément natif `<dialog>` : focus piégé dans la fenêtre puis rendu à la vignette d'origine, fermeture avec `Échap`, navigation aux flèches, compteur annoncé aux lecteurs d'écran.
- Texte d'introduction animé doublé d'une version lisible par les lecteurs d'écran.
- Palette définie pour les deux thèmes ; animations désactivées avec `prefers-reduced-motion`.

**Performance**
- Aucun framework ni bibliothèque : environ 200 Ko de code source au total.
- Images WebP, chargement différé (`loading="lazy"`) et `srcset` pour le portrait.
- Polices intégrées : pas de requête externe bloquante.

**SEO**
- Balises `title`, `description`, `canonical`, Open Graph et Twitter Card.
- Jeu complet de favicons (SVG, ICO, PNG 32/192/512, Apple Touch Icon).

**Compatibilité** : navigateurs modernes (Chrome, Edge, Firefox, Safari récents). Une balise `<noscript>` informe l'utilisateur que JavaScript est requis pour afficher le contenu.

## Crédits et licences

- **Icônes de technologies** : [Devicon](https://devicon.dev) (MIT, texte dans `assets/icons/DEVICON-LICENSE.txt`) et [Simple Icons](https://simpleicons.org) (CC0).
- **Icônes d'interface** : [Lucide](https://lucide.dev) (ISC).
- **Drapeaux** : [flag-icons](https://github.com/lipis/flag-icons) (MIT).
- **Polices** : Bricolage Grotesque et Instrument Sans (SIL Open Font License).
- **Logos de marque** (Cisco, Fortinet, Arista, n8n, NetBox, EVE-NG, pyATS, Netmiko, Batfish, NAPALM…) : propriété de leurs titulaires respectifs, utilisés uniquement pour identifier les outils cités, sans revendiquer d'affiliation.

Le code (HTML, CSS, JavaScript) peut servir de base pour créer votre propre portfolio. Les contenus personnels (textes, photos, certificats, CV) restent la propriété de leur auteur et ne sont pas destinés à être réutilisés.

## Auteur

**Mouhammad Hassani Hamadi** — Ingénieur Réseaux & Télécommunications

[GitHub](https://github.com/Mouh4x) · [LinkedIn](https://www.linkedin.com/in/mouhammad-h-h)
