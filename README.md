# IN OPTIC - Site Web Professionnel

Site web moderne pour IN OPTIC, un opticien professionnel situé à Marseille. Développé avec React, TypeScript, et Tailwind CSS.



## 🚀 Technologies Utilisées

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite
- Lucide Icons

## 📋 Prérequis

- Node.js 20.x ou supérieur
- npm 10.x ou supérieur

## 🛠 Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/in-optic.git
cd in-optic
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

## 🌐 Déploiement

Le site est configuré pour être déployé sur Netlify. Voici les étapes pour déployer :

1. Créez un compte sur [Netlify](https://www.netlify.com)

2. Connectez votre repository GitHub à Netlify

3. Configurez les paramètres de build :
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20.x

4. Les redirections sont déjà configurées dans le fichier `public/_redirects`

5. Le déploiement se fera automatiquement à chaque push sur la branche principale

## 📁 Structure du Projet

```
in-optic/
├── public/           # Assets statiques
├── src/
│   ├── components/   # Composants React
│   ├── pages/        # Pages de l'application
│   ├── lib/          # Utilitaires et helpers
│   └── main.tsx      # Point d'entrée
├── index.html        # Template HTML
└── vite.config.ts    # Configuration Vite
```

## 🔧 Scripts Disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Crée une version de production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie le code avec ESLint

## 🎨 Personnalisation

- Les couleurs principales sont configurées dans `tailwind.config.js`
- Les animations sont gérées avec Framer Motion
- Les icônes proviennent de Lucide React

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints pour :
- Mobile : < 768px
- Tablette : 768px - 1024px
- Desktop : > 1024px

## 🔍 SEO

- Meta tags optimisés dans `index.html`
- Schema.org markup pour les informations de l'opticien
- Canonical URLs configurés
- Sitemap généré automatiquement

## 📄 License

MIT License - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🤝 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue ou à nous contacter directement.
