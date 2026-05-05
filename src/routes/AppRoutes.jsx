import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Client from '../pages/Client';
import Fournisseur from '../pages/Fournisseur';

const GlobalFooter = () => (
  <footer style={{ background: '#090e17', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '32px 20px', color: '#64748b', textAlign: 'center', marginTop: 'auto', zIndex: 10, position: 'relative' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
         <div style={{ width: '24px', height: '24px', background: 'linear-gradient(135deg, #4f46e5 0%, #10b981 100%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <span style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>M</span>
         </div>
         <span style={{ color: 'white', fontSize: '16px', fontWeight: '600', letterSpacing: '-0.5px' }}>HANOTI.</span>
      </div>
      <p style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>© {new Date().getFullYear()} HANOTI. Tous droits réservés.</p>
      <p style={{ margin: 0, fontSize: '13px', opacity: 0.7 }}>Propulsé pour le Projet de Fin d'Études (PFE) BTS.</p>
    </div>
  </footer>
);

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0f172a', position: 'relative', overflow: 'hidden' }}>

      {/* Dynamic Background Glowing Orbs */}
      <div className="glow-anim" style={{ position: 'absolute', top: '-15%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(79, 70, 229, 0.4) 0%, rgba(15, 23, 42, 0) 70%)', filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none' }}></div>
      <div className="glow-anim" style={{ position: 'absolute', bottom: '-15%', right: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(15, 23, 42, 0) 70%)', filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none', animationDelay: '2s' }}></div>
      <div className="glow-anim" style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(15, 23, 42, 0) 70%)', filter: 'blur(100px)', zIndex: 0, pointerEvents: 'none', animationDelay: '4s' }}></div>

      {/* Decorative Top Grid Line Pattern */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', zIndex: 0, opacity: 0.5, pointerEvents: 'none' }}></div>

      {/* Modern Transparent Navbar */}
      <nav style={{ padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10, position: 'relative' }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
           <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #4f46e5 0%, #10b981 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
             <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>H</span>
           </div>
           <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', letterSpacing: '-0.5px' }}>HANOTI.</span>
         </div>
         <div>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: '500' }}>Portail de Démonstration PFE</span>
         </div>
      </nav>

      {/* Hero Section */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10, padding: '60px 20px', textAlign: 'center' }}>
         <div className="animate-slide-up" style={{ animationDuration: '0.8s' }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', color: '#cbd5e1', fontSize: '13px', fontWeight: '600', marginBottom: '24px', backdropFilter: 'blur(10px)' }}>
                Hanoti est une application web de commerce électronique
            </div>

            <h1 style={{ fontSize: '72px', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-2px', marginBottom: '24px', color: 'white' }}>
               WELCOME TO <br />
               <span style={{ background: '-webkit-linear-gradient(45deg, #818cf8, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0px 4px 10px rgba(79, 70, 229, 0.4))' }}>Hanoti.</span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '20px', maxWidth: '650px', margin: '0 auto 60px', lineHeight: '1.7' }}>
              Hanoti
            </p>

            {/* Glassmorphism Interactive Cards */}
            <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>

               {/* Client Card */}
               <Link to="/client" className="float-anim" style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '40px', borderRadius: '24px', width: '340px', height: '100%', textAlign: 'left', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)', position: 'relative', overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                      e.currentTarget.style.border = '1px solid rgba(99, 102, 241, 0.5)';
                      e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(79, 70, 229, 0.4)';
                      e.currentTarget.querySelector('.arrow').style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.5)';
                      e.currentTarget.querySelector('.arrow').style.transform = 'translateX(0)';
                    }}
                  >
                     <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(79, 70, 229, 0.15)', color: '#818cf8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', marginBottom: '24px', border: '1px solid rgba(79, 70, 229, 0.2)' }}>
                        <span style={{ filter: 'drop-shadow(0 2px 4px rgba(79,70,229,0.3))'}}>🛍️</span>
                     </div>
                     <h3 style={{ color: 'white', fontSize: '26px', fontWeight: 'bold', margin: '0 0 12px' }}>Espace Client</h3>
                     <p style={{ color: '#94a3b8', margin: 0, lineHeight: '1.6', fontSize: '15px' }}>Accédez à votre catalogue, passez aux commandes en temps réel et générez des factures numérisées.</p>

                     <div style={{ marginTop: '32px', color: '#818cf8', fontWeight: '600', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s' }}>
                        Connexion Acheteur <span className="arrow" style={{ transition: 'transform 0.3s' }}>→</span>
                     </div>
                  </div>
               </Link>

               {/* Fournisseur Card */}
               <Link to="/fournisseur" className="float-anim-reverse" style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '40px', borderRadius: '24px', width: '340px', height: '100%', textAlign: 'left', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)', position: 'relative', overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                      e.currentTarget.style.border = '1px solid rgba(16, 185, 129, 0.5)';
                      e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(16, 185, 129, 0.4)';
                      e.currentTarget.querySelector('.arrow').style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.5)';
                      e.currentTarget.querySelector('.arrow').style.transform = 'translateX(0)';
                    }}
                  >
                     <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', marginBottom: '24px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                        <span style={{ filter: 'drop-shadow(0 2px 4px rgba(16,185,129,0.3))'}}>📦</span>
                     </div>
                     <h3 style={{ color: 'white', fontSize: '26px', fontWeight: 'bold', margin: '0 0 12px' }}>Portail Fournisseur</h3>
                     <p style={{ color: '#94a3b8', margin: 0, lineHeight: '1.6', fontSize: '15px' }}>Recevez les requêtes de vos clients, validez instantanément les flux tendus de l'approvisionnement.</p>

                     <div style={{ marginTop: '32px', color: '#34d399', fontWeight: '600', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s' }}>
                        Découvrir le panel <span className="arrow" style={{ transition: 'transform 0.3s' }}>→</span>
                     </div>
                  </div>
               </Link>
            </div>
         </div>
      </div>
      <GlobalFooter />
    </div>
  );
};

const NotFound = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f172a', padding: '20px' }}>
    <h1 style={{ fontSize: '72px', color: '#818cf8', margin: '0 0 16px', fontWeight: '800' }}>404</h1>
    <h2 style={{ fontSize: '24px', color: 'white', margin: '0 0 24px' }}>Page introuvable</h2>
    <Link to="/" style={{ padding: '12px 24px', background: '#4f46e5', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: '500' }}>Retourner au portail</Link>
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
