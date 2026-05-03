import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Client from '../pages/Client';
import Fournisseur from '../pages/Fournisseur';

const Home = () => (
  <div style={{ padding: '20px' }}>
    <h1>Accueil - MarketPlace Pro</h1>
    <nav style={{ marginBottom: '20px' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Accueil</Link>
      <Link to="/client" style={{ marginRight: '10px' }}>Client</Link>
      <Link to="/fournisseur">Fournisseur</Link>
    </nav>
    <p>Bienvenue sur la plateforme</p>
  </div>
);

const NotFound = () => <div style={{ padding: '20px' }}><h1>Page non trouvée (404)</h1></div>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/client" element={<Client />} />
      <Route path="/fournisseur" element={<Fournisseur />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
