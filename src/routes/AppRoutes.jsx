import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Client from '../pages/Client';
import Fournisseur from '../pages/Fournisseur';

const Home = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', padding: '20px' }}>
    <div className="animate-slide-up" style={{ textAlign: 'center', maxWidth: '800px', width: '100%' }}>
      <div style={{ width: '72px', height: '72px', background: '#4f46e5', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.4)' }}>
        <span style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }}>M</span>
      </div>
      <h1 style={{ fontSize: '48px', color: '#0f172a', fontWeight: '800', marginBottom: '16px', letterSpacing: '-1px' }}>MarketSpace.</h1>
      <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '48px', lineHeight: '1.6' }}>
        L'écosystème B2B centralisé. Commandez, gérez et suivez vos échanges en quelques clics.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <Link to="/client" style={{ textDecoration: 'none' }}>
          <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', transition: 'all 0.3s', cursor: 'pointer', height: '100%' }}>
            <div style={{ background: '#e0e7ff', color: '#4f46e5', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontWeight: 'bold', fontSize: '20px' }}>🛒</div>
            <h2 style={{ color: '#0f172a', fontSize: '24px', margin: '0 0 12px', fontWeight: '700' }}>Espace Client</h2>
            <p style={{ color: '#64748b', margin: 0, lineHeight: '1.5' }}>Accédez à votre catalogue, passez vos commandes et suivez l'historique de votre facturation.</p>
          </div>
        </Link>
        <Link to="/fournisseur" style={{ textDecoration: 'none' }}>
          <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', transition: 'all 0.3s', cursor: 'pointer', height: '100%' }}>
            <div style={{ background: '#dcfce7', color: '#10b981', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontWeight: 'bold', fontSize: '20px' }}>📦</div>
            <h2 style={{ color: '#0f172a', fontSize: '24px', margin: '0 0 12px', fontWeight: '700' }}>Espace Fournisseur</h2>
            <p style={{ color: '#64748b', margin: 0, lineHeight: '1.5' }}>Recevez les notifications, validez les commandes entrantes et gérez efficacement les livraisons.</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

const NotFound = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', padding: '20px' }}>
    <h1 style={{ fontSize: '72px', color: '#4f46e5', margin: '0 0 16px' }}>404</h1>
    <h2 style={{ fontSize: '24px', color: '#0f172a', margin: '0 0 24px' }}>Page introuvable</h2>
    <Link to="/" style={{ padding: '12px 24px', background: '#4f46e5', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: '500' }}>Retour à l'accueil</Link>
  </div>
);

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
