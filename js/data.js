/* ============================================================
   DONNÉES DU PORTFOLIO — seul fichier à modifier pour le contenu.
   Les images/logos sont dans le dossier assets/.
   ============================================================ */
window.PORTFOLIO = {
  identite: {
    prenom: "Mouhammad",
    nomFamille: "Hassani Hamadi",
    titre: "Ingénieur Réseaux & Télécommunications", /* utilisé pour le référencement, non affiché */
    lieu: "Casablanca, Maroc",
    permis: "Permis B",
    /* Introduction animée : la 1re phrase s’écrit lettre par lettre ("debut" + prénom + nom), les suivantes mot par mot. */
    debut: "Je m’appelle",
    phrases: [
      "Diplômé en ingénierie des réseaux et télécommunications en 2026.",
      "Attiré par les technologies de l’information, je m’intéresse particulièrement aux réseaux, aux systèmes et à leur automatisation. J’aime découvrir de nouvelles technologies, comprendre leur fonctionnement et élargir mes compétences au-delà de mon domaine initial."
    ],
    disponibilite: "Ouvert aux nouvelles opportunités",
    cv: "assets/docs/CV-Mouhammad-Hassani-Hamadi.pdf"
  },

  /* Langues : drapeau = fichier de assets/flags/ */
  langues: [
    { nom: "Français", niveau: "Langue maternelle", drapeau: "fr" },
    { nom: "Comorien", niveau: "Langue maternelle", drapeau: "km" },
    { nom: "Anglais",  niveau: "Niveau technique",  drapeau: "gb" },
    { nom: "Arabe",    niveau: "Niveau débutant",   drapeau: "ma" }
  ],

  /* Frise : du plus récent au plus ancien. logo: null → icône neutre */
  formations: [
    { etablissement: "ENSA Safi", lieu: "Maroc", diplome: "Diplôme d’ingénieur : Génie des Télécommunications et Réseaux", periode: "2021 – 2026", duree: "5 ans", logo: "assets/img/ensas.png",
      details: ["Cycle ingénieur : Génie des Télécommunications et Réseaux (2023 – 2026)", "Cycle préparatoire : Sciences de l’Ingénieur (2021 – 2023)"] },
    { etablissement: "YaneCode Academy", lieu: "Safi, Maroc", diplome: "Formation complémentaire : Web, IA & IoT", periode: "Été 2025", duree: "2 mois", logo: "assets/img/yanecode.png",
      details: ["Web : portfolio HTML/CSS", "IA : n8n, Pandas, NumPy, OpenCV, TensorFlow", "IoT : Smart Home sur Arduino"] },
    { etablissement: "École Privée Al-Fath", lieu: "Comores", diplome: "Baccalauréat Scientifique : Série C", periode: "2018 – 2021", duree: "3 ans", logo: null, details: [] }
  ],

  experience: {
    poste: "Stage de fin d’études : automatisation des déploiements réseau",
    entreprise: "INEOS", lieu: "Casablanca, Maroc", periode: "Fév. – Juin 2026", duree: "5 mois", logo: "assets/img/ineos.png",
    resume: "Déploiements réseau plus rapides et moins d’interventions manuelles grâce à l’automatisation. Les configurations sont contrôlées avant leur mise en place pour éviter les erreurs. Chaque changement est vérifié et documenté.",
    liens: [{ texte: "Rapport de PFE (PDF)", url: "assets/docs/Rapport-PFE.pdf" }, { texte: "Présentation de soutenance (PPTX)", url: "assets/docs/Presentation-PFE.pptx" }]
  },

  /* image: optionnelle. À ajouter avec date/liens si besoin. */
  projets: [
    { titre: "Conception et déploiement d’un WAN d’entreprise multi-sites évolutif", type: "Projet personnel · entreprise fictive", date: "Oct. – Nov. 2025", image: "assets/img/wan.webp", alt: "Topologie réseau Packet Tracer reliant deux sites via un routeur FAI",
      resume: "Interconnecter deux sites distants de façon sécurisée : tunnels VPN site-à-site et accès distant, flux sensibles isolés par VLAN, filtrage par ACL. Architecture hiérarchique (accès, distribution, cœur) conçue pour évoluer, avec routage OSPF, DHCP, NAT et plan d’adressage IPv4, simulée sous Packet Tracer. Extension WiFi et migration IPv6 en préparation.",
      tags: ["Packet Tracer", "OSPF", "VPN", "VLAN", "ACL", "NAT"], liens: [] },
    { titre: "SecureChat", type: "Projet académique · Messagerie chiffrée pour LAN", date: "Novembre 2025", image: "assets/img/securechat.webp", alt: "Deux fenêtres de l’application SecureChat et le serveur lancé dans un terminal",
      resume: "Protéger les échanges d’une messagerie en réseau local : chaque client reçoit sa propre clé AES-256, transmise sous chiffrement RSA-2048, et chaque message est chiffré en AES-GCM avec un vecteur unique. Application Java/JavaFX en sockets.",
      tags: ["Java", "JavaFX", "Sockets", "AES-GCM", "RSA"], liens: [{ texte: "Code source", url: "https://github.com/Mouh4x/SecureChat/tree/main/SecureChat" }] },
    { titre: "Automatisation et gestion centralisée du réseau via contrôleur SDN", type: "Projet personnel", date: "Juil. – Août 2026", image: null,
      resume: "Centraliser le provisioning et les politiques réseau au sein d’une solution SDN, orchestrée par intégration d’API REST.",
      tags: ["SDN", "API REST"], liens: [] },
    { titre: "Extension du réseau LTE sur les espaces blancs TV (TVWS)", type: "PFA · Projet académique", date: "Juil. – Sept. 2025", image: null,
      resume: "Réduire de 3 à 5 % (gain théorique) le taux de blocage d’appels d’un réseau LTE rural, grâce à deux algorithmes d’allocation dynamique des ressources radio entre les deux bandes. Étude de faisabilité d’un déploiement LTE sur le spectre TV inutilisé, pour couvrir les zones rurales à moindre coût.",
      tags: ["LTE", "TVWS", "Allocation de ressources"], liens: [{ texte: "Rapport (PDF)", url: "assets/docs/Rapport-PFA-TVWS.pdf" }] },
    { titre: "ReactionOptimizer", type: "Application Streamlit", date: "Novembre 2026", image: null,
      resume: "Orienter les prochains essais d’une réaction chimique quand les réactifs sont limités : l’application compare 7 modèles prédictifs par validation croisée, propose des conditions optimales sous contraintes et suggère les expériences les plus instructives. Import Excel/CSV, export Excel.",
      tags: ["Python", "Streamlit", "scikit-learn", "pandas"], liens: [{ texte: "Code source", url: "https://github.com/Mouh4x/ReactionOptimizer" }] }
  ],

  /* Certifications : du plus récent au plus ancien */
  certifications: [
    { titre: "FortiGate Operator", organisme: "Fortinet Training Institute", date: "24 juillet 2026", validite: "Valide jusqu’au 24/07/2028", image: "assets/img/cert-fortigate.webp", alt: "Certificat Fortinet FortiGate 7.6 Operator",
      texte: "Badge NSE 3, niveau anciennement nommé Fortinet Certified Associate (FCA).",
      lien: { texte: "Vérifier le badge", url: "https://www.credly.com/badges/0330122c-da49-4565-95ae-1d43120c3602/linked_in_profile" } },
    { titre: "Fortinet Certified Fundamentals in Cybersecurity", organisme: "Fortinet Training Institute", date: "12 mars 2026", validite: "Valide jusqu’au 12 mars 2028", image: "assets/img/cert-fcf.webp", alt: "Certificat Fortinet Certified Fundamentals in Cybersecurity",
      texte: "Délivrée après les badges NSE 1 et 2. Couvre l’analyse des menaces et la défense technique : Zero Trust, pare-feu, VPN, ZTNA, cryptographie, terminaux et Cloud.", lien: null },
    { titre: "Formation Web, IA & Robotique", organisme: "YaneCode Academy", date: "Été 2025", validite: "36 heures", image: "assets/img/cert-yanecode.webp", alt: "Certificat de formation YaneCode Academy, été 2025",
      imagesSupplementaires: [{ image: "assets/img/formation-yanecode.jpg", alt: "Photo de groupe de la formation d’été 2025 à YaneCode Academy" }],
      texte: "Développement web (blog, portfolio HTML/CSS), IA (classification d’images, chatbot, agent n8n, système de recommandation en Python) et Smart Home sur Arduino.",
      lien: { texte: "Vérifier le certificat", url: "https://www.yanecode.net/p/formete25-yc-6s50.html" } },
    { titre: "Devenez un Expert en Réseaux Informatique", organisme: "Udemy · Karim Addi", date: "20 juillet 2024", validite: "20,5 heures", image: "assets/img/cert-udemy.webp", alt: "Certificat Udemy Devenez un Expert en Réseaux Informatique",
      texte: "Théorie et laboratoires virtuels (Packet Tracer, Wireshark, Cisco IOS) : modèles OSI/TCP-IP, VLAN, IPv4/IPv6 et sous-réseaux, ARP, ICMP, dépannage et sécurité réseau.",
      lien: { texte: "Vérifier le certificat", url: "https://www.udemy.com/certificate/UC-91e4f97e-3bfb-43eb-8579-513a7f0041c4/" } }
  ],

  /* Compétences : icone = SVG intégré de assets/icons/ ; logo = image locale.
     Les pictogrammes et monogrammes de remplacement sont identifiés dans le README. */
  competences: [
    { categorie: "Réseaux et sécurité", outils: [
        { nom: "Fortinet (FortiGate)", icone: "fortinet", couleur: "#EE3124" },
        { nom: "Cisco IOS", icone: "cisco", couleur: "#049FD9" },
        { nom: "Packet Tracer", logo: "assets/icons/packet-tracer.jpg" },
        { nom: "Wireshark", icone: "wireshark", couleur: "#1679A7" },
        { nom: "EVE-NG", logo: "assets/icons/eve-ng.png", large: true },
        { nom: "Arista EOS", logo: "assets/icons/arista-official.png", large: true } ],
      notions: ["VPN/IPsec", "ACL", "AES-GCM", "RSA", "OSPF", "BGP", "RIP", "MPLS", "VLAN", "VTP", "STP", "IPv4/IPv6", "NAT", "DNS", "DHCP"] },
    { categorie: "Télécommunications", presentation: "cartes", outils: [
        { nom: "Architectures 2G à 5G", logo: "assets/icons/mobile-network.svg", neutre: true },
        { nom: "Traitement du signal", logo: "assets/icons/signal.svg", neutre: true } ], notions: [] },
    { categorie: "Systèmes", outils: [
        { nom: "Linux", icone: "linux", couleur: "#FCC624" },
        { nom: "Windows", icone: "windows", couleur: "#0078D4" },
        { nom: "Administration Windows Server 2022", icone: "windows", couleur: "#0078D4", largeCarte: true },
        { nom: "Active Directory", logo: "assets/icons/active-directory.svg", neutre: true } ], notions: [] },
    { categorie: "Développement", outils: [
        { nom: "Python", icone: "python", couleur: "#3776AB" }, { nom: "Java", icone: "openjdk", couleur: "#ED8B00" }, { nom: "Bash", icone: "gnubash", couleur: "#4EAA25" },
        { nom: "SQL", logo: "assets/icons/sql.svg", neutre: true }, { nom: "Streamlit", icone: "streamlit", couleur: "#FF4B4B" }, { nom: "scikit-learn", icone: "scikitlearn", couleur: "#F7931E" },
        { nom: "pandas", icone: "pandas", couleur: "#7B5CE0" }, { nom: "NumPy", icone: "numpy", couleur: "#4D77CF" }, { nom: "OpenCV", icone: "opencv", couleur: "#5C3EE8" }, { nom: "TensorFlow", icone: "tensorflow", couleur: "#FF6F00" } ], notions: [] },
    { categorie: "Outils d'automatisation", outils: [
        { nom: "Ansible", icone: "ansible", couleur: "#EE0000" }, { nom: "Jinja2", icone: "jinja", couleur: "#B41717" },
        { nom: "NetBox", logo: "assets/icons/netbox.svg" }, { nom: "Batfish", logo: "assets/icons/batfish-official.svg" },
        { nom: "pyATS", logo: "assets/icons/pyats.png", large: true }, { nom: "Netmiko", logo: "assets/icons/netmiko.png", large: true },
        { nom: "NAPALM", logo: "assets/icons/napalm-official.png" }, { nom: "Git", icone: "git", couleur: "#F05032" },
        { nom: "GitHub Actions", icone: "githubactions", couleur: "#2088FF" }, { nom: "Docker", icone: "docker", couleur: "#2496ED" }, { nom: "AWS (débutant)", icone: "aws", couleur: "#FF9900" } ], notions: [] },
    { categorie: "Gestion de projet", presentation: "cartes", outils: [
        { nom: "Agile", logo: "assets/icons/agile.svg", neutre: true },
        { nom: "Scrum", logo: "assets/icons/scrum.svg", neutre: true },
        { nom: "Diagramme de Gantt", logo: "assets/icons/gantt.svg", neutre: true } ], notions: [] }
  ],

  interets: [
    { nom: "Échecs", icone: "chessdotcom", utilisateur: "197macgyver", url: "https://www.chess.com/member/197macgyver" },
    { nom: "Calisthenics", icone: "dumbbell" }, { nom: "Lecture", icone: "book-open" },
    { nom: "E-learning", icone: "graduation-cap" }, { nom: "Films, séries & animes", icone: "clapperboard" }
  ],

  contact: {
    email: "h.hamadimouhammad@gmail.com",
    /* Clé gratuite à créer sur https://web3forms.com (voir README). Sans clé, le formulaire ouvre votre messagerie. */
    web3formsKey: "",
    liens: [
      { nom: "LinkedIn", url: "https://www.linkedin.com/in/mouhammad-h-h", icone: "linkedin" },
      { nom: "GitHub", url: "https://github.com/Mouh4x", icone: "github" }
    ]
  }
};
