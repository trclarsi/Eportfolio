// @ts-nocheck
const { loadJson, saveJson, createBackup, findById, generateSlug, validateProject, validateExperience } = require('./utils');
const { Project, Experience } = require('./utils');

type DataType = 'project' | 'experience';

function parseArgs(): { command: string; type: DataType; args: Record<string, string> } {
  const args = process.argv.slice(2);
  const command = args[0] || 'list';
  const type = (args[1]?.replace('--', '') as DataType) || 'project';
  
  const parsedArgs: Record<string, string> = {};
  for (let i = 2; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const [key, value] = arg.split('=');
      parsedArgs[key.replace('--', '')] = value || args[i + 1] || '';
      if (!value && args[i + 1] && !args[i + 1].startsWith('--')) {
        i++;
      }
    }
  }
  
  return { command, type, args: parsedArgs };
}

function listProjects() {
  const projects = loadJson('projects.json');
  console.log('\n📁 Projets (' + projects.length + '):\n');
  projects.forEach((p: any) => {
    console.log(`  ${p.featured ? '⭐' : '  '} ${p.id}`);
    console.log(`     Title: ${p.title}`);
    console.log(`     Category: ${p.category}`);
    console.log('');
  });
}

function listExperiences() {
  const experiences = loadJson('experiences.json');
  console.log('\n💼 Expériences (' + experiences.length + '):\n');
  experiences.forEach((e: any) => {
    console.log(`  ${e.id}`);
    console.log(`     Company: ${e.company}`);
    console.log(`     Role: ${e.role}`);
    console.log(`     Period: ${e.period}`);
    console.log('');
  });
}

function addProject(args: Record<string, string>) {
  const errors = validateProject(args);
  if (errors.length > 0) {
    console.error('❌ Erreurs de validation:');
    errors.forEach(e => console.error(`  - ${e}`));
    process.exit(1);
  }
  
  const projects = loadJson('projects.json');
  const id = args.title ? generateSlug(args.title) : generateSlug(args.id || '');
  
  if (findById(projects, id)) {
    console.error(`❌ Projet avec ID "${id}" existe déjà`);
    process.exit(1);
  }
  
  createBackup('projects.json');
  
  const newProject: any = {
    id,
    title: args.title || '',
    category: args.category || 'other',
    description: args.description || '',
    problem: args.problem || '',
    solution: args.solution || '',
    challenges: args.challenges ? args.challenges.split(',') : [],
    results: args.results ? args.results.split(',') : [],
    leconsApprises: args.lecons ? args.lecons.split(',') : [],
    technologies: args.technologies ? args.technologies.split(',') : [],
    github: args.github || '',
    demo: args.demo || '',
    featured: args.featured === 'true',
    image: args.image || '',
  };
  
  projects.push(newProject);
  saveJson('projects.json', projects);
  console.log(`✅ Projet ajouté: ${id}`);
}

function addExperience(args: Record<string, string>) {
  const errors = validateExperience(args);
  if (errors.length > 0) {
    console.error('❌ Erreurs de validation:');
    errors.forEach(e => console.error(`  - ${e}`));
    process.exit(1);
  }
  
  const experiences = loadJson('experiences.json');
  const id = args.company ? generateSlug(args.company + '-' + args.role) : args.id || '';
  
  if (findById(experiences, id)) {
    console.error(`❌ Expérience avec ID "${id}" existe déjà`);
    process.exit(1);
  }
  
  createBackup('experiences.json');
  
  const newExperience: any = {
    id,
    company: args.company || '',
    role: args.role || '',
    period: args.period || '',
    description: args.description || '',
    technologies: args.technologies ? args.technologies.split(',') : [],
    highlights: args.highlights ? args.highlights.split(',') : [],
  };
  
  experiences.push(newExperience);
  saveJson('experiences.json', experiences);
  console.log(`✅ Expérience ajoutée: ${id}`);
}

function removeProject(id: string) {
  const projects = loadJson('projects.json');
  const index = projects.findIndex((p: any) => p.id === id);
  
  if (index === -1) {
    console.error(`❌ Projet "${id}" non trouvé`);
    process.exit(1);
  }
  
  createBackup('projects.json');
  projects.splice(index, 1);
  saveJson('projects.json', projects);
  console.log(`✅ Projet supprimé: ${id}`);
}

function removeExperience(id: string) {
  const experiences = loadJson('experiences.json');
  const index = experiences.findIndex((e: any) => e.id === id);
  
  if (index === -1) {
    console.error(`❌ Expérience "${id}" non trouvée`);
    process.exit(1);
  }
  
  createBackup('experiences.json');
  experiences.splice(index, 1);
  saveJson('experiences.json', experiences);
  console.log(`✅ Expérience supprimée: ${id}`);
}

function updateProject(id: string, args: Record<string, string>) {
  const projects = loadJson('projects.json');
  const project: any = findById(projects, id);
  
  if (!project) {
    console.error(`❌ Projet "${id}" non trouvé`);
    process.exit(1);
  }
  
  createBackup('projects.json');
  
  Object.keys(args).forEach(key => {
    if (key !== 'id' && args[key] !== undefined) {
      if (['challenges', 'results', 'lecons', 'technologies'].includes(key)) {
        project[key] = args[key].split(',');
      } else if (key === 'featured') {
        project[key] = args[key] === 'true';
      } else {
        project[key] = args[key];
      }
    }
  });
  
  saveJson('projects.json', projects);
  console.log(`✅ Projet mis à jour: ${id}`);
}

function updateExperience(id: string, args: Record<string, string>) {
  const experiences = loadJson('experiences.json');
  const experience: any = findById(experiences, id);
  
  if (!experience) {
    console.error(`❌ Expérience "${id}" non trouvée`);
    process.exit(1);
  }
  
  createBackup('experiences.json');
  
  Object.keys(args).forEach(key => {
    if (key !== 'id' && args[key] !== undefined) {
      if (['technologies', 'highlights'].includes(key)) {
        experience[key] = args[key].split(',');
      } else {
        experience[key] = args[key];
      }
    }
  });
  
  saveJson('experiences.json', experiences);
  console.log(`✅ Expérience mise à jour: ${id}`);
}

function showHelp() {
  console.log(`
📋 Portfolio CLI - Aide

Usage: npm run portfolio [commande] [type] [options]

Commandes:
  add     Ajouter un élément
  remove  Supprimer un élément
  update  Modifier un élément
  list    Lister les éléments
  help    Afficher cette aide

Types:
  project     Projets
  experience  Expériences

Exemples:
  # Ajouter un projet
  npm run portfolio add project --title="Mon Projet" --category="ai-ml" --description="..."

  # Lister les projets
  npm run portfolio list project

  # Supprimer un projet
  npm run portfolio remove project --id="mon-projet"

  # Mettre à jour un projet
  npm run portfolio update project --id="mon-projet" --title="Nouveau Titre"

  # Ajouter une expérience
  npm run portfolio add experience --company="Google" --role="Stagiaire" --period="2024"

Options pour project:
  --title, --category, --description, --problem, --solution
  --challenges, --results, --lecons, --technologies
  --github, --demo, --image, --featured

Options pour experience:
  --company, --role, --period, --description, --technologies, --highlights
`);
}

function main() {
  const { command, type, args } = parseArgs();
  
  switch (command) {
    case 'add':
      if (type === 'project') addProject(args);
      else if (type === 'experience') addExperience(args);
      else console.log('Type non supporté');
      break;
      
    case 'remove':
      if (!args.id) {
        console.error('❌ ID requis: --id=xxx');
        process.exit(1);
      }
      if (type === 'project') removeProject(args.id);
      else if (type === 'experience') removeExperience(args.id);
      else console.log('Type non supporté');
      break;
      
    case 'update':
      if (!args.id) {
        console.error('❌ ID requis: --id=xxx');
        process.exit(1);
      }
      if (type === 'project') updateProject(args.id, args);
      else if (type === 'experience') updateExperience(args.id, args);
      else console.log('Type non supporté');
      break;
      
    case 'list':
      if (type === 'project' || !type) listProjects();
      if (type === 'experience') listExperiences();
      break;
      
    case 'help':
    default:
      showHelp();
  }
}

main();