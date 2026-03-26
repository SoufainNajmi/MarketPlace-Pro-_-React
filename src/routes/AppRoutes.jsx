import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

const Home = () => (
  <div style={{ padding: '20px' }}>
    <h1>Accueil - MarketPlace Pro</h1>
    <nav style={{ marginBottom: '20px' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Accueil</Link>
      <Link to="/products" style={{ marginRight: '10px' }}>Produits</Link>
      <Link to="/auth/login" style={{ marginRight: '10px' }}>Connexion</Link>
      <Link to="/auth/register">Inscription</Link>
    </nav>
    <p>Bienvenue sur la plateforme</p>
  </div>
);

const Products = () => <div style={{ padding: '20px' }}><h1>Liste des produits</h1></div>;
const NotFound = () => <div style={{ padding: '20px' }}><h1>Page non trouvée (404)</h1></div>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
