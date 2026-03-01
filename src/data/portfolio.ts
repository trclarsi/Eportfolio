export const personalInfo = {
  name: "Clarsi Trésor ILOKI",
  title: "Ingénieur Généraliste IA & Big Data",
  email: "tr.clarsi@gmail.com",
  phone: "+212 6251 500 30",
  location: "Casablanca, Maroc",
  photo: "",
  cv: "/files/cv-clarsi-tresor-iloki.pdf",
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
    technologies: ["React", "IA Générative", "RAG", "NLP", "Python", "LangChain"],
    github: "https://github.com/clarsoiloki/real-estate-assistant",
    featured: true,
    image: "",
  },
  {
    id: "cloud-etl-pipeline",
    title: "Pipeline ETL Météorologique Cloud",
    category: "big-data",
    description:
      "Pipeline ETL entièrement automatisé sur GCP (Compute Engine, BigQuery, Cloud Storage) pour la collecte et l'analyse de données météorologiques. Gestion de l'infrastructure via Terraform pour la scalabilité.",
    technologies: ["Python", "Airflow", "Spark", "GCP", "Terraform", "Docker"],
    github: "https://github.com/clarsoiloki/etl-pipeline",
    demo: "https://demo.example.com/etl",
    featured: true,
    image: "",
  },
  {
    id: "refinery-monitoring",
    title: "Système de Monitoring Raffinerie",
    category: "big-data",
    description:
      "Architecture complète de monitoring temps réel pour une raffinerie de pétrole : collecte de données IoT via MQTT et Apache Kafka, traitement avec Spark Streaming, stockage sur TimescaleDB et visualisation Grafana.",
    technologies: ["Python", "Kafka", "Spark Streaming", "TimescaleDB", "Grafana", "MQTT", "IoT"],
    github: "https://github.com/clarsoiloki/monitoring",
    featured: true,
    image: "",
  },
  {
    id: "brain-tumor-classification",
    title: "Classification de Tumeurs Cérébrales",
    category: "ai-ml",
    description:
      "Modèle CNN (Réseaux de Neurones Convolutifs) pour la classification d'images IRM en 4 catégories : Gliome, Méningiome, Pituitaire et Sain. Entraînement avec TensorFlow/Keras.",
    technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Computer Vision", "Deep Learning"],
    github: "https://github.com/clarsoiloki/brain-tumor",
    featured: true,
    image: "",
  },
  {
    id: "vehicle-detection",
    title: "Détection de Véhicules avec YOLO",
    category: "ai-ml",
    description:
      "Système de détection de véhicules en temps réel utilisant YOLOv8. Détection multi-classes : Ambulance, Bus, Voiture, Moto, Camion dans des images et vidéos.",
    technologies: ["Python", "YOLO", "PyTorch", "OpenCV", "Computer Vision"],
    github: "https://github.com/clarsoiloki/vehicle-detection",
    image: "",
  },
  {
    id: "marketing-analysis",
    title: "Analyse de Données Marketing - VertiGo",
    category: "data",
    description:
      "Analyse statistique des données marketing pour l'entreprise VertiGo. Tests d'hypothèses (Chi-2, ANOVA), analyse de corrélation (Pearson, Spearman) pour optimiser les stratégies marketing.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Statistiques"],
    github: "https://github.com/clarsoiloki/marketing-analysis",
    image: "",
  },
  {
    id: "zando-ecommerce",
    title: "Zando - Plateforme E-commerce",
    category: "web",
    description:
      "Plateforme e-commerce fullstack avec API REST robuste (Django/DRF) et frontend React. Architecture modulaire avec gestion utilisateurs, produits, panier et paiements. Conteneurisation Docker, tests unitaires Pytest.",
    technologies: ["Django", "DRF", "React", "PostgreSQL", "Docker", "Pytest", "Tailwind CSS"],
    github: "https://github.com/trclarsi/Zando_",
    featured: true,
    image: "",
  },
  {
    id: "medical-drone",
    title: "Drone de Transport Médical",
    category: "embedded",
    description:
      "Conception et réalisation d'un drone quadrotor pour la livraison de médicaments dans des zones difficiles d'accès. Modélisation FreeCAD, impression 3D, configuration Betaflight, gestion de projet (Gantt, KPI).",
    technologies: ["FreeCAD", "Arduino", "Betaflight", "3D Printing", "Electronique", "Gestion de Projet"],
    github: "https://github.com/clarsoiloki/drone",
    image: "",
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
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
