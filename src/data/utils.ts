// @ts-nocheck
const fs = require('fs');
const path = require('path');

const DATA_DIR = __dirname;

function loadJson<T>(filename: string): T {
  const filepath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filepath)) {
    throw new Error(`File not found: ${filename}`);
  }
  const content = fs.readFileSync(filepath, 'utf-8');
  return JSON.parse(content);
}

function saveJson<T>(filename: string, data: T): void {
  const filepath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf-8');
}

function getBackupPath(filename: string): string {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  return path.join(DATA_DIR, `${filename}.backup.${timestamp}`);
}

function createBackup(filename: string): void {
  const filepath = path.join(DATA_DIR, filename);
  if (fs.existsSync(filepath)) {
    const backupPath = getBackupPath(filename);
    const content = fs.readFileSync(filepath, 'utf-8');
    fs.writeFileSync(backupPath, content, 'utf-8');
    cleanupOldBackups(filename);
  }
}

function cleanupOldBackups(filename: string, maxBackups = 5): void {
  const dirFiles = fs.readdirSync(DATA_DIR)
    .filter(f => f.startsWith(`${filename}.backup.`))
    .sort()
    .reverse();
  
  dirFiles.slice(maxBackups).forEach(file => {
    fs.unlinkSync(path.join(DATA_DIR, file));
  });
}

function findById<T extends { id?: string }>(data: T[], id: string): T | undefined {
  return data.find(item => item.id === id);
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function validateProject(data: Record<string, unknown>): string[] {
  const errors: string[] = [];
  if (!data.title) errors.push('Title is required');
  if (!data.category) errors.push('Category is required');
  return errors;
}

function validateExperience(data: Record<string, unknown>): string[] {
  const errors: string[] = [];
  if (!data.company) errors.push('Company is required');
  if (!data.role) errors.push('Role is required');
  if (!data.period) errors.push('Period is required');
  return errors;
}

export {
  loadJson,
  saveJson,
  createBackup,
  findById,
  generateSlug,
  validateProject,
  validateExperience,
  DATA_DIR
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  problem?: string;
  solution?: string;
  challenges?: string[];
  results?: string[];
  leconsApprises?: string[];
  technologies?: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  image?: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies?: string[];
  highlights?: string[];
};

export type Personal = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  photo: string;
  cv: string;
  linkedin: string;
  github: string;
  instagram: string;
  mbti: string;
  vakProfile: string;
  drivers: string[];
  description: string;
};

export type TechCategory = {
  name: string;
  image: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year: number;
  url: string;
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  description: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
};

export type Interest = {
  name: string;
  icon: string;
};

export type Skills = {
  soft: { name: string; icon: string }[];
};

export type TechStack = {
  bigData: TechCategory[];
  aiMl: TechCategory[];
  programming: TechCategory[];
  tools: TechCategory[];
};