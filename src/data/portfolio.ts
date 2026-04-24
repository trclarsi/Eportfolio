import projectsData from './projects.json';
import experiencesData from './experiences.json';
import personalData from './personal.json';
import skillsData from './skills.json';
import techStackData from './techStack.json';
import certificationsData from './certifications.json';
import educationData from './education.json';
import servicesData from './services.json';
import interestsData from './interests.json';

export const personalInfo = personalData;
export const projects = projectsData;
export const experiences = experiencesData;
export const skills = skillsData;
export const techStack = techStackData;
export const certifications = certificationsData;
export const education = educationData;
export const services = servicesData;
export const interests = interestsData;

export const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/about' },
  { label: 'Compétences', href: '/skills' },
  { label: 'Projets', href: '/projects' },
  { label: 'Expérience', href: '/experience' },
  { label: 'Relevés de notes', href: '/transcripts' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export const transcripts = {
  engineering: { school: 'EIGSI Casablanca', degree: 'Ingénieur', semesters: [{ name: 'S3', url: '/files/transcripts/ing/S3_EIGSI.pdf' }, { name: 'S4', url: '/files/transcripts/ing/S4_EIGSI.pdf' }, { name: 'S5', url: '/files/transcripts/ing/S5_EIGSI.pdf' }, { name: 'S6', url: '/files/transcripts/ing/S6_EIGSI.pdf' }, { name: 'S7', url: '/files/transcripts/ing/S7_EIGSI.pdf' }, { name: 'S8', url: '/files/transcripts/ing/S8_EIGSI.pdf' }] },
  prep: { school: 'EUA Dakar', degree: 'MPSI', semesters: [{ name: 'S1-S2', url: '/files/transcripts/prepa/S1_S2_EUA.pdf' }, { name: 'S3-S4', url: '/files/transcripts/prepa/S3_S4_EUA.pdf' }] },
};

export const testimonials = [
  { id: 1, quote: "Excellente capacité d’apprentissage.", name: "Superviseur SMII", role: "ML Developer", company: "SMII" },
  { id: 2, quote: 'Sérieux et motivé.', name: 'Responsable Stage', role: 'Project Manager', company: 'TEXEFA' },
];