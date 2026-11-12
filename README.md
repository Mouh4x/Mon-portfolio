# Portfolio — Mouhammad Hassani Hamadi

Site statique en HTML, CSS et JavaScript, sans installation ni compilation. Les images, documents, logos, icônes, drapeaux et polices sont inclus localement. Aucun service externe n’est nécessaire pour afficher le site.

## Ouvrir le site

Après extraction du ZIP, ouvrez le dossier `portfolio`, puis double-cliquez sur `index.html`. Le site fonctionne aussi par ouverture locale, sans serveur. Pour le publier, déposez le contenu de `portfolio` sur votre hébergement statique, avec `index.html` à la racine.

## Structure et contenu

`js/data.js` reste l’unique fichier de données : identité, formations, expérience, projets, certifications, compétences, langues, centres d’intérêt et contact. `js/main.js` assure leur affichage ; `js/icons.js` contient les SVG intégrés ; `css/style.css` conserve les styles et animations existants, avec des ajustements ciblés à la fin du fichier. Les ressources locales sont dans `assets/`.

Pour modifier un texte, une date, un lien ou l’ordre des catégories, modifiez seulement la donnée correspondante dans `js/data.js`. Le CV et les documents d’origine sont conservés sans modification.

## Modifications de cette version

La description du stage de fin d’études est limitée à trois phrases accessibles, résultat d’abord. Le titre ne comporte plus de jargon. La chaîne technique, sa légende et la liste des technologies de ce bloc ont été retirées. Les deux liens et les fichiers du rapport et de la présentation restent strictement inchangés.

ReactionOptimizer est daté « Novembre 2026 ». SecureChat est daté « Novembre 2025 » et identifié comme projet académique. Les autres descriptions de projets sont inchangées.

La photo fournie est la deuxième image de la certification YaneCode Academy, après le certificat existant. Les deux images sont agrandissables au clic. Sur petit écran, elles s’affichent l’une sous l’autre ; sur grand écran, côte à côte. Les chemins et textes alternatifs sont dans `certifications[].imagesSupplementaires`.

Les compétences comportent désormais, dans cet ordre : « Réseaux et sécurité » (Fortinet en premier), « Télécommunications », « Systèmes », « Développement », « Outils d'automatisation », puis « Gestion de projet ». « Architectures 2G à 5G » et « Traitement du signal » reprennent les intitulés du site ; ils concordent avec le CV. Ces compétences et les éléments de gestion de projet utilisent de grandes cartes. Agile et Scrum sont affichés séparément ; le diagramme de Gantt est dans cette même catégorie. Le défilement horizontal des outils d’automatisation est conservé.

Ubuntu n’est plus affiché. Linux et Windows sont conservés ; « Administration Windows Server 2022 » et « Active Directory » ont été ajoutés. Chaque outil possède un visuel local et son nom. Le visuel de Packet Tracer n’est plus le logo Cisco générique.

La carte Échecs contient l’icône Chess.com et le nom d’utilisateur `197macgyver`. Elle ouvre `https://www.chess.com/member/197macgyver` dans un nouvel onglet avec `rel="noopener noreferrer"`.

## Ajouter une image ou une compétence

Placez l’image dans `assets/img/` ou le logo dans `assets/icons/`, puis renseignez son chemin dans `js/data.js`. Une compétence accepte `logo: "assets/icons/nom.svg"` (ou PNG/JPG), sans duplication dans `js/icons.js`. Les logos de marques ainsi référencés conservent leurs couleurs et reposent sur un fond blanc pour rester lisibles dans les deux thèmes. `large: true` élargit la zone d’un logo horizontal ; `largeCarte: true` élargit une carte dont le nom est long.

Le champ `icone` reste disponible pour les SVG intégrés déjà présents. Pour un pictogramme neutre local, `neutre: true` adapte sa couleur au thème. Le champ de catégorie `presentation: "cartes"` utilise les grandes cartes plutôt qu’un rail défilant.

## Thèmes, animations et accessibilité

Le thème sombre reste le thème par défaut. Le bouton soleil/lune conserve le choix du visiteur. La palette, la navigation, les animations et les autres sections d’origine sont conservées. Les ajouts respectent `prefers-reduced-motion: reduce` : aucune animation ni transition supplémentaire n’est imposée dans ce mode. Les cartes de lien sont accessibles au clavier ; les images complémentaires utilisent le dialogue d’agrandissement existant, fermable avec Échap.

## Contact

Le champ `contact.web3formsKey` est vide dans le projet fourni et reste vide : aucune clé n’a été inventée. Le formulaire continue donc à ouvrir la messagerie du visiteur avec le message prérempli. Pour activer l’envoi par Web3Forms, renseignez votre propre clé dans `js/data.js`. Le service serait alors le seul appel réseau nécessaire à l’envoi du formulaire.

## Provenance des visuels

Les marques appartiennent à leurs propriétaires respectifs. Leur présence identifie les outils, sans prétendre à une affiliation. Les licences des bibliothèques ne constituent pas une autorisation générale d’utilisation des marques.

Les logos existants proviennent de Simple Icons (CC0) et Devicon (MIT), les icônes d’interface de Lucide (ISC), les drapeaux de flag-icons (MIT), et les polices Bricolage Grotesque et Instrument Sans sont sous SIL OFL. L’icône Chess.com provient de Simple Icons : https://github.com/simple-icons/simple-icons/blob/develop/icons/chessdotcom.svg.

Les ressources de marque supplémentaires, enregistrées localement, proviennent des sources suivantes :

- EVE-NG : https://www.eve-ng.net/wp-content/uploads/2019/11/Logo_EVE_Color-e1572621537975.png
- NetBox : https://github.com/netbox-community/netbox/blob/v4.1.0/netbox/project-static/img/netbox_icon.svg
- pyATS : https://pubhub.devnetcloud.com/media/pyats-genie/site/images/pyats-logo.png
- Netmiko : https://ktbyers.github.io/netmiko/images/netmiko_logo_gh.png (image référencée par le dépôt officiel https://github.com/ktbyers/netmiko)
- Packet Tracer : icône du logiciel reproduite dans la demande https://github.com/PapirusDevelopmentTeam/papirus-icon-theme/issues/1447, fichier https://user-images.githubusercontent.com/819186/44646593-36184d00-a9e4-11e8-884d-d1f9b74753d0.jpg ; cette image est l’icône d’origine référencée, pas une création du thème Papirus.
- Batfish : https://github.com/batfish/batfish.github.io/blob/master/assets/batfish.svg
- NAPALM : https://github.com/napalm-automation/napalm/blob/develop/docs/_static/logo.png
- Arista : https://github.com/batfish/batfish.github.io/blob/master/assets/oss-users/arista-logo.png

Windows Server utilise le logo Windows déjà inclus. Active Directory utilise un pictogramme neutre d’annuaire hiérarchique : il ne s’agit pas du logo d’Entra ID, produit différent, ni d’un logo officiel revendiqué. SQL est représenté par un monogramme neutre, car il s’agit d’un langage générique. Télécommunications, Agile, Scrum et Gantt utilisent des pictogrammes techniques neutres créés pour ce projet, pas des logos officiels. Aucun visuel n’est généré à distance au chargement.

## Vérifications

Contrôles sous Chromium aux largeurs 320, 390, 768 et 1440 pixels, en thèmes clair et sombre : affichage responsive, absence de débordement horizontal de page, présence des visuels de compétences, absence d’erreur JavaScript et de ressource locale manquante. Vérification du menu mobile, du changement de thème, du défilement du rail d’automatisation, du dialogue de la deuxième photo, du mode de réduction des animations et de l’ouverture locale de `index.html`. Les PDF et la présentation ont été comparés aux fichiers d’origine et sont inchangés. Les destinations externes préexistantes ne font pas l’objet d’une validation de leur contenu.

## Point non vérifiable dans les éléments fournis

La seule image jointe séparément à l’archive est la photo YaneCode ; aucune capture distincte n’identifie le bloc à supprimer du PFE. Pour exécuter la demande sans validation préalable, la suppression porte donc sur l’ensemble technique redondant de l’expérience : chaîne de déploiement, légende et technologies. Les documents, les deux liens et les autres sections restent conservés.
