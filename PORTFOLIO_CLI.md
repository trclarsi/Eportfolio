# Portfolio CLI - Mode d'emploi

 Système de gestion du portfolio via ligne de commande.

## Prérequis

- Node.js installé
- npm installé

## Installation

Les dépendances sont déjà incluses dans le projet :

```bash
npm install
```

## Commandes disponibles

### Lister les éléments

```bash
# Lister tous les projets
npm run portfolio -- list project

# Lister toutes les expériences
npm run portfolio -- list experience

# Voir l'aide
npm run portfolio -- help
```

### Ajouter un élément

```bash
# Ajouter un projet
npm run portfolio -- add project \
  --title="Mon Projet" \
  --category="ai-ml" \
  --description="Description du projet" \
  --github="https://github.com/..." \
  --technologies="Python,React,TensorFlow"

# Ajouter une expérience
npm run portfolio -- add experience \
  --company="Google" \
  --role="Stagiaire ML" \
  --period="2024-2025" \
  --description="Description de l'expérience"
```

### Supprimer un élément

```bash
# Supprimer un projet
npm run portfolio -- remove project --id=mon-projet-id

# Supprimer une expérience
npm run portfolio -- remove experience --id=mon-experience-id
```

### Modifier un élément

```bash
# Modifier un projet
npm run portfolio -- update project \
  --id=mon-projet-id \
  --title="Nouveau Titre" \
  --description="Nouvelle Description"

# Modifier une expérience
npm run portfolio -- update experience \
  --id=mon-experience-id \
  --role="Nouveau Rôle"
```

## Options disponibles

### Pour les projets

| Option | Description | Required |
|--------|-------------|----------|
| `--title` | Titre du projet | Oui |
| `---category` | Catégorie (ai-ml, big-data, web, data, embedded) | Oui |
| `--description` | Description du projet | Non |
| `--problem` | Problème solves | Non |
| `--solution` | Solution apportée | Non |
| `--challenges` | Défis (séparés par des virgules) | Non |
| `--results` | Résultats (séparés par des virgules) | Non |
| `--technologies` | Technologies utilisées (séparées par des virgules) | Non |
| `--github` | URL du dépôt GitHub | Non |
| `--demo` | URL de la démo | Non |
| `--image` | Chemin de l'image | Non |
| `--featured` | Projet mis en avant (true/false) | Non |

### Pour les expériences

| Option | Description | Required |
|--------|-------------|----------|
| `--company` | Nom de l'entreprise | Oui |
| `--role` | Rôle/poste | Oui |
| `--period` | Période (ex: "2024-2025") | Oui |
| `--description` | Description | Non |
| `--technologies` | Technologies (séparées par des virgules) | Non |
| `--highlights` | Points forts (séparés par des virgules) | Non |

## Système de backup

Avant chaque modification (ajout, suppression, mise à jour), un backup est créé automatiquement :

- Les fichiers de backup sont nommés `*.backup.*`
- Les 5 derniers backups sont conservés
- Pour restaurer un backup, copier manuellement le fichier backup vers le fichier original

Exemple de backup :
```
projects.json.backup.2025-04-02T15-30-00-000Z
```

## Validation

Le système vérifie les champs obligatoires avant toute modification :

- Pour un projet : `title` et `category` sont obligatoires
- Pour une expérience : `company`, `role` et `period` sont obligatoires

En cas d'erreur de validation, un message d'erreur s'affiche avec les champs manquants.

## IDs

Les IDs sont auto-générés à partir du titre :

- "Mon Nouveau Projet" → `mon-nouveau-projet`
- Les caractères spéciaux sont supprimés
- Les espaces sont remplacés par des tirets

## Fichiers JSON

Les données sont stockées dans des fichiers JSON séparés :

```
src/data/
├── projects.json       # Projets
├── experiences.json    # Expériences
├── personal.json      # Informations personnelles
├── skills.json        # Compétences
├── techStack.json     # Technologies
├── certifications.json
├── education.json
├── services.json
└── interests.json
```

## Exemples

### Ajouter un nouveau projet

```bash
npm run portfolio -- add project \
  --title="Chatbot IA" \
  --category="ai-ml" \
  --description="Un chatbot intelligent avec NLP" \
  --technologies="Python,FastAPI,Transformers" \
  --github="https://github.com/user/chatbot"
```

### Mettre à jour un projet existant

```bash
npm run portfolio -- update project \
  --id=chatbot-ia \
  --featured=true
```

### Supprimer un projet

```bash
npm run portfolio -- remove project --id=chatbot-ia
```

## Dépannage

### Erreur "File not found"
Vérifiez que vous êtes dans le répertoire du projet portfolio.

### Erreur de validation
Vérifiez que tous les champs obligatoires sont fournis.

### Le build échoue
Assurez-vous que les fichiers JSON sont valides (pas d'erreurs de syntaxe).

---

Pour toute question, consulter le code source dans `src/data/cli.ts` et `src/data/utils.ts`.