import React, { useState, useEffect } from 'react';
import { fournisseurTheme as theme, getStyles } from '../utils/theme';

const styles = getStyles(theme);

// --- Subcomponents for clean visual organization ---

const FournisseurLogin = ({ email, setEmail, password, setPassword, onLogin }) => (
  <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9' }}>
    <div className="animate-slide-up" style={{ padding: '40px', width: '100%', maxWidth: '420px', background: 'white', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ width: '48px', height: '48px', background: theme.primary, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', boxShadow: '0 4px 6px rgba(16, 185, 129, 0.3)' }}>
          <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>F</span>
        </div>
        <h2 style={{ margin: 0, color: theme.textMain, fontSize: '24px', fontWeight: '700' }}>Portail Fournisseur</h2>
        <p style={{ margin: '8px 0 0', color: theme.textMuted, fontSize: '14px' }}>Gérez vos commandes et clients</p>
      </div>
      <form onSubmit={onLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '500', color: theme.textMain }}>Email Professionnel</label>
          <input type="email" placeholder="contact@fournisseur.com" value={email} onChange={e => setEmail(e.target.value)} required style={styles.input} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '500', color: theme.textMain }}>Mot de passe</label>
          <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required style={styles.input} />
        </div>
        <button type="submit" style={{ ...styles.buttonPrimary, padding: '14px', marginTop: '8px', fontSize: '15px' }}>Accéder à l'espace</button>
      </form>
    </div>
  </div>
);

const NavItem = ({ view, label, count = 0, currentView, setCurrentView, setSelectedInvoice }) => (
  <button
    onClick={() => {
      setCurrentView(view);
      if (setSelectedInvoice) setSelectedInvoice(null);
    }}
    style={{
      background: currentView === view ? 'rgba(255,255,255,0.1)' : 'transparent',
      color: currentView === view ? '#fff' : '#cbd5e1',
      border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500',
      padding: '8px 12px', borderRadius: '6px', transition: 'all 0.2s',
      display: 'flex', alignItems: 'center', gap: '6px'
    }}
  >
    {label}
    {count > 0 && <span style={{ background: theme.danger, color: 'white', padding: '2px 6px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold' }}>{count}</span>}
  </button>
);

const FournisseurNavbar = ({ currentView, setCurrentView, setSelectedInvoice, pendingCount, onLogout }) => (
  <nav style={{ background: theme.bgDark, padding: '0 30px', display: 'flex', justifyContent: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 10 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1000px', height: '64px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '32px', height: '32px', background: theme.primary, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>F</span>
        </div>
        <h2 style={{ margin: 0, color: 'white', fontSize: '18px', fontWeight: '600', letterSpacing: '-0.5px' }}>Fournisseurs Pro</h2>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <NavItem view="dashboard" label="Tableau de bord" currentView={currentView} setCurrentView={setCurrentView} setSelectedInvoice={setSelectedInvoice} />
        <NavItem view="notifications" label="Commandes Reçues" count={pendingCount} currentView={currentView} setCurrentView={setCurrentView} setSelectedInvoice={setSelectedInvoice} />
        <div style={{ width: '1px', height: '24px', background: '#334155', margin: '0 10px' }}></div>
        <NavItem view="profile" label="Profil" currentView={currentView} setCurrentView={setCurrentView} setSelectedInvoice={setSelectedInvoice} />
        <button onClick={onLogout} style={{ ...styles.buttonDanger, padding: '8px 12px', marginLeft: '5px' }}>Déconnexion</button>
      </div>
    </div>
  </nav>
);

const DashboardView = ({ receivedOrders, pendingCount, totalCA, setCurrentView }) => (
  <div>
    <div style={{ marginBottom: '24px' }}>
      <h1 style={{ fontSize: '28px', margin: '0 0 8px', color: theme.textMain }}>Vue d'ensemble 📊</h1>
      <p style={{ color: theme.textMuted, margin: 0 }}>Statistiques et performances de votre entreprise.</p>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '24px' }}>
      <div style={styles.card}>
        <h3 style={{ margin: '0 0 10px', color: theme.textMuted, fontSize: '13px', fontWeight: '600', textTransform: 'uppercase' }}>Commandes en attente</h3>
        <div style={{ fontSize: '32px', fontWeight: 'bold', color: theme.warning }}>{pendingCount}</div>
      </div>
      <div style={styles.card}>
        <h3 style={{ margin: '0 0 10px', color: theme.textMuted, fontSize: '13px', fontWeight: '600', textTransform: 'uppercase' }}>Volume commandes</h3>
        <div style={{ fontSize: '32px', fontWeight: 'bold', color: theme.textMain }}>{receivedOrders.length}</div>
      </div>
      <div style={styles.card}>
        <h3 style={{ margin: '0 0 10px', color: theme.textMuted, fontSize: '13px', fontWeight: '600', textTransform: 'uppercase' }}>CA Généré (Validé)</h3>
        <div style={{ fontSize: '32px', fontWeight: 'bold', color: theme.primary }}>{totalCA.toLocaleString()} MAD</div>
      </div>
    </div>
    <div style={styles.card}>
      <h2 style={{ margin: '0 0 16px', fontSize: '18px' }}>Gérer le flux</h2>
      <div style={{ display: 'flex', gap: '16px' }}>
        <button onClick={() => setCurrentView('notifications')} style={styles.buttonPrimary}>
          Consulter les nouvelles commandes
        </button>
      </div>
    </div>
  </div>
);

// --- Main Fournisseur Component ---

const Fournisseur = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [currentView, setCurrentView] = useState('dashboard');
  const [receivedOrders, setReceivedOrders] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const loadOrders = () => {
    const storedOrders = localStorage.getItem('marketplace_orders');
    if (storedOrders) setReceivedOrders(JSON.parse(storedOrders));
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadOrders();
      const interval = setInterval(loadOrders, 2000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('dashboard');
    setSelectedInvoice(null);
    setEmail('');
    setPassword('');
  };
  
  const updateOrderStatus = (orderId, newStatus) => {
    const updated = receivedOrders.map(o => o.id === orderId ? { ...o, status: newStatus } : o);
    setReceivedOrders(updated);
    localStorage.setItem('marketplace_orders', JSON.stringify(updated));
    if (selectedInvoice && selectedInvoice.id === orderId) {
      setSelectedInvoice({ ...selectedInvoice, status: newStatus });
    }
  };
  
  const totalCA = receivedOrders.reduce((acc, curr) => curr.status === 'Validée' ? acc + curr.total : acc, 0);
  const pendingCount = receivedOrders.filter(o => !o.status || o.status === 'En attente').length;

  if (!isAuthenticated) {
    return <FournisseurLogin email={email} setEmail={setEmail} password={password} setPassword={setPassword} onLogin={handleLogin} />;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <FournisseurNavbar currentView={currentView} setCurrentView={setCurrentView} setSelectedInvoice={setSelectedInvoice} pendingCount={pendingCount} onLogout={handleLogout} />

      <main className="animate-slide-up" style={{ flex: 1, padding: '40px 20px', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
        {currentView === 'dashboard' && <DashboardView receivedOrders={receivedOrders} pendingCount={pendingCount} totalCA={totalCA} setCurrentView={setCurrentView} />}
        
        {currentView === 'profile' && (
          <div style={styles.card}>
            <h2 style={{ margin: '0 0 20px', fontSize: '20px', borderBottom: `1px solid ${theme.border}`, paddingBottom: '16px' }}>Profil Fournisseur</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#dcfce7', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                {email[0].toUpperCase()}
              </div>
              <div>
                <h3 style={{ margin: '0 0 4px' }}>Informations Société</h3>
                <p style={{ margin: 0, color: theme.textMuted, fontSize: '13px' }}>Enregistrement légal et méthode de paiement (RIB).</p>
              </div>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '500', color: theme.textMain }}>Email Contact Principal</label>
              <input type="text" readOnly value={email} style={{ ...styles.input, background: '#f1f5f9', cursor: 'not-allowed' }} />
            </div>
          </div>
        )}

        {currentView === 'settings' && (
          <div style={styles.card}>
            <h2 style={{ margin: '0 0 20px', fontSize: '20px', borderBottom: `1px solid ${theme.border}`, paddingBottom: '16px' }}>Configuration</h2>
            <p style={{ color: theme.textMuted }}>Cette page est en cours de développement. Les options de préférences arriveront bientôt.</p>
          </div>
        )}

        {currentView === 'notifications' && !selectedInvoice && (
          <div style={{ ...styles.card, padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '24px', borderBottom: `1px solid ${theme.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ margin: 0, fontSize: '20px' }}>Liste des Commandes Entrantes</h2>
              <span style={{ fontSize: '14px', color: theme.textMuted, background: '#f8fafc', padding: '6px 12px', borderRadius: '20px', border: `1px solid ${theme.border}` }}>
                Mise à jour en temps réel (Sync)
              </span>
            </div>
            
            {receivedOrders.length === 0 ? (
              <div style={{ padding: '40px', textAlign: 'center', color: theme.textMuted }}>
                Aucune commande reçue de la part des clients.
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f8fafc' }}>
                    <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '12px', textTransform: 'uppercase', color: theme.textMuted, fontWeight: '600', borderBottom: `1px solid ${theme.border}` }}>N° Cmd</th>
                    <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '12px', textTransform: 'uppercase', color: theme.textMuted, fontWeight: '600', borderBottom: `1px solid ${theme.border}` }}>Date</th>
                    <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '12px', textTransform: 'uppercase', color: theme.textMuted, fontWeight: '600', borderBottom: `1px solid ${theme.border}` }}>Client (Email)</th>
                    <th style={{ padding: '16px 24px', textAlign: 'right', fontSize: '12px', textTransform: 'uppercase', color: theme.textMuted, fontWeight: '600', borderBottom: `1px solid ${theme.border}` }}>Montant</th>
                    <th style={{ padding: '16px 24px', textAlign: 'center', fontSize: '12px', textTransform: 'uppercase', color: theme.textMuted, fontWeight: '600', borderBottom: `1px solid ${theme.border}` }}>Statut</th>
                    <th style={{ padding: '16px 24px', textAlign: 'center', fontSize: '12px', textTransform: 'uppercase', color: theme.textMuted, fontWeight: '600', borderBottom: `1px solid ${theme.border}` }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {receivedOrders.map((order, index) => {
                    const isPending = !order.status || order.status === 'En attente';
                    return (
                      <tr key={order.id} style={{ borderBottom: index === receivedOrders.length - 1 ? 'none' : `1px solid ${theme.border}`, background: isPending ? '#fefce8' : 'white' }}>
                        <td style={{ padding: '16px 24px', fontWeight: '500' }}>{order.id}</td>
                        <td style={{ padding: '16px 24px', color: theme.textMuted, fontSize: '14px' }}>{order.date}</td>
                        <td style={{ padding: '16px 24px', fontSize: '14px' }}>{order.clientEmail}</td>
                        <td style={{ padding: '16px 24px', textAlign: 'right', fontWeight: '600', color: theme.textMain }}>{order.total} MAD</td>
                        <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                          <span style={{ display: 'inline-block', background: isPending ? '#fef3c7' : '#dcfce7', color: isPending ? '#b45309' : '#15803d', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
                            {order.status || 'En attente'}
                          </span>
                        </td>
                        <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                          <button onClick={() => { setSelectedInvoice(order); setCurrentView('invoice'); }} style={{ ...styles.buttonOutline, padding: '6px 12px', fontSize: '13px', background: 'white' }}>
                            Traiter / Facture
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            )}
          </div>
        )}

        {currentView === 'invoice' && selectedInvoice && (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px' }}>
              <button onClick={() => { setSelectedInvoice(null); setCurrentView('notifications'); }} style={{ background: 'transparent', border: 'none', color: theme.textMuted, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', padding: 0 }}>
                ← Retour au registre des commandes
              </button>
            </div>
            
            <div style={{ ...styles.card, padding: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: `1px solid ${theme.border}`, paddingBottom: '32px', marginBottom: '32px' }}>
                <div>
                  <h1 style={{ margin: '0 0 8px', color: theme.textMain, fontSize: '32px' }}>Bon de Commande</h1>
                  <p style={{ margin: 0, color: theme.textMuted }}>Ref Interne: <strong style={{ color: theme.textMain }}>{selectedInvoice.id}</strong></p>
                  <p style={{ marginTop: '12px', fontSize: '14px' }}>
                    Statut:
                    <span style={{ marginLeft: '8px', padding: '4px 8px', borderRadius: '4px', background: selectedInvoice.status === 'Validée' ? '#dcfce7' : '#fef3c7', color: selectedInvoice.status === 'Validée' ? '#15803d' : '#b45309', fontWeight: 'bold' }}>
                      {selectedInvoice.status || 'En attente'}
                    </span>
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ margin: '0 0 4px', color: theme.textMuted, fontSize: '14px' }}>Reçu le</p>
                  <p style={{ margin: '0 0 16px', fontWeight: '500' }}>{selectedInvoice.date}</p>
                  <p style={{ margin: '0 0 4px', color: theme.textMuted, fontSize: '14px' }}>Client Facturé</p>
                  <p style={{ margin: '0', fontWeight: '500' }}>{selectedInvoice.clientEmail}</p>
                </div>
              </div>
              
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '12px 0', borderBottom: `1px solid ${theme.border}`, textAlign: 'left', color: theme.textMuted, fontWeight: '500' }}>Désignation des produits</th>
                    <th style={{ padding: '12px 0', borderBottom: `1px solid ${theme.border}`, textAlign: 'right', color: theme.textMuted, fontWeight: '500' }}>Montant net (MAD)</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedInvoice.products.map(p => (
                    <tr key={p.id}>
                      <td style={{ padding: '16px 0', borderBottom: `1px solid ${theme.border}` }}>{p.name}</td>
                      <td style={{ padding: '16px 0', borderBottom: `1px solid ${theme.border}`, textAlign: 'right', fontWeight: '500' }}>{p.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ width: '300px', background: '#f8fafc', padding: '24px', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: theme.textMuted, fontWeight: '500' }}>Sous-total HT</span>
                    <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{(selectedInvoice.total * 0.8).toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                    <span style={{ color: theme.textMuted, fontWeight: '500' }}>TVA (20%)</span>
                    <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{(selectedInvoice.total * 0.2).toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '16px', borderTop: `1px solid ${theme.border}` }}>
                    <span style={{ color: theme.textMain, fontWeight: '600' }}>Total TTC</span>
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: theme.primary }}>{selectedInvoice.total.toFixed(2)} MAD</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
              {(!selectedInvoice.status || selectedInvoice.status === 'En attente') && (
                <button style={styles.buttonPrimary} onClick={() => updateOrderStatus(selectedInvoice.id, 'Validée')}>
                  ✓ Accepter & Valider la commande
                </button>
              )}
              <button style={styles.buttonOutline} onClick={() => window.print()}>
                🖨️ Générer la facture PDF
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Fournisseur;
