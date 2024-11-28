# Curriculum Vitae

## Installation

Installation des dépendances

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Environment de développement

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Packaging de production



```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Pré-visualisation du package de production. Utilile pour bien visualiser les images par exemple.

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Déploiement de la production sur le serveur

```bash
# npm
npm run deploy

# pnpm
pnpm run deploy

# yarn
yarn deploy

# bun
bun run deploy
```
Pour réaliser un déploiement depuis un poste de dev il est 
nécessaire de définir les variables d'environnement suivantes:

```bash
export FTP_USER=<ftp-user>
export FTP_PWD=<ftp-password>
export FTP_HOST=<ftp-host>
```