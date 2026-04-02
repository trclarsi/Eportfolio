export const personalInfo = {
  name: 'Clarsi Tresor ILOKI',
  title: 'Ingénieur Généraliste IA & Big Data',
  email: 'tr.clarsi@gmail.com',
  phone: '+212 6251 500 30',
  location: 'Casablanca, Maroc',
  photo: '/images/photott.webp',
  cv: '/files/CV_Clarsi_Tresor.pdf',
  linkedin: 'https://linkedin.com/in/clarsoiloki',
  github: 'https://github.com/clarsoiloki',
  instagram: 'https://www.instagram.com/tresor_in',
  mbti: 'ISTJ',
  vakProfile: 'Auditif',
  drivers: ['Etre fort', 'Etre parfait'],
  description: 'Ingénieur généraliste passionné par l\'IA et le Big Data.',
};

export const experiences = [
  { id: 'smii-2025', company: 'SMII', role: 'Stagiaire ML Developer', period: 'Mai - Septembre 2025', description: 'Conception de pipelines ML pour prédiction de délais.', technologies: ['Python', 'Scikit-learn', 'Pandas'], highlights: ['85% précision'] },
  { id: 'texefa-2024', company: 'TEXEFA', role: 'Support Chef de Projet', period: 'Juin - Juillet 2024', description: 'Gestion de projet Agile pour plateforme éducative.', technologies: ['React', 'TypeScript'], highlights: ['Méthode Agile'] },
  { id: 'longometal-2023', company: 'LONGOMETAL', role: 'Technicien Maintenance', period: 'Juillet 2023', description: 'Analyse AMDEC pour maintenance préventive.', technologies: ['Excel', 'CAO'], highlights: ['Rapport technique'] },
];

export const projects = [
  { id: 'real-estate-ai-assistant', title: 'Assistant Immobilier RAG', category: 'ai-ml', description: 'Assistant IA avec RAG pour études de faisabilité.', problem: 'Temps considérable pour les études.', solution: 'RAG pour génération automatique.', challenges: ['Intégration documents'], results: ['70% temps réduit'], leconsApprises: ['Qualité des données'], technologies: ['React', 'Python', 'LangChain'], github: 'https://github.com/clarsoiloki/real-estate-assistant', featured: true, image: '/images/projects/etl/screenshot1.png' },
  { id: 'cloud-etl-pipeline', title: 'Pipeline ETL Cloud', category: 'big-data', description: 'Pipeline ETL sur GCP pour données météorologiques.', problem: 'Données de multiples sources.', solution: 'Airflow, Spark, BigQuery.', challenges: ['Gestion échecs'], results: ['10M lignes/jour'], leconsApprises: ['IaC essentielle'], technologies: ['Python', 'Airflow', 'Spark', 'GCP'], github: 'https://github.com/clarsoiloki/etl-pipeline', demo: 'https://demo.example.com', featured: true, image: '/images/projects/etl/screenshot1.png' },
  { id: 'refinery-monitoring', title: 'Monitoring Raffinerie', category: 'big-data', description: 'Monitoring IoT temps réel pour raffinerie.', problem: 'Pas de visibilité temps réel.', solution: 'Kafka, Spark Streaming, Grafana.', challenges: ['Haute fréquence'], results: ['40% arrêts réduits'], leconsApprises: ['Équipes opérationnelles'], technologies: ['Python', 'Kafka', 'Grafana'], github: 'https://github.com/clarsoiloki/monitoring', featured: true, image: '/images/projects/monitoring/architecture.png' },
  { id: 'brain-tumor-classification', title: 'Classification Tumeurs', category: 'ai-ml', description: 'CNN pour classification IRM cérébrale.', problem: 'Diagnostic long et complexe.', solution: 'Modèle CNN BRATS 2020.', challenges: ['Déséquilibre classes'], results: ['94% accuracy'], leconsApprises: ['Explicabilité'], technologies: ['Python', 'TensorFlow', 'Keras'], github: 'https://github.com/clarsoiloki/brain-tumor', featured: true, image: '/images/projects/brain-tumor/tumor.png' },
  { id: 'vehicle-detection', title: 'Détection Véhicules YOLO', category: 'ai-ml', description: 'Détection temps réel avec YOLOv8.', problem: 'Surveillance routière lente.', solution: 'Fine-tuning YOLOv8.', challenges: ['Faible luminosité'], results: ['89% mAP'], leconsApprises: ['Edge deployment'], technologies: ['Python', 'YOLO', 'PyTorch'], github: 'https://github.com/clarsoiloki/vehicle-detection', image: '/images/projects/vehicle-detection/output entrainement.png' },
  { id: 'marketing-analysis', title: 'Analyse Marketing VertiGo', category: 'data', description: 'Analyse statistique marketing.', problem: 'Facteurs conversion inconnus.', solution: 'Tests hypothèses.', challenges: ['Nettoyage données'], results: ['25% conversion'], leconsApprises: ['80% analyse'], technologies: ['Python', 'Pandas'], github: 'https://github.com/clarsoiloki/marketing-analysis', image: '/images/projects/marketing/data-marketing-1024x512.png' },
  { id: 'zando-ecommerce', title: 'Zando E-commerce', category: 'web', description: 'Plateforme e-commerce fullstack.', problem: 'Solution vieillissante.', solution: 'Django + React.', challenges: ['Paiements sécurisés'], results: ['60% temps réduit'], leconsApprises: ['Tests unitaires'], technologies: ['Django', 'React', 'PostgreSQL'], github: 'https://github.com/trclarsi/Zando_', featured: true, image: '/images/projects/marketing/Screenshot 2025-10-27 103447.png' },
  { id: 'medical-drone', title: 'Drone Médical', category: 'embedded', description: 'Drone quadrotor livraison médicaments.', problem: 'Accès limité médicaments.', solution: 'Drone autonome.', challenges: ['Autonomie vol'], results: ['25min autonomie'], leconsApprises: ['Gestion projet'], technologies: ['FreeCAD', 'Arduino'], github: 'https://github.com/clarsoiloki/drone', image: '/images/projects/drone/IMG-20250920-WA0003.jpg' },
  { id: 'samp-predictive-maintenance', title: 'SAMP - Maintenance Prédictive', category: 'ai-ml', description: 'Système de maintenance prédictive pour moteurs aéronautiques (RUL prediction).', problem: 'Coûts élevés de maintenance non planifiée.', solution: 'Modèle LSTM pour estimation RUL avec XAI (Captum + SHAP).', challenges: ['Données déséquilibrées', 'Explicabilité'], results: ['RMSE 14.98', 'NASA Score 499', 'R2 0.87'], leconsApprises: ['Modèles récurrents', 'XAI'], technologies: ['Python', 'PyTorch', 'LSTM', 'XGBoost', 'FastAPI', 'React', 'Docker', 'ONNX'], github: 'https://github.com/clarsoiloki/samp', featured: true, image: '/images/projects/samp/dashboard.png' },
];

export const skills = {
  soft: [
    { name: 'Résolution de Problèmes', icon: 'Lightbulb' },
    { name: 'Travail dEquipe', icon: 'Users' },
    { name: 'Communication', icon: 'MessageSquare' },
    { name: 'Adaptabilité', icon: 'RefreshCw' },
    { name: 'Gestion de Projet', icon: 'Kanban' },
    { name: 'Pensée Analytique', icon: 'BarChart' },
  ],
};

export const techStack = {
  bigData: [
    { name: 'Hadoop', image: '/images/tech-logos/hadoop.svg' },
    { name: 'Spark', image: '/images/tech-logos/spark.png' },
    { name: 'Airflow', image: '/images/tech-logos/airflow.svg' },
    { name: 'Kafka', image: '/images/tech-logos/kafka.svg' },
    { name: 'HBase', image: '/images/tech-logos/hbase_logo.png' },
    { name: 'Cassandra', image: '/images/tech-logos/logo-cassandra-500px.png' },
    { name: 'MongoDB', image: '/images/tech-logos/mongodb.jpg' },
    { name: 'PostgreSQL', image: '/images/tech-logos/postgresql.png' },
    { name: 'Oracle Cloud', image: '/images/tech-logos/oracle cloud.png' },
    { name: 'GCP', image: '/images/tech-logos/gcp.svg' },
  ],
  aiMl: [
    { name: 'TensorFlow', image: '/images/tech-logos/png-clipart-tensorflow-google-brain-machine-learning-deep-learning-google-angle-text-thumbnail.png' },
    { name: 'PyTorch', image: '/images/tech-logos/pytorch.png' },
    { name: 'Scikit-learn', image: '/images/tech-logos/Scikit_learn_logo_small.svg.png' },
    { name: 'Generative AI', image: '/images/tech-logos/argentic ai.svg' },
    { name: 'Computer Vision', image: '/images/tech-logos/computer vision.jpg' },
    { name: 'NLP', image: '/images/tech-logos/nlp_logo.png' },
    { name: 'MLOps', image: '/images/tech-logos/mlops.png' },
    { name: 'Vector DB', image: '/images/tech-logos/vector_database.webp' },
  ],
  programming: [
    { name: 'Python', image: '/images/tech-logos/python.webp' },
    { name: 'Java', image: '/images/tech-logos/Java_Logo.webp' },
    { name: 'SQL', image: '/images/tech-logos/sql.webp' },
    { name: 'Git', image: '/images/tech-logos/git.webp' },
    { name: 'Django', image: '/images/tech-logos/django-icon.svg' },
    { name: 'Docker', image: '/images/tech-logos/124-1243662_docker-whale-logo-docker-png-logo.png' },
    { name: 'Android', image: '/images/tech-logos/android.svg' },
    { name: 'C', image: '/images/tech-logos/C_Programming_Language.svg.png' },
  ],
  tools: [
    { name: 'Power BI', image: '/images/tech-logos/powerbi.webp' },
    { name: 'MATLAB', image: '/images/tech-logos/matlab.svg' },
    { name: 'Arduino', image: '/images/tech-logos/Arduino_Logo.svg' },
    { name: 'FreeCAD', image: '/images/tech-logos/FreeCAD016-logo.svg.png' },
    { name: 'Excel', image: '/images/tech-logos/Microsoft_Office_Excel_(2019–present).svg.png' },
    { name: 'LTspice', image: '/images/tech-logos/ltspice.jpg' },
    { name: 'CATIA V5', image: '/images/tech-logos/catia.webp' },
  ],
};

export const certifications = [
  { name: 'Oracle Generative AI Professional', issuer: 'Oracle', year: 2025, url: 'https://oracle.com' },
  { name: 'Oracle AI Foundations', issuer: 'Oracle', year: 2025, url: 'https://oracle.com' },
  { name: 'Oracle Data Science', issuer: 'Oracle', year: 2025, url: 'https://oracle.com' },
  { name: 'Power BI Modélisation', issuer: 'LinkedIn', year: 2024, url: 'https://linkedin.com' },
  { name: 'Essentiel Power BI', issuer: 'LinkedIn', year: 2024, url: 'https://linkedin.com' },
];

export const education = [
  { degree: 'Ingénieur Systèmes Industriels', school: 'EIGSI Casablanca', period: '2022 - 2026', description: 'Stats, ML, Big Data, SQL' },
  { degree: 'Classes Préparatoires MPSI', school: 'EUA Dakar', period: '2020 - 2022', description: 'Maths, Physique, SI' },
];

export const services = [
  { title: 'Data Engineering', description: 'Pipelines ETL, Big Data, Data Warehouse.', icon: 'Database', deliverables: ['Pipeline ETL', 'Architecture Big Data'] },
  { title: 'Développement IA', description: 'ML, Deep Learning, Computer Vision.', icon: 'Brain', deliverables: ['Modèles ML', 'Computer Vision'] },
  { title: 'Conseil Technique', description: 'Audit cloud, formation.', icon: 'Cloud', deliverables: ['Audit', 'Formation'] },
  { title: 'Développement Web', description: 'Full-stack, API REST.', icon: 'Code', deliverables: ['App Web', 'API REST'] },
];

export const testimonials = [
  { id: 1, quote: 'Excellente capacite dapprentissage.', name: 'Superviseur SMII', role: 'ML Developer', company: 'SMII' },
  { id: 2, quote: 'Sérieux et motivé.', name: 'Responsable Stage', role: 'Project Manager', company: 'TEXEFA' },
];

export const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/about' },
  { label: 'Compétences', href: '/skills' },
  { label: 'Projets', href: '/projects' },
  { label: 'Expérience', href: '/experience' },
  { label: 'Transcripts', href: '/transcripts' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export const interests = [
  { name: 'Échecs', icon: 'Chess' },
  { name: 'Football', icon: 'Soccer' },
  { name: 'Cinéma', icon: 'Film' },
  { name: 'Jeux vidéo', icon: 'Gamepad2' },
  { name: 'Jeux de société', icon: 'Dices' },
];

export const transcripts = {
  engineering: { school: 'EIGSI Casablanca', degree: 'Ingénieur', semesters: [{ name: 'S3', url: '/files/transcripts/ing/S3_EIGSI.pdf' }, { name: 'S4', url: '/files/transcripts/ing/S4_EIGSI.pdf' }, { name: 'S5', url: '/files/transcripts/ing/S5_EIGSI.pdf' }, { name: 'S6', url: '/files/transcripts/ing/S6_EIGSI.pdf' }, { name: 'S7', url: '/files/transcripts/ing/S7_EIGSI.pdf' }, { name: 'S8', url: '/files/transcripts/ing/S8_EIGSI.pdf' }] },
  prep: { school: 'EUA Dakar', degree: 'MPSI', semesters: [{ name: 'S1-S2', url: '/files/transcripts/prepa/S1_S2_EUA.pdf' }, { name: 'S3-S4', url: '/files/transcripts/prepa/S3_S4_EUA.pdf' }] },
};
