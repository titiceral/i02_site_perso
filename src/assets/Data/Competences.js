// dossier de compétence excell vers json https://beautifytools.com/excel-to-json-converter.php
export var competencies = [
  {
    début: "01,07,2020",
    fin: "en cours",
    mois: "10",
    languages:
      "VueJs, Buefy, Leaflet, C#, .net Core, EF,PostgreSQL, PostGis,Visual Studio 2019, Git, Azure DevOps Services, SGBD Sql,",
    employeur: "freelance",
    client: "confidentiel",
    poste: "chef de projet-dev",
    description:
      "projet en cours (confidentiel). Forfait à mon compte pour un client dans le domaine de la finance. Récupération de données « Big Data » pour une exploitation par un moteur de calcul et une restitution sur un portail web. ",
    type_project: "Web/Api,R&D/Algorithmie",
  },
  {
    début: "01,04,2020",
    fin: "01,05,020",
    mois: "2",
    languages: "VueJs,",
    employeur: "freelance",
    client: "personnel",
    poste: "Autoformation-projet Interne",
    description: "suivi du cours Vue Mastery et projet personnel",
    details:
      "VueMastery : (parcours debutant, intermediaire, expert (50%)).\r\nRéalisation du site personnel emmanuel.trivis.fr (echarts, animation, buefy)",
    domains: "web,",
    undefined: "frontEnd",
    type_project: "Web/Api",
  },
  {
    début: "01,03,2020",
    fin: "01,04,2020",
    mois: "1",
    languages: "babylonJS, typescript",
    employeur: "freelance",
    client: "personnel",
    poste: "chef de projet-dev",
    description:
      "(personnel) réalisation d’un POC d’un configurateur d’objet 3D en WebGL (post linkedin)",
    domains: "web,",
    undefined: "frontEnd",
    type_project: "Web/Api",
  },
  {
    début: "01,09,2017",
    fin: "01,09,2019",
    mois: "4",
    languages:
      "SQLServer, C#, TSQL, SSIS, Pentaho, SSAS, Asp Net, VS, Gestion de projets. Gestion d'équipe, SGBD Sql,",
    employeur: "calasys",
    client: "Grand Chambéry, IDEX Energie et autres communautés de communes",
    poste: "Chef de projets, Intégrateur de Solution web",
    description:
      "Réalisation et Gestion d'évolutions et de mises en service du produit \"Diagbox\" de Calasys : Solution logicielle dans l'eau et le bâtiment permettant d'étudier de la donnée automate",
    details:
      " Spécification, intégration, aide aux développements des différentes applications de la solution :\r\nü Récupération de données automates (SQL et protocole de communication)\r\nü Stockage et calcul sur la donnée (Sql, moteur de calcul python)\r\nü Exploitation par portail web (asp Net)\r\nü Exploitation par cube Olap (ETL, SSAS, bilans).\r\n- Spécification, intégration, aide aux développements des différentes applications de la solution :\r\nü Récupération de données automates (SQL et protocole de communication)\r\nü Stockage et calcul sur la donnée (Sql, moteur de calcul python)\r\nü Exploitation par portail web (asp Net)\r\nü Exploitation par cube Olap (ETL, SSAS, bilans).\r\n",
    domains:
      "Informatique industrielle, automatisme, solution logicielle, Business intelligent",
    undefined: "fullstack, gestion,",
    type_project: "Web/Api,BI,TMA",
  },
  {
    début: "01,01,2016",
    fin: "01,09,2019",
    mois: "10",
    languages: "Bi, SQL, Pentaho (PDI), Asp NET, SSIS, AWS,C#,  SGBD Sql,",
    employeur: "calasys",
    client: "Veolia IS&T",
    poste: "Chef de projet, Ingénieur Etudes et Développement",
    description:
      "Réalisation d’une solution de collecte massive de données automates",
    details:
      "- Le projet s'inscrit dans un projet global nommé H360-Hypervision. H360 intègre dans une base BIGDATA (plusieurs To) l'ensemble des relevés temps réel des milliers de capteurs répartis sur le terrain (ex : PH de l'eau dans la cuve X de la station Y, débit de sortie pompe X, etc.)\r\n- Gestion et documentation du projet avec Veolia\r\n- Spécification et développement de l’envoi des différentes données terrains de Veolia vers la base Bigdata.\r\n- Conception et réalisation de la solution basée sur un traitement ETL, des connecteurs SQL et un portail web de configuration et supervision.\r\n- Mise en \"Run\" du projet.\r\n- Passation aux équipes Ops dans la cadre de la TMA.\r\n",
    domains:
      "Informatique industrielle, automatisme, solution logicielle, Business intelligent, Grand Compte, ETL, Sécurité informatique",
    type_project: "Web/Api,BI,TMA",
  },
  {
    début: "01,04,2019",
    fin: "01,10,2019",
    mois: "6",
    languages: "C#, Asp.Net, MongoDB, API REST, SGBD NoSql,",
    employeur: "calasys",
    client: "Grand Compte dans la fourniture d’eau (confidentiel)",
    poste: "Chef de projets, Référent Technique",
    description:
      "Réalisation de l’automatisation et l’optimisation du pompage d'un champ captant dans le but d'économies de coups, de préservation du patrimoine et de garantie de la qualité de l'eau.",
    details:
      "- A partir de besoins fonctionnels, création d’une unité de calcul d'optimisation, un portail web de configuration et supervision et différentes couches de communication (SOAP et REST).\r\n- Chef de projet,Scrum master, pilotage d'une équipe de 4 personnes.\r\n- Proposition de l'architecture logicielle et infrastructure technique.\r\n",
    domains:
      "Informatique industrielle, solution logicielle web, Gestion de projet",
    type_project: "Web/Api, R&D/Algorithmie",
  },
  {
    début: "01,03,2019",
    fin: "01,06,2019",
    mois: "4",
    languages: "C#, Api Rest, MQTT, ASP.NET, SQLServer, SGBD Sql,",
    employeur: "calasys",
    client: "calasys",
    poste: "Architecte logiciel, Ingénieur Développement",
    description:
      "Réalisation d’une solution de communication TCP,IP pour la remontée de données par objet IoT (Ercogener, Schneider, Primayer).",
    details:
      "- Spécification architecture de la solution.\r\n- Développement d’une solution modulable suivant les protocoles d'échanges : MQTT, HTTP Rest et les modes d'authentifications.\r\n- Intégration et développement dans la solution \"Diagbox\" existante (interopérabilité avec le portail web et base de données existants)\r\n- Documentation et mise en service.\r\n",
    domains: "Informatique industrielle, solution logicielle web, IoT",
    type_project: "Web/Api, Iot",
  },
  {
    début: "01,09,2015",
    fin: "01,09,2017",
    mois: "24",
    languages:
      "Swift, iOS, Bi, SQLServer, SQLlite, SSIS, SSAS (cube olap), Asp .Net, C#, Nhibernate,  SGBD Sql,",
    employeur: "Trepia ",
    client: "Nuvia Protection ",
    poste: "Ingénieur d’Etudes et Développement puis responsable projet",
    description:
      "Conception et développement d’une solution logicielle (mobile, web et Bi) de création devis et gestion de facturation dans le domaine de maintenance Nucléaire.",
    details:
      "- Développement et spécification d'une application pour iPad (swift) et serveur (ASP mvc) permettant de recueillir des informations sur des travaux de maintenance en centrale nucléaire et d'en générer des devis.\r\n- Spécification, conception et développement d'un portail web (ASP MVC) professionnel permettant de gérer l'administratif du contrat de maintenance (facturation, commandes, récolte des données contractuelles) \r\n- Conception développement d'une solution Bi permettant d'exploiter les données recueillies par les applications Ipad et le portail web. \r\n- Spécification du besoin et aide à la rédaction du CDC avec le client.\r\n- Responsable de la mise en service et du projet.\r\n- Architecte de la solution.\r\n- Produit mis en production sur 8 sites depuis 2017. \r\n- Réalisation de la TMA de 2017 à 2019 avant la passation à l'équipe ops Calasys fin 2019.\r\n",
    domains: "Nucléaire, Bilan, Echange client, architecture technique",
    type_project: "Web/Api,BI, Iot, TMA, Mobile",
  },
  {
    début: "01,01,2015",
    fin: "01,08,2015",
    mois: "8",
    languages: "Squish, Python, C++, EA, UML, Winforms,",
    employeur: "Trepia ",
    client: "Fresenius Kabi",
    poste: "Ingénieur d’Etudes et Développement",
    description:
      "Tests d’intégration fonctionnelles et tests unitaires d’un logiciel de maintenance de pompe à perfusion.",
    details:
      "Automatisation des tests de l’IHM du logiciel de maintenance des pompes à perfusion\r\n- Réalisation avec le logicielle Squish de la simulation de l’interaction utilisateur sur les composants graphique de l’IHM,\r\n- Automatisation de scénarios de simulation à l’aide de scripts Python,\r\n- Tests unitaires sur les données utilisées par l’IHM,\r\n- Développement d’un module de simulation de réponses de pompe à l’aide d’entreprise architecte et de machine d’état.\r\n",
    domains:
      "Médical, Medical Device (Directive CE 93,42), cycle-V, Machine d’état",
    type_project: "Logiciel",
  },
  {
    début: "01,07,2014",
    fin: "01,12,2014",
    mois: "6",
    languages: "NodeJS, JS, openstreet map ",
    employeur: "IPSIS",
    client: "ENTPE – LICIT – Assistance technique",
    poste: "Ingénieur d’Etudes et de développement",
    description:
      "Développement d'une application Client,Serveur, en node.js et javascript, de type jeu sérieux d'une simulation de trafic routier.",
    details:
      "L’application permet de modifier en temps réel l'itinéraire d'un groupe de véhicules et ainsi obtenir des résultats de comportement de conduite.\r\n\r\n• Représentation cartographique des déplacements\r\n• Interaction de changement d’itinéraires.\r\n• Simulation de la distance de visualisation du conducteur\r\nü Manipulation openstreet map, JS node \r\n",
    domains: "Laboratoire recherche, Circulation, gestion des fluides, IHM.",
    type_project: "Logiciel",
  },
  {
    début: "01,04,2014",
    fin: "01,07,2014",
    mois: "3",
    languages: "C#, Winforms, Oracle, SVN, GMap.NET,  SGBD Sql,",
    employeur: "IPSIS",
    client: "CEA - Forfait",
    poste: "Ingénieur d’Etudes et de développement",
    description:
      "Développement d’une application logicielle d’extraction et d’exploitation de données acquises par des capteurs de radioactivité",
    details:
      "• Construction de l’IHM depuis un CDC et des documents de spécification et de conception.\r\nü Construction d’une requête d’extraction de données oracle\r\nü IHM permettant la définition les paramètres de la requête\r\nü IHM pour la représentation, sous forme de spectre, des données acquises\r\nü IHM pour la représentation, sous forme cartographique, du lieu des données acquises\r\n\r\n• Participation à la phase de recette\r\nü Rédaction de la documentation\r\nü Rédaction du dossier de test et validation\r\n",
    domains: "Nucléaire, sécurité",
    type_project: "Logiciel",
  },
  {
    début: "01,04,2014",
    fin: "01,05,2014",
    mois: "1",
    languages: "C#, WPF, MySQL,  SGBD Sql,",
    employeur: "IPSIS",
    client: "Ansaldo – IPSIS - Forfait",
    poste: "Ingénieur d’Etudes et Développement",
    description:
      "Développement d’une application logicielle d’exploitation de base de données, permettant de faire la correspondance entre données.",
    details:
      "• Spécification du besoin, spécification et conception logicielle.\r\n• Spécification et conception de la base de données.\r\n• Développement de l’application\r\nü Import de données depuis un fichier Excel\r\nü Construction de requête de correspondance\r\nü Export du résultat de la requête sous forme de tableau\r\n\r\n• Recette\r\nü Rédaction des documents des tests, d’installation et d’utilisation\r\nü Tests et validation\r\nü Support et déploiement\r\n",
    domains: "Signalétique ferroviaire, validation",
    type_project: "Logiciel",
  },
  {
    début: "01,02,2014",
    fin: "01,05,2014",
    mois: "2",
    languages: "C, RTRT, documentation,",
    employeur: "IPSIS",
    client: "Zodiac Intertechnique - Forfait",
    poste: "Ingénieur d’Etudes et Validation",
    description:
      "Validation de la phase de « conception détaillée » du cycle en V du logiciel\r\n  d’un système de commande de l’A350.\r\n",
    details:
      "• Correction de la documentation de spécification fonctionnelle du logiciel\r\n• Tests unitaires de validation (vérification du bon déroulement de la fonction et conformité des entrées,sorties)\r\n",
    domains: "Aéronautique, validation.",
    type_project: "Logiciel",
  },
  {
    début: "01,12,2013",
    fin: "01,01,2014",
    mois: "2",
    languages: "C++, PostgreSQL, PostGis, javascript, CSS, SGBD Sql,",
    employeur: "IPSIS",
    client: "IFSTTAR – LICIT - Forfait",
    poste: "Ingénieur d’Etudes et de développement",
    description:
      "Développement d’une application Client,Serveur d’exploitation de données de trafic routier.",
    details:
      "• Développement coté Serveur\r\nü Plug in généraliste de calcul en utilisant les données du réseau (calcul des indices de qualité)\r\nü Découpe des tronçons du réseau en mailles plus petites en base\r\nü Import de données en base depuis un tableur\r\n\r\n• Développement coté Client\r\nü Débogage de l’IHM Web\r\n\r\n• Phase de recette\r\nü Livraison\r\nü Tests et validation\r\nü Documentation (Base de données, installation, documents de test)\r\n",
    domains: "Laboratoire recherche, Circulation, gestion des fluides.",
    type_project: "Web/Api, R&D/Algorithmie",
  },
  {
    début: "04,2013 à 01,2014",
    fin: "04,2012 à 02,2013",
    mois: "17",
    languages: "C++, Qt, XML, XSD,Xerces,",
    employeur: "IPSIS",
    client: "ENTPE – LICIT – Assistance technique",
    poste: "Ingénieur d’Etudes et de développement",
    description:
      "Spécification, Conception et Développement logiciel d'une application permettant de définir un réseau routier à l'aide d'une interface graphique 2D (SymuNet-Symuvia)",
    details:
      "• Représentation cartographique du réseau routier\r\nü Edition et modification des éléments du réseau\r\nü Enregistrement et lecture du réseau depuis un fichier XML\r\nü Validation XSD du fichier d’entré\r\n\r\n• Import de données au format SIG NavStreet de Navteq.\r\n\r\n• Implémentation d’un modèle de circulation mésoscopique pour le moteur de simulation.\r\n",
    domains:
      "Laboratoire recherche, Circulation, gestion des fluides, IHM, ergonomie, SIG.",
    type_project: "Logiciel",
  },
  {
    début: "01,02,2013",
    fin: "01,03,2014",
    mois: "2",
    languages: "C++, Qt,  SGBD Sql,",
    employeur: "IPSIS",
    client: "IFREMER - Forfait",
    poste: "Ingénieur d’Etudes et de développement",
    description:
      "Réalisation et validation avant recette d’une application permettant de modéliser des chaluts.",
    details:
      "• Développement d’un module import,export d’objet par sérialisation.\r\n\r\n• Gestion des évènements « annuler »,« rétablir ».\r\n\r\n• Débogage et Validation avant recette de l’application.\r\n",
    domains: "IHM, ergonomie.",
    type_project: "Logiciel",
  },
  {
    début: "01,01,2011",
    fin: "01,01,2012",
    mois: "12",
    languages:
      "Windows , Visual Studio 2005, Source Safe, Tortoise SVN, Virtools 5, Virtools SDK, C++, Langage OpenCL , Langage OpenGL,",
    employeur: "optis",
    client: "Optis – Eurocopter - CRVM",
    poste: "Ingénieur d’Etudes et de développement",
    description:
      "Réalisation d’une plateforme de prototypage virtuel utilisant un rendu graphique offrant une très haute fidélité visuelle et physique en temps réel.",
    details:
      "Projet pôle de compétitivité VIRTU’ART. \r\nLe projet utilise le moteur de rendu développé en interne qui doit être intégré dans le logiciel de création de scènes interactives Virtools. Le but étant la validation virtuelle ergonomique et esthétique d’hélicoptères.\r\n \r\n• Développement\r\nü Intégration du moteur de rendu d’Optis dans Virtools.\r\nü Création d’un moteur de rendu Opengl.\r\nü Intégration du moteur de rendu Opengl dans Virtools.\r\nü Encadrement d’un stage sur la simulation du comportement de l’œil humain lors du processus d’adaptation.\r\nü Support durant la phase de déploiement cher les partenaires (CRVM, Eurocopter).\r\n\r\n• Tests\r\nü Support durant la phase de déploiement cher les partenaires (CRVM, Eurocopter).\r\n",
    domains:
      "Laboratoire recherche, réalité virtuelle, synthèse d’image, simulation, intégration",
    type_project: "RR&D/Algorithmie",
  },
  {
    début: "01,11,2018",
    fin: "01,12,2010",
    mois: "25",
    languages:
      "Windows , Visual Studio 2005, Source Safe, Tortoise SVN , Virtools 5, Virtools SDK, C++, Langage Shaders (HLSL,Cgfx), Langage CUDA,",
    employeur: "optis",
    client: "Optis – DGA (CSTB) – ECA – Clarté – Genesis (13)",
    poste: "Ingénieur d’Etudes et de développement",
    description:
      " Réalisation de simulateurs de navigation maritime. Le simulateur est décliné en 2 versions : une version dédiée à l’entrainement des marins, l’autre développant un aspect prototypage virtuel,ergonomique.",
    details:
      "Projet pôle de compétitivité MARVEST.\r\nLe simulateur doit se montrer innovant grâce à la qualité de son rendu visuel et acoustique. Il doit être affiché dans un environnement virtuel de type CAVE ainsi que dans un système reproduisant physiquement la passerelle de commandement dont les consoles de navigation.\r\n\r\n  \r\n• Développement\r\nü Mise en place de l’environnement virtuel.\r\nü Maintenance et amélioration du moteur de rendu d’Optis.\r\nü Réalisation de la mer et des phénomènes météos.\r\nü Intégration du moteur de rendu dans l’environnement de simulation du partenaire (ECA).\r\nü Support durant la phase de déploiement chez les différents partenaires (ECA, Genesis).\r\nü Déclinaison en simulateur de conduite automobile et aéronautique.\r\n\r\n• Tests\r\nü Contribution aux phases de test et de validation.\r\nü Support et gestion de projet avec les différents partenaires.\r\n",
    domains:
      "Laboratoire recherche, réalité virtuelle, synthèse d’image, simulation, intégration, calcul scientifique",
    type_project: "R&D/Algorithmie",
  },
  {
    début: "01,02,2008",
    fin: "01,07,2008",
    mois: "6",
    languages:
      "Windows , Visual Studio 2005, ClearCase, C++, OpenGL , VRML , X3D",
    employeur: "Société Technicolor (ex Thomson)",
    client: "Société Technicolor (ex Thomson)",
    poste: "Apprenti Ingénieur Recherche et développement",
    description:
      "Travail en laboratoire de Recherche comme stagiaire.\r\nTravail sur une plateforme de rendu basée sur la norme X3D,VRML.\r\n",
    details:
      "• Développement\r\nü Amélioration de la plateforme par ajout de fonctionnalités.\r\nü Ajout de fonctionnalités graphiques OpenGL.\r\nü Ajout du support d’écran 3D Relief Phillips via un guide utilisateur.\r\nü Ajout du support d’écran 3D NewSight via reverse engineering.\r\nü Documentation,Spécification des fonctionnalités créées.\r\n\r\n• Tests\r\nü Mise en place de tests unitaires des fonctionnalités créées.\r\n",
    domains: "Laboratoire recherche, synthèse d’image, intégration.",
    type_project: "R&D/Algorithmie",
  },
  {
    début: "01,09,2006",
    fin: "01,02,2007",
    mois: "6",
    languages:
      "Windows , Visual Studio 2005, team foundation server, Langage Sql server, Langage VB .net , Framework .NET 2.0, winform,  SGBD Sql,",
    employeur: "Société Odyssée Ingénierie",
    client: "Société Odyssée Ingénierie",
    poste: "Apprenti Analyste programmeur",
    description:
      "Stage en entreprise.\r\nTravail sur un progiciel de gestion électronique de documents. \r\n",
    details:
      "• Développement\r\nü Réalisation de l’application logicielle de gestion des documents images issus de numérisation.\r\nü Gestion de l’affichage,numérisation,impression des images.\r\nü Lecture de codes-barres.\r\nü Indexation des documents.\r\no Reconnaissance de texte,\r\no Détection de mots clés,\r\no Insertion dans une base de données.\r\nü Gestion de rapports d’erreurs (gestion pile, screen shot)\r\n",
    domains: "GED, progiciel, IHM",
    type_project: "Logiciel",
  },
];
