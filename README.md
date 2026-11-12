# Portfolio — Mouhammad Hassani Hamadi

Site statique HTML, CSS et JavaScript, sans installation ni compilation. Le projet complet comprend les photos, certificats, CV, rapports, présentations, logos, icônes et polices locales. Aucun chargement externe n’est nécessaire pour afficher les pages. L’envoi direct du formulaire, une fois activé, utilise Web3Forms.

## Démarrage et publication

Extraire le ZIP, puis ouvrir `portfolio/index.html`. Le site peut être consulté directement depuis ce fichier. Pour la publication, déposer le contenu du dossier `portfolio` sur un hébergement statique HTTPS, avec `index.html` à la racine. La copie de l’email dépend de la disponibilité du presse-papiers dans le navigateur, généralement en contexte sécurisé.

## Structure

- `index.html` : structure, formulaire et dialogue accessible de la galerie.
- `js/data.js` : **unique fichier de données** pour l’identité, les langues, les formations, l’expérience, les projets, les certifications, les compétences, les centres d’intérêt et les coordonnées. La clé du formulaire est également définie ici.
- `js/main.js` : affichage des données et interactions.
- `js/icons.js` : icônes vectorielles intégrées, dont les deux nouveaux pictogrammes d’interface téléphone et galerie.
- `css/style.css` : feuille d’origine, conservée avec uniquement des ajouts ciblés en fin de fichier.
- `assets/` : ressources locales, dont `docs/` pour les fichiers PDF et PPTX.

Aucune dépendance de développement ni paquet d’installation du logiciel Packet Tracer n’est inclus dans le livrable.

## Corrections apportées

### Compétences et gestion de projet

Java utilise la tasse avec sa vapeur en SVG. SQL utilise un véritable pictogramme neutre de base de données : ce langage n’a pas de logo de marque unique. Le mot-symbole Arista Networks est remplacé par sa version vectorielle bleue. Packet Tracer utilise l’icône originale du logiciel extraite de son paquet de distribution, et non le logo Cisco générique ou une icône de thème tierce. Cette ressource native est un PNG de 48 × 48 pixels ; elle est affichée à 44 × 44 pixels, sans agrandissement artificiel. Java, Arista et n8n sont vectoriels. Les logos de marque sur fond blanc et les pictogrammes neutres adaptés au thème restent lisibles en clair et en sombre.

n8n et son symbole officiel sont ajoutés au rail des outils d’automatisation. Toutes les compétences possèdent un visuel local ou un SVG intégré ; aucun monogramme de remplacement n’est utilisé pour une compétence affichée.

Agile et Scrum sont regroupés dans une seule grande carte « Méthodes agiles (Scrum) », avec un cycle itératif. Le diagramme de Gantt utilise une grande carte et un planning à barres. La palette et les interactions des cartes existantes sont conservées.

### Certifications

Chaque certification affiche uniquement son certificat en vignette. Quand `imagesSupplementaires` contient des éléments, une petite icône de galerie et le nombre total d’images apparaissent dans la vignette. Pour YaneCode Academy, le certificat est la première image et la photo de groupe la seconde.

Un clic ou la touche Entrée ouvre la visionneuse. Les boutons précédent/suivant et les flèches gauche/droite du clavier permettent de naviguer. Sur téléphone, un balayage horizontal sur l’image change aussi d’image. Le bouton de fermeture, Échap et un clic à l’extérieur ferment la visionneuse ; le focus revient à la vignette d’origine. Le dialogue natif retient le focus pendant son ouverture, le fond est non interactif et le défilement de la page est bloqué. Les boutons tactiles mesurent 44 × 44 pixels. Le compteur est annoncé aux technologies d’assistance.

Le même comportement s’applique automatiquement à toute certification à laquelle des images complémentaires sont ajoutées dans `js/data.js`.

### Formations, expérience et projets

Le lieu du baccalauréat est « Iconi, Comores », conformément à la demande. Le PFE est présenté en trois puces, résultat avant moyen, sans sigle dans la description. L’environnement simulé est précisé pour ne pas laisser entendre un déploiement en production. Les pastilles reprennent la pile explicitement citée dans le CV et corroborée par le rapport : NetBox, Ansible, Jinja2, Batfish, pyATS, GitHub Actions, Docker, EVE-NG, Python, Cisco IOS, Arista EOS et FortiOS.

La présentation existante `assets/docs/soutenance-PFA.pptx` est liée en complément du rapport du PFA. **Toutes les descriptions des projets sont conservées mot pour mot**, comme leurs autres données, à l’exception de cet ajout de lien au PFA. Les cinq documents PDF/PPTX fournis restent inchangés, octet pour octet.

### Contact

Les coordonnées issues du CV sont regroupées en liste alignée, avec icônes email, téléphone et localisation. L’email et le téléphone sont cliquables. Valeurs : `h.hamadimouhammad@gmail.com`, `+212 674 887 425` et `Casablanca, Maroc`.

Le formulaire comporte, dans cet ordre, **Nom, Email, Sujet, Message**. Les quatre champs sont obligatoires. Les entrées composées seulement d’espaces sont refusées, la syntaxe de l’email est contrôlée, le premier champ invalide reçoit le focus via la validation native et les erreurs sont signalées. Le sujet saisi est transmis dans le champ `subject` de Web3Forms et devient l’objet de l’email reçu. L’email de l’expéditeur est transmis comme adresse de réponse (`replyto`).

Pendant l’envoi, le bouton est désactivé pour éviter les doublons. Une confirmation apparaît seulement après une réponse positive du service. En cas d’erreur, le message est conservé ; une demande sans réponse après 20 secondes est interrompue avec un message explicite. Ce délai ne permet pas d’exclure un traitement côté service : l’interface indique donc que l’envoi n’a pas pu être confirmé.

## Activer l’envoi direct Web3Forms — configuration manquante

**Aucune clé Web3Forms n’était fournie dans le projet. Il est impossible de finaliser un envoi réel à votre compte sans cette clé ; aucune clé n’a été inventée.**

1. Obtenir votre clé d’accès pour votre adresse de réception sur https://web3forms.com et effectuer la vérification de cette adresse demandée par le service.
2. Dans `js/data.js`, remplacer `contact.web3formsKey: ""` par votre clé, en conservant la syntaxe JavaScript. La clé d’accès Web3Forms est conçue pour un formulaire côté navigateur ; ne pas insérer de mot de passe de messagerie ou de clé serveur privée.
3. Publier le site en HTTPS, envoyer un message de test réel et vérifier sa réception, l’objet saisi et l’adresse de réponse. Les réglages de destination ou de restriction de domaine, s’ils sont utilisés, se font dans le compte du service : le champ `contact.email` n’est pas un sélecteur de destinataire Web3Forms.

Sans clé, le comportement de secours ouvre la messagerie du visiteur avec le **sujet exact** et le message préremplis. Un texte explique clairement que le message n’est pas encore envoyé et qu’il faut valider l’envoi dans la messagerie. Aucune fausse confirmation de réception n’est affichée. Ce mécanisme nécessite une messagerie associée aux liens `mailto:`.

## Informations non fournies

Le CV indique seulement **Casablanca, Maroc** : aucune rue ni aucun code postal n’y figure. La liste de contact reprend donc cette localisation sans inventer une adresse postale détaillée. Pour la compléter ultérieurement, modifier `contact.adresse` dans `js/data.js`.

La clé Web3Forms constitue l’autre information manquante. Le traitement du formulaire a été vérifié avec des réponses simulées ; la réception d’un email réel ne peut pas être attestée sans clé valide et sans accès à votre boîte de réception.

## Préservation, responsive et accessibilité

Le design existant, la palette, les sections non concernées, les animations, les photos et les descriptions des projets sont préservés. Aucun sous-titre décoratif, texte de remplissage ou séparateur de section n’est ajouté. Les nouvelles valeurs de contenu restent dans `js/data.js` ; seuls les libellés d’interface et messages de validation demeurent dans les fichiers de présentation, comme dans le projet d’origine.

Le mode `prefers-reduced-motion: reduce` reste respecté, y compris pour les nouvelles interactions. La navigation, le changement de thème et le défilement horizontal des compétences sont conservés.

## Contrôles effectués

Tests sous Chromium aux largeurs **320, 390, 768 et 1440 pixels**, dans les thèmes clair et sombre : aucune erreur JavaScript, aucune ressource locale manquante, aucun débordement horizontal de page et aucune compétence sans visuel. Contrôles de la vignette unique, du badge de galerie, de la navigation clavier et tactile simulée, de la fermeture et du retour du focus ; vérification complémentaire en paysage mobile et du confinement du focus dans le dialogue.

Contrôles du formulaire avec interception locale des requêtes (aucun message réel envoyé) : champs vides, espaces seuls, email incorrect, transfert du sujet et de l’adresse de réponse, confirmation après succès, refus du service, erreur HTTP, erreur réseau, maintien des champs après erreur et prévention des doublons. Le mode sans clé et l’ouverture locale de `index.html` ont également été vérifiés, ainsi que le thème et le menu mobile avec les animations d’origine actives.

Comparaison automatique des données de projets avec l’archive source : toutes les descriptions et les autres données initiales sont identiques ; seul le lien vers la présentation du PFA est ajouté. Comparaison d’empreintes des cinq documents originaux : identiques. Les sites externes préexistants n’ont pas fait l’objet d’un audit de leur contenu.

## Provenance des visuels et licences

Les marques servent uniquement à identifier les outils. Elles appartiennent à leurs titulaires ; aucune affiliation n’est revendiquée. Une licence d’icônes ne supprime pas les droits sur les marques.

### Ressources remplacées ou ajoutées

- Java, logo tasse/vapeur, SVG Devicon : https://github.com/devicons/devicon/blob/master/icons/java/java-original.svg — projet Devicon sous MIT, marque Java appartenant à son titulaire.
- Arista Networks, mot-symbole vectoriel : https://commons.wikimedia.org/wiki/File:Arista-networks-logo.svg ; fichier https://upload.wikimedia.org/wikipedia/commons/9/99/Arista-networks-logo.svg. Marque Arista Networks ; le fichier Commons signale les restrictions liées aux marques.
- Cisco Packet Tracer : icône originale `opt/pt/art/app.png` extraite du paquet Cisco Packet Tracer 8.2.2, distribué sur le miroir https://github.com/andknownmaly/packettracer/releases/download/8.2.2/Packet_Tracer822_amd64_signed.deb ; chemin également décrit par https://raw.githubusercontent.com/andknownmaly/packettracer/refs/heads/main/setup.sh. Le paquet n’a pas été exécuté et n’est pas inclus dans le ZIP ; seule son icône est intégrée. Le logiciel se télécharge officiellement depuis https://www.netacad.com/resources/lab-downloads. Marque et icône Cisco, pas une création de thème d’icônes.
- n8n, symbole vectoriel rose fourni par la marque : https://n8n.io/brandguidelines/ ; fichier https://guidelines.n8n.design/downloads/logo/symbol/n8n-symbol-accent.svg.
- SQL et Gantt : pictogrammes neutres locaux (base de données et planning à barres), sans revendication de logo officiel. Méthodes agiles : pictogramme de cycle itératif déjà présent dans le projet.
- Téléphone et galerie : pictogrammes Lucide (ISC), intégrés localement dans `js/icons.js` ; https://lucide.dev/license.

### Ressources existantes conservées

Les icônes intégrées existantes proviennent notamment de Simple Icons (CC0) et Devicon (MIT), les icônes d’interface de Lucide (ISC), les drapeaux de flag-icons (MIT), et les polices Bricolage Grotesque et Instrument Sans sont sous SIL OFL, selon la provenance documentée dans le projet source.

Les sources suivantes étaient indiquées dans le README d’origine et sont conservées pour les visuels non remplacés :

- EVE-NG : https://www.eve-ng.net/wp-content/uploads/2019/11/Logo_EVE_Color-e1572621537975.png
- NetBox : https://github.com/netbox-community/netbox/blob/v4.1.0/netbox/project-static/img/netbox_icon.svg
- pyATS : https://pubhub.devnetcloud.com/media/pyats-genie/site/images/pyats-logo.png
- Netmiko : https://ktbyers.github.io/netmiko/images/netmiko_logo_gh.png ; dépôt https://github.com/ktbyers/netmiko
- Batfish : https://github.com/batfish/batfish.github.io/blob/master/assets/batfish.svg
- NAPALM : https://github.com/napalm-automation/napalm/blob/develop/docs/_static/logo.png
- Chess.com : https://github.com/simple-icons/simple-icons/blob/develop/icons/chessdotcom.svg

Windows Server utilise le logo Windows existant. Active Directory, les télécommunications et la gestion de projet utilisent des pictogrammes descriptifs neutres plutôt que des logos officiels inventés. Les anciens fichiers non référencés sont conservés pour ne pas supprimer inutilement des ressources du projet d’origine.
