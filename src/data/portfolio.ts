export const personalInfo = {
  name: "Clarsi Trésor ILOKI",
  title: "Ingénieur Généraliste IA & Big Data",
  email: "tr.clarsi@gmail.com",
  phone: "+212 6251 500 30",
  location: "Casablanca, Maroc",
  photo: "/images/photott.webp",
  cv: "/files/CV_Clarsi_Tresor.pdf",
  linkedin: "https://linkedin.com/in/clarsoiloki",
  github: "https://github.com/clarsoiloki",
  description:
    "Ingénieur généraliste passionné par l'IA et le Big Data. Spécialisé en Machine Learning, Deep Learning, Computer Vision et architectures de données massives. Polyvalent : Hardware (Drone), IA (Vision), Systèmes (Big Data) et Rigueur (Stats).",
};

export const experiences = [
  {
    id: "smii-2025",
    company: "Société Marocaine d'Ingénierie Immobilière",
    role: "Stagiaire | ML Developer",
    period: "Mai - Septembre 2025",
    description:
      "Conception et développement d'un pipeline complet d'analyse prédictive pour anticiper les délais de projets de construction. Évaluation et optimisation de modèles ML visant à améliorer la précision des prédictions.",
    technologies: ["Python", "Scikit-learn", "Pandas", "FastAPI", "Machine Learning"],
    highlights: ["Prédiction des délais avec 85% de précision", "Intégration des KPIs (Accuracy, F1-score) dans les processus décisionnels"],
  },
  {
    id: "texefa-2024",
    company: "TEXEFA",
    role: "Stagiaire | Support Chef de Projet",
    period: "Juin - Juillet 2024",
    description:
      "Contribution à la gestion de projet Agile (Scrum) pour le développement d'une plateforme web éducative. Développement du frontend en React pour une interface utilisateur intuitive et performante.",
    technologies: ["React", "TypeScript", "Figma", "Agile/Scrum"],
    highlights: ["Gestion de projet Agile", "Spécifications fonctionnelles complètes", "Interface utilisateur responsive"],
  },
  {
    id: "longometal-2023",
    company: "LONGOMETAL ARMATURES",
    role: "Stagiaire | Technicien Maintenance",
    period: "Juillet - Août 2023",
    description:
      "Analyse du processus de production et conception d'un système d'aide à la décision (AMDEC) pour la maintenance préventive de la machine SHEAR LINE 500.",
    technologies: ["Analyse de données", "Excel", "CAO", "AMDEC/FMEA"],
    highlights: ["Rapport technique détaillé", "Identification d'axes d'optimisation", "Amélioration des processus de production"],
  },
];

export const projects = [
  {
    id: "real-estate-ai-assistant",
    title: "Assistant Intelligent Immobilier (RAG)",
    category: "ai-ml",
    description:
      "Assistant intelligent pour l'immobilier intégrant une IA générative (RAG) et NLP pour automatiser la création d'études de faisabilité et de rapports réglementaires. Interface utilisateur en React/TailwindCSS permettant l'interaction avec le modèle d'IA.",
    problem: "Les études de faisabilité et rapports réglementaires nécessitent beaucoup de temps et de ressources humaines. Le processus est répétitif et sujet aux erreurs.",
    solution: "Développement d'un assistant IA utilisant RAG (Retrieval-Augmented Generation) pour récupérer des informations pertinentes et générer automatiquement des documents personnalisés.",
    challenges: [
      "Intégration de documents PDF et Word dans une base vectorielle",
      "Optimisation des prompts pour des réponses précises",
      "Gestion des token limits pour les longs documents",
    ],
    results: [
      "Réduction de 70% du temps de création des rapports",
      "95% de précision sur les informations extraites",
      "Automatisation complète du workflow de génération",
    ],
    leconsApprises: [
      "Importance de la qualité des données d'entraînement pour les IA génératives",
      "Tester les prompts avec différents cas limites avant production",
      "Documenter les sources utilisées par le RAG pour la traçabilité",
    ],
    technologies: ["React", "IA Générative", "RAG", "NLP", "Python", "LangChain"],
    github: "https://github.com/clarsoiloki/real-estate-assistant",
    featured: true,
    image: "/images/projects/etl/screenshot1.png",
  },
  {
    id: "cloud-etl-pipeline",
    title: "Pipeline ETL Météorologique Cloud",
    category: "big-data",
    description:
      "Pipeline ETL entièrement automatisé sur GCP (Compute Engine, BigQuery, Cloud Storage) pour la collecte et l'analyse de données météorologiques. Gestion de l'infrastructure via Terraform pour la scalabilité.",
    problem: "Les données météorologiques arrives de multiples sources avec des formats différents. Besoin d'uniformisation et d'analyse en temps réel.",
    solution: "Architecture serverless sur GCP avec Airflow pour l'orchestration, Spark pour le traitement et BigQuery pour l'analyse.",
    challenges: [
      "Gestion des échecs de collecte de données",
      "Optimisation des coûts cloud",
      "Traitement de données manquantes ou aberrantes",
    ],
    results: [
      "Traitement de 10M+ de lignes par jour",
      "Réduction de 50% des coûts d'infrastructure",
      "Disponibilité des analyses à J+1 au lieu de J+3",
    ],
    leconsApprises: [
      "L'infrastructure-as-code est essentielle pour la reproductibilité",
      "Anticiper les coûts cloud dès la conception de l'architecture",
      "Mettre en place des alertes tôt pour détecter les anomalies",
    ],
    technologies: ["Python", "Airflow", "Spark", "GCP", "Terraform", "Docker"],
    github: "https://github.com/clarsoiloki/etl-pipeline",
    demo: "https://demo.example.com/etl",
    featured: true,
    image: "/images/projects/etl/screenshot1.png",
  },
  {
    id: "refinery-monitoring",
    title: "Système de Monitoring Raffinerie",
    category: "big-data",
    description:
      "Architecture complète de monitoring temps réel pour une raffinerie de pétrole : collecte de données IoT via MQTT et Apache Kafka, traitement avec Spark Streaming, stockage sur TimescaleDB et visualisation Grafana.",
    problem: "Aucun visibilité en temps réel sur les équipements de la raffinerie. Les pannes étaient détectées trop tard, causant des arrêts de production coûteux.",
    solution: "Architecture IoT temps réel avec Kafka pour la collecte, Spark Streaming pour le traitement et Grafana pour la visualisation des KPIs.",
    challenges: [
      "Ingestion de données à haute fréquence (1000 msg/sec)",
      "Gestion de la latence réseau sur site industriel",
      "Détection d'anomalies en temps réel",
    ],
    results: [
      "Réduction de 40% des temps d'arrêt non planifiés",
      "Détection de pannes en moins de 5 minutes",
      "Dashboard temps réel avec 50+ métriques",
    ],
    leconsApprises: [
      "Travailler directement avec les équipes opérationnelles apporte des insights précieux",
      "Les architectures temps réel nécessitent une attention particulière à la latence",
      "La visualisation des données est aussi importante que le traitement lui-même",
    ],
    technologies: ["Python", "Kafka", "Spark Streaming", "TimescaleDB", "Grafana", "MQTT", "IoT"],
    github: "https://github.com/clarsoiloki/monitoring",
    featured: true,
    image: "/images/projects/monitoring/architecture.png",
  },
  {
    id: "brain-tumor-classification",
    title: "Classification de Tumeurs Cérébrales",
    category: "ai-ml",
    description:
      "Modèle CNN (Réseaux de Neurones Convolutifs) pour la classification d'images IRM en 4 catégories : Gliome, Méningiome, Pituitaire et Sain. Entraînement avec TensorFlow/Keras.",
    problem: "Le diagnostic des tumeurs cérébrales nécessite une expertise médicale pointue et prend beaucoup de temps. Besoin d'un outil d'aide au diagnostic.",
    solution: "Modèle CNN entraîné sur le dataset BRATS 2020 avec augmentation de données et transfer learning.",
    challenges: [
      "Déséquilibre des classes dans le dataset",
      "Interprétabilité des prédictions",
      "Généralisation sur des images de scanners différents",
    ],
    results: [
      "Accuracy de 94% sur la classification 4 classes",
      "F1-score de 0.91 pour la classe minoritaire",
      "Temps d'inférence inférieur à 100ms",
    ],
    leconsApprises: [
      "Le déséquilibre des classes est un défi majeur en imagerie médicale",
      "L'explicabilité des modèles est cruciale pour la adoption médicale",
      "La validation sur des données externes est indispensable",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Computer Vision", "Deep Learning"],
    github: "https://github.com/clarsoiloki/brain-tumor",
    featured: true,
    image: "/images/projects/brain-tumor/tumor.png",
  },
  {
    id: "vehicle-detection",
    title: "Détection de Véhicules avec YOLO",
    category: "ai-ml",
    description:
      "Système de détection de véhicules en temps réel utilisant YOLOv8. Détection multi-classes : Ambulance, Bus, Voiture, Moto, Camion dans des images et vidéos.",
    problem: "Système de surveillance routière existant trop lent et peu précis. Besoin d'une détection en temps réel pour le comptage et le suivi du trafic.",
    solution: "Fine-tuning de YOLOv8 sur un dataset personnalisé avec augmentation de données spécifique aux conditions routières.",
    challenges: [
      "Détection par faible luminosité",
      "Occlusions partielles des véhicules",
      "Optimisation pour le déploiement en bord de route",
    ],
    results: [
      "mAP@0.5 de 89% sur 5 classes",
      "30 FPS en运行 sur GPU边缘",
      "Déploiement sur Raspberry Pi 4",
    ],
    leconsApprises: [
      "L'augmentation de données est cruciale pour les conditions difficiles",
      "Le deployment edge nécessite des modèles légers mais précis",
      "Le compromis vitesse/précision dépend du cas d'usage",
    ],
    technologies: ["Python", "YOLO", "PyTorch", "OpenCV", "Computer Vision"],
    github: "https://github.com/clarsoiloki/vehicle-detection",
    image: "/images/projects/vehicle-detection/output entrainement.png",
  },
  {
    id: "marketing-analysis",
    title: "Analyse de Données Marketing - VertiGo",
    category: "data",
    description:
      "Analyse statistique des données marketing pour l'entreprise VertiGo. Tests d'hypothèses (Chi-2, ANOVA), analyse de corrélation (Pearson, Spearman) pour optimiser les stratégies marketing.",
    problem: "VertiGo disposait de nombreuses données clients mais n'arrivait pas à identifier les facteurs clés de conversion. Décisions marketing basées sur l'intuition.",
    solution: "Analyse statistique complète avec tests d'hypothèses et modélisation pour identifier les variables impactant la conversion.",
    challenges: [
      "Nettoyage de données incomplètes ou incohérentes",
      "Choix des variables pertinentes",
      "Interprétation des résultats pour des non-techniques",
    ],
    results: [
      "Identification de 3 facteurs clés de conversion",
      "Augmentation de 25% du taux de conversion",
      "Dashboard de segmentation client",
    ],
    leconsApprises: [
      "80% du travail d'analyse est dans le nettoyage des données",
      "La visualisation simplifie la communication avec les parties prenantes",
      "Valider les hypothèses avec des tests statistiques rigoureux",
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Statistiques"],
    github: "https://github.com/clarsoiloki/marketing-analysis",
    image: "/images/projects/marketing/data-marketing-1024x512.png",
  },
  {
    id: "zando-ecommerce",
    title: "Zando - Plateforme E-commerce",
    category: "web",
    description:
      "Plateforme e-commerce fullstack avec API REST robuste (Django/DRF) et frontend React. Architecture modulaire avec gestion utilisateurs, produits, panier et paiements. Conteneurisation Docker, tests unitaires Pytest.",
    problem: "Zando avait besoin d'une plateforme e-commerce moderne, évolutive et performante pour remplacer leur solution vieillissante.",
    solution: "Architecture microservices avec Django REST API et React, déployée via Docker Compose.",
    challenges: [
      "Gestion des paiements sécurisés",
      "Optimisation des performances front-end",
      "Gestion du stock en temps réel",
    ],
    results: [
      "Temps de chargement réduit de 60%",
      "Support de 1000+ utilisateurs simultanés",
      "99.9% de uptime en production",
    ],
    leconsApprises: [
      "Les tests unitaires font la différence en production",
      "Docker Compose est idéal pour le développement mais pas pour la prod",
      "Séparer les concerns dès le départ facilite la maintenance",
    ],
    technologies: ["Django", "DRF", "React", "PostgreSQL", "Docker", "Pytest", "Tailwind CSS"],
    github: "https://github.com/trclarsi/Zando_",
    featured: true,
    image: "/images/projects/marketing/Screenshot 2025-10-27 103447.png",
  },
  {
    id: "medical-drone",
    title: "Drone de Transport Médical",
    category: "embedded",
    description:
      "Conception et réalisation d'un drone quadrotor pour la livraison de médicaments dans des zones difficiles d'accès. Modélisation FreeCAD, impression 3D, configuration Betaflight, gestion de projet (Gantt, KPI).",
    problem: "Les zones rurales au Sénégal ont un accès limité aux médicaments essentiels. La livraison par route prend trop de temps en cas d'urgence.",
    solution: "Conception d'un drone de livraison médicale autonome avec système de largage et suivi GPS.",
    challenges: [
      "Autonomie de vol suffisante (15km)",
      "Conditions météorologiques variables",
      "Réglementation aérienne Sénégalaise",
    ],
    results: [
      "Prototype fonctionnel avec 25min d'autonomie",
      "Capacité de charge 2kg",
      "Système de largage automatique validé",
    ],
    leconsApprises: [
      "La gestion de projet est aussi importante que la technique",
      "Les contraintes réglementaires doivent être intégrées dès la conception",
      "Le travail interdisciplinaire apporte des solutions innovantes",
    ],
    technologies: ["FreeCAD", "Arduino", "Betaflight", "3D Printing", "Electronique", "Gestion de Projet"],
    github: "https://github.com/clarsoiloki/drone",
    image: "/images/projects/drone/IMG-20250920-WA0003.jpg",
  },
];

export const skills = {
  technical: [
    { name: "Python", level: 95, category: "programming" },
    { name: "Machine Learning / Deep Learning", level: 90, category: "ai" },
    { name: "Computer Vision", level: 85, category: "ai" },
    { name: "Big Data (Spark, Hadoop, Kafka)", level: 85, category: "bigdata" },
    { name: "TensorFlow / PyTorch", level: 85, category: "ai" },
    { name: "SQL / NoSQL", level: 90, category: "programming" },
    { name: "Django / REST API", level: 80, category: "web" },
    { name: "React / Frontend", level: 75, category: "web" },
    { name: "Docker / DevOps", level: 80, category: "devops" },
    { name: "GCP / Cloud", level: 75, category: "cloud" },
    { name: "Statistiques / Analyse", level: 80, category: "data" },
  ],
  soft: [
    { name: "Résolution de Problèmes", icon: "Lightbulb" },
    { name: "Travail d'Équipe", icon: "Users" },
    { name: "Communication", icon: "MessageSquare" },
    { name: "Adaptabilité", icon: "RefreshCw" },
    { name: "Gestion de Projet", icon: "Kanban" },
    { name: "Pensée Analytique", icon: "BarChart" },
  ],
};

export const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: 2025,
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: 2025,
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    year: 2025,
  },
  {
    name: "Power BI: La modélisation des données",
    issuer: "LinkedIn Learning",
    year: 2024,
  },
];

export const education = [
  {
    degree: "Ingénieur en Systèmes Industriels",
    school: "EIGSI Casablanca",
    period: "2022 - 2026",
    description:
      "Cours: Statistics, Probability, Signal Processing, Embedded Systems, Python for Data Science, Machine Learning, BI & Data Warehouse, SQL & NoSQL",
  },
  {
    degree: "Classes Préparatoires MPSI",
    school: "Excellence Universitaire Africaine (EUA), Dakar",
    period: "2020 - 2022",
    description: "Mathématiques, Physique, Sciences de l'Ingénieur",
  },
];

export const services = [
  {
    title: "Data Engineering",
    description:
      "Conception et développement de pipelines ETL, architectures Big Data et Data Warehouses scalables.",
    icon: "Database",
    deliverables: [
      "Pipeline ETL automatisé",
      "Architecture Big Data",
      "Data Warehouse",
      "Intégration en temps réel",
    ],
  },
  {
    title: "Développement IA",
    description:
      "Implémentation de solutions Machine Learning, Deep Learning et Computer Vision pour vos besoins métier.",
    icon: "Brain",
    deliverables: [
      "Modèles ML/DL personnalisés",
      "Computer Vision",
      "NLP",
      "MLOps",
    ],
  },
  {
    title: "Conseil Technique",
    description:
      "Audit architecture cloud, formation et accompagnement technique pour vos projets data.",
    icon: "Cloud",
    deliverables: [
      "Audit technique",
      "Architecture Cloud",
      "Formation",
      "Rédaction technique",
    ],
  },
  {
    title: "Développement Web",
    description:
      "Développement d'applications web full-stack, APIs REST performantes et solutions personnalisées.",
    icon: "Code",
    deliverables: [
      "Application Web Full Stack",
      "API REST/GraphQL",
      "Optimisation performance",
      "Maintenance",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Clarsi a démontré une excellent capacité d'apprentissage et d'adaptation pendant son stage. Son projet de ML a dépassé nos attentes.",
    name: "Superviseur SMII",
    role: "ML Developer",
    company: "Société Marocaine d'Ingénierie Immobilière",
  },
  {
    id: 2,
    quote:
      "Sérieux et motivé, Clarsi a su rapidement maîtriser les outils nécessaires à son projet.",
    name: "Responsable Stage",
    role: "Support Project Manager",
    company: "TEXEFA",
  },
];

export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Compétences", href: "/skills" },
  { label: "Projets", href: "/projects" },
  { label: "Expérience", href: "/experience" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
