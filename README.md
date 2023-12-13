This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Pour lancer l'application

1. Ouvrir un terminal.
2. Télécharger le repo git avec cette commande:
   `git clone https://github.com/uvsq21804964/Equipe80_Frontend_ORNISEC.git`
3. Se placer dans le dossier du projet avec cette commande:
   `cd Equipe80_Frontend_ORNISEC`
4. Installer les dépendances avec cette commande:
   `npm install` ATTENTION : Cette commande prend du temps car elle initie le téléchargement des dépendances.
   Aussi, ne tenez pas compte des erreurs indiqués dans le terminal, ce sont des conflits de dépendances qui n'ont aucune incidence sur le lancement du serveur.
6. Lancer le serveur de développement avec cette commande:
   `npm run dev`
7. Ouvrir [http://localhost:3000/login](http://localhost:3000/login) avec votre navigateur pour voir le résultat.

ATTENTION : Il faut le livrable du projet 81 (et lancer le serveur) pour pouvoir s'authentifier et donc accéder aux autres pages.
(Seulement la page de connexion est accessible sans être authentifié.)

## Pour lancer le serveur du livrable du projet 81 :

1. Ouvrir un terminal depuis le dossier du projet 81.
2. Utiliser la commande `docker compose build`
3. Utiliser la commande `docker compose up`
4. Garder le terminal ouvert pour que le serveur reste actif.

# Pour accéder aux pages

Pour accéder aux pages, il faut se connecter avec:

- id = admin@ornisec.com
- mdp = adminornisec2023

Sans ça, on est automatiquement redirigé vers la page de connexion.
Une fois connecté, on peut accéder à toutes les pages sauf la page de connexion.

## Architecture

Les pages se trouvent dans le dossier 'app'.
Les composants se trouvent dans le dossier 'components'

## Quelques extensions à installer

- PostCSS langage support (cercle + triangle rouge) `permet de résoudre certains problèmes de CSS automatiquement`

- Tailwind CSS intellisense `permet de voir les couleurs du CSS directement dans l'éditeur`

- Simple React Snippets (pour coder plus rapidement). `Ex : taper "sfc" puis appuyer sur entrée pour essayer`

- Next.nav `pour faciliter le routage`

- Prettier – Code formatter `pour formatter automatiquement le code`

- Material Icon Theme `Pour avoir de meilleurs icônes de fichiers`

- ESLint car parfois certaines vaguelettes rouges persisent malgré "Ctrl + S" `Pour résoudre les bugs : Ctrl + shift + P → ESLint : fix all fixable problems

- React dev tools sur votre navigateur (et non VS Code) `afin de connaître les valeurs des propriétés transmises aux composants`

## Les technologies utilisées :

- Next.js avec React
- Pour le CSS : Tailwind
- Prettier et ESLint pour formater et déboguer
- Bibliothèques de composants [Shadcn](https://ui.shadcn.com/docs/installation/next)
- On utilise des fichiers TypeScript (.tsx)

## Organisation des pages

- `/` liste des pages créées avec des boutons pour y accéder
- `/login` pour se connecter
- `/home` pour la page d'acceuil
- `/admin/create-account` pour créer un compte
- `/admin/accounts` pour voir la liste des auditeurs/administrateurs
- `/current-audits` pour voir les audits en cours
- `/current-audits/[something]/edit` pour voir la page du questionnaire
- `/finished-audits` pour voir les audits terminés
- `/create-audit` pour créer un audit
- `/audit` pour ajouter un auditeur à un audit

## Problèmes

- Dans app > (pages) > (routes) > current-audits > pages.tsx,
  on obtient une erreur 401 aux deux requêtes émises (lignes 12 et 30) même en s'étant authentifié.
