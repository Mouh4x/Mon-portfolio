# Portfolio — Mouhammad Hassani Hamadi

Site statique HTML, CSS et JavaScript. Aucun abonnement, dépendance de développement, installation ou compilation n’est requis pour exécuter ce code. Les photos, certificats, CV, rapports, présentations, logos et polices sont intégrés localement. Seul l’envoi du formulaire utilise un service externe (Web3Forms).

## Ouvrir et publier

Extraire l’archive ZIP puis ouvrir `portfolio/index.html` dans un navigateur. Pour publier, déposer **le contenu** du dossier `portfolio` sur un hébergement statique HTTPS : `index.html`, `css/`, `js/` et `assets/` doivent être à la racine publiée. Le site ne dépend d’aucune offre payante ni d’aucun environnement de construction. Les éventuelles restrictions de téléchargement de la plateforme qui transmet le ZIP ne sont pas contrôlables par ce projet.

## Modifier le nom de la navigation — emplacement exact

Ouvrir **`js/data.js`, ligne 8** :

```js
    marque: "Mouhammad.", // Texte affiché en haut à gauche de la navigation.
```

Modifier uniquement la chaîne entre guillemets. Le rendu est réalisé dans `index.html` par l’élément `#brandName` et initialisé par `js/main.js`. Le nom complet reste dans l’introduction, le pied de page et le libellé accessible du lien d’accueil. Il n’est pas nécessaire de modifier ces fichiers pour changer la marque de navigation.

## Organisation et contenu unique

- `js/data.js` : unique fichier de données pour l’identité, la marque de navigation, les langues, l’expérience, les projets et leurs galeries, les compétences, les formations, les certifications, les centres d’intérêt, les coordonnées, les liens sociaux et la phrase de contact.
- `index.html` : structure accessible et libellés d’interface.
- `js/main.js` : rendu, menu, thèmes, animations, visionneuse et formulaire.
- `js/icons.js` : icônes d’interface et icônes historiques, conservées pour ne pas supprimer des ressources du projet original. Les compétences affichées utilisent désormais les fichiers de `assets/icons/`, pas ces anciens logos monochromes.
- `css/style.css` : styles originaux et finitions ciblées.
- `assets/img/` : photos, captures, logos d’établissements/entreprise et certificats.
- `assets/icons/` : logos et pictogrammes locaux, avec licence Devicon.
- `assets/docs/` : les cinq documents PDF/PPTX fournis, conservés octet pour octet.

Les messages de validation et les libellés d’interface restent dans la présentation comme dans le projet initial ; les données personnelles et les nouveaux textes éditoriaux restent dans `js/data.js`.

## Modifications livrées

### Logos fidèles en clair et en sombre

Les compétences n’utilisent plus de SVG de marque héritant de `currentColor`. Les transformations de teinte selon le thème ont été retirées. Les logos multicolores de Linux/Tux, Python, C, Bash, Streamlit, scikit-learn, pandas, NumPy, OpenCV, TensorFlow, Ansible, Git, GitHub Actions, Docker et AWS sont des SVG locaux Devicon dans leur variante couleur. Java conserve sa tasse bleue et sa vapeur rouge. Les logos monochromes par identité (par exemple Ansible) restent fidèles : il ne s’agit pas d’une conversion monochrome du site.

Les symboles Cisco, Fortinet, Wireshark et Jinja2 ont une couleur de marque fixe dans leur SVG local. Windows conserve son SVG bleu. Les logos de Packet Tracer, EVE-NG, Arista, n8n, NetBox, Batfish, pyATS, Netmiko et NAPALM sont préservés. Un petit fond blanc identique dans les deux thèmes permet de lire les logos sombres sans les recolorer. Les pictogrammes descriptifs de SQL, Active Directory, télécommunications et gestion de projet gardent leur couleur propre fixe ; ils ne sont pas présentés comme des logos officiels.

**C :** la carte C était absente du fichier de données reçu. Elle a été ajoutée à votre demande avec le symbole C bleu-gris de Devicon (`c-original.svg`), sans inventer de niveau ni d’expérience. Il ne s’agit pas d’un logo noir ou rouge. Le langage C ne possède pas une autorité de marque unique comparable à un éditeur de logiciel ; cette variante est identifiée comme provenant de Devicon, sans revendiquer une officialité non établie.

Les liens sociaux affichent aussi les fichiers de marque locaux avec leurs couleurs fixes. Le symbole Chess.com reste vert. Les pictogrammes d’interface (soleil, menu, téléphone, etc.) continuent de suivre la palette : ce ne sont pas des logos de marque.

Le logo INEOS est recadré dans un fichier dérivé `assets/img/ineos-cadre.png`, uniquement pour réduire les grandes marges blanches. Son graphisme et ses couleurs ne sont pas redessinés. L’original `ineos.png` reste fourni.

### Certification SQL (Basic)

La certification est ajoutée à la fin de la liste, qui conserve son ordre du plus récent au plus ancien : après Udemy (20 juillet 2024), SQL (Basic) (18 mars 2024).

- Intitulé exact : **SQL (Basic)**.
- Organisme : **HackerRank**.
- Date lue sur l’image : **18 Mar, 2024**, affichée en français **18 mars 2024**.
- Identifiant lu sur l’image : **DAE6BE6A8D69**.
- Titulaire : **MOUHAMMAD Hassani Hamadi**, en respectant le prénom en capitales sur le certificat ; aucune modification du nom du portfolio.
- Vérification : https://www.hackerrank.com/certificates/dae6be6a8d69
- Visuel local : `assets/img/cert-sql.png`, copie exacte du fichier image fourni, sans retouche ni recompression.

Description affichée : « Certification SQL de niveau Basic portant sur les requêtes simples, les relations et les agrégations. »

La page officielle de vérification a pu être consultée et indique : « It includes simple queries, relationships, and aggregators. » La page https://www.hackerrank.com/skills-verification/sql_basic confirme l’intitulé SQL (Basic) et cite les requêtes simples. Le nom, la date et l’identifiant ont été lus sur votre image ; le texte extrait de la page de vérification ne les exposait pas. Aucun score, durée personnelle d’examen, classement ou date d’expiration n’est ajouté. Le champ `validite` est vide, sans puce vide dans l’affichage.

Comme les autres certifications : intitulé, organisme, date et description au-dessus ; certificat en dessous, agrandissable au clic ou au clavier. Le lien de vérification est conservé.

### Captures de projets et ordre de lecture

La capture WAN existante est conservée et votre seconde capture est ajoutée à la galerie du projet « Conception et déploiement d’un WAN d’entreprise multi-sites évolutif ». La vignette indique deux images ; un clic ouvre la galerie. Les deux fichiers locaux sont `wan.webp` et `wan-topologie.png`. La capture ajoutée est une copie exacte du fichier fourni.

Dans les projets, la présentation textuelle précède désormais les images sur ordinateur comme sur mobile. Aucun titre, résumé, date, technologie ou lien de projet préexistant n’a été modifié.

Sur l’accueil mobile, le portrait n’est plus réordonné avant le texte : introduction, actions et informations passent en premier ; portrait ensuite. Sur ordinateur, la présentation reste à gauche et le portrait à droite, pour préserver le design initial. Avec les animations actives, le portrait entre après la première phrase de présentation plutôt que dès l’ouverture. Avec « réduire les animations », tous les textes et visuels sont immédiatement disponibles, sans effet retardé.

### Langues

Les quatre langues et leurs niveaux existants sont inchangés. Elles sont regroupées dans un bloc « Langues » à la fin de la section Compétences, et ne chevauchent plus le portrait. Disposition à quatre colonnes sur grand écran, deux sur mobile et une sur les plus petits écrans.

### Contact et pied de page

La phrase « Une question, une opportunité ou un projet ? Échangeons. » est stockée dans `contact.invitation`. Coordonnées dans des blocs alignés, formulaire sur un panneau discret, champs lisibles dans les deux thèmes et bouton adapté au téléphone. Le pied de page présente le nom complet, les liens sociaux issus des données et l’année automatique, sans nouveau séparateur entre sections ni mention d’hébergeur.

**Mention « powered by Netlify » :** aucune occurrence de « Netlify » ou « powered by » n’était présente dans le HTML, le CSS, le JavaScript ou les ressources textuelles de l’archive reçue. Le projet livré n’ajoute aucun badge d’hébergement. Si cette mention apparaît encore sur la version publiée, elle est extérieure à ces sources ; l’URL publiée et l’accès à ses réglages n’ont pas été fournis, donc son origine et son retrait côté hébergement ne peuvent pas être vérifiés ici. Aucun contournement CSS visant à masquer des éléments externes n’a été ajouté.

## Galeries accessibles

La même visionneuse sert aux certifications et aux captures des projets. Clic, Entrée ou Espace sur une vignette ; boutons précédent/suivant et touches fléchées pour naviguer ; balayage horizontal sur téléphone ; Échap, bouton de fermeture ou clic hors dialogue pour fermer. Le dialogue natif bloque les interactions avec l’arrière-plan ; le focus est retenu dans la visionneuse puis rendu à la vignette d’origine. Le compteur est annoncé et les commandes de navigation disparaissent lorsqu’une seule image est disponible.

La galerie YaneCode (certificat + photo de groupe) est conservée.

Pour ajouter une image complémentaire à un projet ou à une certification dans `js/data.js` :

```js
imagesSupplementaires: [
  { image: "assets/img/mon-image.png", alt: "Description factuelle de l’image" }
]
```

Le champ `image` reste la première vignette et la première image de la galerie.

## Formulaire : configuration existante conservée

Une clé Web3Forms est **déjà présente** dans `contact.web3formsKey` du fichier reçu. Elle est conservée ; contrairement au README précédent, il n’est donc pas exact de dire qu’aucune clé n’a été fournie. Aucune nouvelle clé ni aucun compte n’a été créé. Cette clé est utilisée côté navigateur comme dans le projet initial, et n’est pas un mot de passe de messagerie. Les restrictions de domaine et le destinataire doivent être gérés dans votre compte Web3Forms : `contact.email` ne détermine pas à lui seul la destination de l’envoi via le service.

Les champs Nom, Email, Sujet et Message sont obligatoires ; la validation, la protection contre les doublons, la limite de temps de 20 secondes, le maintien du message en cas d’erreur et la confirmation uniquement après succès du service sont conservés. Sans clé, le mode de secours ouvre explicitement une messagerie (`mailto:`) sans prétendre avoir envoyé le message.

**Vérification restant à faire après publication :** envoyer un message réel et vérifier sa réception dans votre boîte. Les tests de livraison ont été simulés localement, sans expédier d’email ni utiliser la clé contre le service réel. L’état de votre compte, la validité de la clé et la réception réelle ne sont donc pas attestés. La copie d’email nécessite un navigateur autorisant l’API presse-papiers, généralement en HTTPS.

## Préservation et tests

La palette, les polices locales, les animations originales hors ajustements de priorité, les textes non concernés, les effets de survol, les rapports, le CV et les présentations sont préservés. Aucun texte promotionnel, séparateur entre sections ou sous-titre décoratif n’est ajouté. La nouvelle phrase de contact est celle demandée.

Tests Chromium : largeurs **320, 390, 768, 1024 et 1440 px**, en clair et sombre. Vérification des ressources locales, erreurs JavaScript, débordement horizontal, texte avant portrait, langues dans Compétences, logos sans filtre, préférence de réduction des animations, menu mobile, changement de thème, SQL agrandissable et galeries WAN/YaneCode avec clavier et retour du focus. Test supplémentaire des animations actives et de l’ouverture directe de `index.html` sans serveur. Formulaire testé avec réponses locales simulées (validation, objet et adresse de réponse, erreur conservant les champs, succès réinitialisant le formulaire), sans envoi réel.

Comparaison automatique avec le projet reçu : les cinq projets ont gardé toutes leurs données d’origine, sauf l’ajout de la galerie WAN ; les quatre certifications préexistantes sont identiques ; langues, formations et centres d’intérêt inchangés ; puces d’expérience inchangées ; cinq documents PDF/PPTX identiques octet pour octet.

L’historique interne `.git` n’est pas inclus dans le ZIP de livraison : il n’est pas nécessaire au fonctionnement et contient des données de dépôt privées. Tous les fichiers du site et toutes ses ressources sont fournis, y compris les anciens visuels non référencés.

## Provenance des logos et licences

Les marques appartiennent à leurs titulaires ; elles identifient les outils cités sans revendiquer d’affiliation. Une licence d’icônes ne remplace pas les droits des marques. Devicon est sous licence MIT ; texte inclus dans `assets/icons/DEVICON-LICENSE.txt`.

### SVG Devicon couleur intégrés dans cette révision

- `ansible-color.svg` : https://raw.githubusercontent.com/devicons/devicon/master/icons/ansible/ansible-original.svg
- `aws-color.svg` : https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg
- `c-color.svg` : https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg
- `docker-color.svg` : https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg
- `git-color.svg` : https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg
- `githubactions-color.svg` : https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg
- `gnubash-color.svg` : https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg
- `linux-color.svg` : https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg
- `numpy-color.svg` : https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg
- `opencv-color.svg` : https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg
- `pandas-color.svg` : https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg
- `python-color.svg` : https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg
- `scikitlearn-color.svg` : https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg
- `streamlit-color.svg` : https://raw.githubusercontent.com/devicons/devicon/master/icons/streamlit/streamlit-original.svg
- `tensorflow-color.svg` : https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg

### Ressources existantes conservées et provenance documentée par le projet reçu

Ces références de provenance étaient fournies dans l’archive initiale ; elles sont conservées à titre d’attribution et ne constituent pas un nouvel audit de tous les sites tiers.

- Java (Devicon, MIT) : https://github.com/devicons/devicon/blob/master/icons/java/java-original.svg
- Arista : https://commons.wikimedia.org/wiki/File:Arista-networks-logo.svg
- Cisco Packet Tracer : icône native extraite du paquet 8.2.2 dans la version reçue ; téléchargement officiel du logiciel : https://www.netacad.com/resources/lab-downloads. Le paquet logiciel n’est pas inclus.
- n8n : https://n8n.io/brandguidelines/ ; https://guidelines.n8n.design/downloads/logo/symbol/n8n-symbol-accent.svg
- EVE-NG : https://www.eve-ng.net/wp-content/uploads/2019/11/Logo_EVE_Color-e1572621537975.png
- NetBox : https://github.com/netbox-community/netbox/blob/v4.1.0/netbox/project-static/img/netbox_icon.svg
- pyATS : https://pubhub.devnetcloud.com/media/pyats-genie/site/images/pyats-logo.png
- Netmiko : https://ktbyers.github.io/netmiko/images/netmiko_logo_gh.png
- Batfish : https://github.com/batfish/batfish.github.io/blob/master/assets/batfish.svg
- NAPALM : https://github.com/napalm-automation/napalm/blob/develop/docs/_static/logo.png
- Simple Icons (CC0), pour les symboles de marque déjà présents : https://simpleicons.org/
- Interface Lucide (ISC) : https://lucide.dev/license
- Drapeaux flag-icons (MIT) : https://github.com/lipis/flag-icons
- Polices Bricolage Grotesque et Instrument Sans : SIL OFL selon la documentation d’origine, intégrées dans le CSS.

SQL est un pictogramme descriptif de base de données, pas un logo officiel de langage ; il en va de même pour Active Directory et les pictogrammes de télécommunications et de gestion de projet. Les fichiers de certificat et de topologie ajoutés sont ceux fournis par le propriétaire du portfolio.

## Informations non vérifiables ici

Aucune information personnelle n’a été inventée. Restent à vérifier en conditions réelles : la réception Web3Forms et l’éventuelle mention Netlify extérieure aux fichiers fournis. La nouvelle capture WAN est utilisée à sa résolution d’origine (1024 × 457) ; aucune version haute définition n’a été fournie ni inventée.
