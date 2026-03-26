# MarketPlace Pro

Plateforme de mise en relation entre clients et fournisseurs, avec un panel d'administration dédié.

## Structure du projet

Le projet est construit avec **React** et **Vite**, une gestion du routage par `react-router-dom` et une gestion d'état centralisée avec `Redux Toolkit`.

### Espaces disponibles :
- **Espace Public** : Accueil, Liste de produits, Détail d'un produit, Panier, et Authentification (Login & Register)
- **Espace Client** : Historique des commandes, Profil, Factures
- **Espace Fournisseur** : Gestion des catalogues de produits, Gestion des commandes entrantes, Statistiques de vente
- **Espace Administrateur** : Back-office général (Utilisateurs, Fournisseurs, Catégories, Paramètres)

## Technologies Utilisées

- [React 18](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)

## Installation et Lancement

1. Si ce n'est pas déjà fait, installez les dépendances :
   ```bash
   npm install
   ```

2. Lancez le serveur de développement local :
   ```bash
   npm run dev
   ```

3. Rendez-vous sur [http://localhost:5173/](http://localhost:5173/) pour voir l'application.

## Auteurs
Créé dans le cadre du PFE _(Projet de Fin d'Études)_.
