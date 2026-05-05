import React, { useState } from 'react';
import { initialMockProducts, initialMockSuppliers } from '../utils/constants';
import { clientTheme as theme, getStyles } from '../utils/theme';

const styles = getStyles(theme);

// --- Subcomponents for clean visual organization ---

const ClientLogin = ({ email, setEmail, password, setPassword, onLogin }) => (
  <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
    <div className="animate-slide-up" style={{ padding: '40px', width: '100%', maxWidth: '420px', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ width: '48px', height: '48px', background: theme.primary, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', boxShadow: '0 4px 6px rgba(79, 70, 229, 0.3)' }}>
          <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>H</span>
        </div>
        <h2 style={{ margin: 0, color: theme.textMain, fontSize: '24px', fontWeight: '700' }}>Client</h2>
        <p style={{ margin: '8px 0 0', color: theme.textMuted, fontSize: '14px' }}>Connectez-vous à votre espace client</p>
      </div>
      <form onSubmit={onLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '500', color: theme.textMain }}>Email</label>
          <input type="email" placeholder="nom@entreprise.com" value={email} onChange={e => setEmail(e.target.value)} required style={styles.input} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '500', color: theme.textMain }}>Mot de passe</label>
          <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required style={styles.input} />
        </div>
        <button type="submit" style={{ ...styles.buttonPrimary, padding: '14px', marginTop: '8px', fontSize: '15px' }}>Se connecter</button>
      </form>
    </div>
  </div>
);

const NavItem = ({ view, currentView, setCurrentView, label }) => (
  <button
    onClick={() => setCurrentView(view)}
    style={{
      background: currentView === view ? 'rgba(255,255,255,0.1)' : 'transparent',
      color: currentView === view ? '#fff' : '#cbd5e1',
      border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500',
      padding: '8px 12px', borderRadius: '6px', transition: 'all 0.2s'
    }}
  >
    {label}
  </button>
);

const ClientNavbar = ({ currentView, setCurrentView, onLogout }) => (
  <nav style={{ background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(20px)', padding: '0 30px', display: 'flex', justifyContent: 'center', borderBottom: `1px solid ${theme.border}`, position: 'sticky', top: 0, zIndex: 50 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1000px', height: '64px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '32px', height: '32px', background: theme.primary, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>H</span>
        </div>
        <h2 style={{ margin: 0, color: 'white', fontSize: '18px', fontWeight: '600', letterSpacing: '-0.5px' }}>HANOTI</h2>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <NavItem view="dashboard" label="Tableau de bord" currentView={currentView} setCurrentView={setCurrentView} />
        <NavItem view="ordering" label="Commander" currentView={currentView} setCurrentView={setCurrentView} />
        <NavItem view="history" label="Historique" currentView={currentView} setCurrentView={setCurrentView} />
        <div style={{ width: '1px', height: '24px', background: '#334155', margin: '0 10px' }}></div>
        <NavItem view="profile" label="Profil" currentView={currentView} setCurrentView={setCurrentView} />
        <button onClick={onLogout} style={{ ...styles.buttonDanger, padding: '8px 12px', marginLeft: '5px' }}>Déconnexion</button>
      </div>
    </div>
  </nav>
);

const DashboardView = ({ email, ordersHistory, setCurrentView }) => (
  <div>
    <div style={{ marginBottom: '24px' }}>
      <h1 style={{ fontSize: '28px', margin: '0 0 8px', color: theme.textMain }}>Bonjour, {email.split('@')[0]} 👋</h1>
      <p style={{ color: theme.textMuted, margin: 0 }}>Voici un résumé de votre activité sur la plateforme.</p>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
      <div style={styles.card}>
        <h3 style={{ margin: '0 0 10px', color: theme.textMuted, fontSize: '14px', fontWeight: '600', textTransform: 'uppercase' }}>Dernière commande</h3>
        <div style={{ fontSize: '32px', fontWeight: 'bold', color: theme.textMain }}>
          {ordersHistory.length > 0 ? `${ordersHistory[0].total} MAD` : 'Aucune'}
        </div>
      </div>
      <div style={styles.card}>
        <h3 style={{ margin: '0 0 10px', color: theme.textMuted, fontSize: '14px', fontWeight: '600', textTransform: 'uppercase' }}>Total commandes</h3>
        <div style={{ fontSize: '32px', fontWeight: 'bold', color: theme.primary }}>
          {ordersHistory.length}
        </div>
      </div>
    </div>
    <div style={styles.card}>
      <h2 style={{ margin: '0 0 16px', fontSize: '18px' }}>Raccourcis</h2>
      <div style={{ display: 'flex', gap: '16px' }}>
        <button onClick={() => setCurrentView('ordering')} style={styles.buttonPrimary}>
          Passer une nouvelle commande
        </button>
        <button onClick={() => setCurrentView('history')} style={styles.buttonOutline}>
          Voir tout l'historique
        </button>
      </div>
    </div>
  </div>
);

const ProfileView = ({ email }) => (
  <div style={styles.card}>
    <h2 style={{ margin: '0 0 20px', fontSize: '20px', borderBottom: `1px solid ${theme.border}`, paddingBottom: '16px' }}>Paramètres du profil</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
      <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#64748b' }}>
        {email[0].toUpperCase()}
      </div>
      <div>
        <h3 style={{ margin: '0 0 4px' }}>Photo de profil</h3>
        <p style={{ margin: 0, color: theme.textMuted, fontSize: '13px' }}>JPG, GIF ou PNG. Taille max. de 2MB.</p>
      </div>
    </div>
    <div>
      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '500', color: theme.textMain }}>Adresse Email Principale</label>
      <input type="text" readOnly value={email} style={{ ...styles.input, background: 'rgba(0,0,0,0.2)', opacity: 0.7, cursor: 'not-allowed' }} />
    </div>
  </div>
);

const SettingsView = () => (
  <div style={styles.card}>
    <h2 style={{ margin: '0 0 20px', fontSize: '20px', borderBottom: `1px solid ${theme.border}`, paddingBottom: '16px' }}>Configuration</h2>
    <p style={{ color: theme.textMuted }}>Cette page est en cours de développement. Les options de préférences arriveront bientôt.</p>
  </div>
);

// --- Main Client Component ---

const Client = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Data States
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('marketplace_products');
    return saved ? JSON.parse(saved) : initialMockProducts;
  });

  const [suppliers, setSuppliers] = useState(() => {
    const saved = localStorage.getItem('marketplace_suppliers');
    return saved ? JSON.parse(saved) : initialMockSuppliers;
  });

  const [ordersHistory, setOrdersHistory] = useState(() => {
    const saved = localStorage.getItem('marketplace_orders');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [selectedSupplierId, setSelectedSupplierId] = useState('');

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  const [showAddSupplier, setShowAddSupplier] = useState(false);
  const [newSupplierName, setNewSupplierName] = useState('');

  const [selectedInvoice, setSelectedInvoice] = useState(null);

  // Handlers
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('dashboard');
    setEmail('');
    setPassword('');
  };

  const handleProductToggle = (productId) => {
    setSelectedProductIds(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const handleAddProduct = () => {
    if (newProductName && newProductPrice) {
      const newP = { id: Date.now(), name: newProductName, price: parseFloat(newProductPrice) };
      const updated = [...products, newP];
      setProducts(updated);
      localStorage.setItem('marketplace_products', JSON.stringify(updated));
      setNewProductName('');
      setNewProductPrice('');
      setShowAddProduct(false);
    }
  };

  const handleAddSupplier = () => {
    if (newSupplierName) {
      const newS = { id: Date.now(), name: newSupplierName };
      const updated = [...suppliers, newS];
      setSuppliers(updated);
      localStorage.setItem('marketplace_suppliers', JSON.stringify(updated));
      setNewSupplierName('');
      setShowAddSupplier(false);
      setSelectedSupplierId(newS.id.toString());
    }
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();
    if (selectedProductIds.length === 0) return alert("Veuillez sélectionner au moins un produit.");
    if (!selectedSupplierId) return alert("Veuillez choisir un fournisseur.");

    const selectedProductsData = products.filter(p => selectedProductIds.includes(p.id));
    const selectedSupplierData = suppliers.find(s => s.id === parseInt(selectedSupplierId));
    const total = selectedProductsData.reduce((acc, curr) => acc + curr.price, 0);

    const newOrder = {
      id: "CMD-" + Math.floor(Math.random() * 10000),
      date: new Date().toLocaleDateString(),
      supplier: selectedSupplierData,
      products: selectedProductsData,
      total,
      clientEmail: email
    };

    const updatedOrders = [newOrder, ...ordersHistory];
    setOrdersHistory(updatedOrders);
    localStorage.setItem('marketplace_orders', JSON.stringify(updatedOrders));

    setSelectedProductIds([]);
    setSelectedSupplierId('');
    setCurrentView('history');
  };

  if (!isAuthenticated) {
    return <ClientLogin email={email} setEmail={setEmail} password={password} setPassword={setPassword} onLogin={handleLogin} />;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ClientNavbar currentView={currentView} setCurrentView={setCurrentView} onLogout={handleLogout} />

      <main className="animate-slide-up" style={{ flex: 1, padding: '40px 20px', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
        {currentView === 'dashboard' && <DashboardView email={email} ordersHistory={ordersHistory} setCurrentView={setCurrentView} />}
        {currentView === 'profile' && <ProfileView email={email} />}
        {currentView === 'settings' && <SettingsView />}

        {currentView === 'ordering' && (
          <div>
            <h1 style={{ fontSize: '28px', margin: '0 0 24px', color: theme.textMain }}>Nouvelle commande</h1>
            <form onSubmit={handleCreateOrder}>
              <div style={styles.card}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: 0, fontSize: '18px' }}>1. Sélection des produits</h3>
                  <button type="button" onClick={() => setShowAddProduct(!showAddProduct)} style={{ ...styles.buttonOutline, padding: '6px 12px' }}>
                    {showAddProduct ? 'Fermer' : 'Créer un produit'}
                  </button>
                </div>

                {showAddProduct && (
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', padding: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', border: `1px dashed ${theme.primary}` }}>
                    <input type="text" placeholder="Nom du produit..." value={newProductName} onChange={e => setNewProductName(e.target.value)} style={styles.input} />
                    <input type="number" placeholder="Prix" value={newProductPrice} onChange={e => setNewProductPrice(e.target.value)} style={{ ...styles.input, width: '120px' }} />
                    <button type="button" onClick={handleAddProduct} style={styles.buttonPrimary}>Ajouter</button>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                  {products.map(product => {
                    const isSelected = selectedProductIds.includes(product.id);
                    return (
                      <div key={product.id} onClick={() => handleProductToggle(product.id)} style={{ border: `1px solid ${isSelected ? theme.primary : theme.border}`, borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'center', backgroundColor: isSelected ? 'rgba(79, 70, 229, 0.2)' : 'rgba(255,255,255,0.03)', cursor: 'pointer', transition: 'all 0.2s', backdropFilter: 'blur(10px)' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '4px', border: `2px solid ${isSelected ? theme.primary : '#cbd5e1'}`, background: isSelected ? theme.primary : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>
                          {isSelected && <span style={{ color: 'white', fontSize: '12px' }}>✓</span>}
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ margin: '0 0 4px', fontSize: '15px' }}>{product.name}</h4>
                          <span style={{ color: theme.primary, fontWeight: '600', fontSize: '14px' }}>{product.price} MAD</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div style={styles.card}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: 0, fontSize: '18px' }}>2. Distributeur / Fournisseur</h3>
                  <button type="button" onClick={() => setShowAddSupplier(!showAddSupplier)} style={{ ...styles.buttonOutline, padding: '6px 12px' }}>
                    {showAddSupplier ? 'Fermer' : 'Créer fournisseur'}
                  </button>
                </div>

                {showAddSupplier && (
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', padding: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', border: `1px dashed ${theme.primary}` }}>
                    <input type="text" placeholder="Raison sociale du fournisseur..." value={newSupplierName} onChange={e => setNewSupplierName(e.target.value)} style={styles.input} />
                    <button type="button" onClick={handleAddSupplier} style={styles.buttonPrimary}>Ajouter</button>
                  </div>
                )}

                <select value={selectedSupplierId} onChange={(e) => setSelectedSupplierId(e.target.value)} style={{ ...styles.input, maxWidth: '400px' }} required>
                  <option value="" disabled> Sélectionnez un distributeur </option>
                  {suppliers.map(supplier => (
                    <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'flex', gap: '16px', paddingTop: '10px' }}>
                <button type="submit" style={{ ...styles.buttonPrimary, padding: '12px 24px', fontSize: '16px' }}>
                  Confirmer la commande
                </button>
                <button type="button" onClick={() => setCurrentView('dashboard')} style={{ ...styles.buttonOutline, padding: '12px 24px' }}>
                  Annuler
                </button>
              </div>
            </form>
          </div>
        )}

        {currentView === 'history' && (
          <div style={{ ...styles.card, padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '24px', borderBottom: `1px solid ${theme.border}` }}>
              <h2 style={{ margin: 0, fontSize: '20px' }}>Historique des commandes</h2>
            </div>

            {ordersHistory.length === 0 ? (
              <div style={{ padding: '40px', textAlign: 'center', color: theme.textMuted }}>
                Aucune commande enregistrée.
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '12px', textTransform: 'uppercase', color: theme.textMuted, fontWeight: '600', borderBottom: `1px solid ${theme.border}` }}>N° Ref</th>
                    <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '12px', textTransform: 'uppercase', color: theme.textMuted, fontWeight: '600', borderBottom: `1px solid ${theme.border}` }}>Date</th>
                    <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '12px', textTransform: 'uppercase', color: theme.textMuted, fontWeight: '600', borderBottom: `1px solid ${theme.border}` }}>Fournisseur</th>
                    <th style={{ padding: '16px 24px', textAlign: 'right', fontSize: '12px', textTransform: 'uppercase', color: theme.textMuted, fontWeight: '600', borderBottom: `1px solid ${theme.border}` }}>Total</th>
                    <th style={{ padding: '16px 24px', textAlign: 'center', fontSize: '12px', textTransform: 'uppercase', color: theme.textMuted, fontWeight: '600', borderBottom: `1px solid ${theme.border}` }}>Facture</th>
                  </tr>
                </thead>
                <tbody>
                  {ordersHistory.map((order, index) => (
                    <tr key={order.id} style={{ borderBottom: index === ordersHistory.length - 1 ? 'none' : `1px solid ${theme.border}` }}>
                      <td style={{ padding: '16px 24px', fontWeight: '500' }}>{order.id}</td>
                      <td style={{ padding: '16px 24px', color: theme.textMuted }}>{order.date}</td>
                      <td style={{ padding: '16px 24px' }}>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', border: `1px solid ${theme.border}`, padding: '4px 8px', borderRadius: '8px', fontSize: '13px' }}>
                          {order.supplier.name}
                        </span>
                      </td>
                      <td style={{ padding: '16px 24px', textAlign: 'right', fontWeight: '600', color: theme.textMain }}>{order.total} MAD</td>
                      <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                        <button onClick={() => { setSelectedInvoice(order); setCurrentView('invoice'); }} style={{ ...styles.buttonOutline, padding: '6px 12px', fontSize: '13px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                          Visualiser
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {currentView === 'invoice' && selectedInvoice && (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px' }}>
              <button onClick={() => setCurrentView('history')} style={{ background: 'transparent', border: 'none', color: theme.textMuted, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', padding: 0 }}>
                ← Revenir à l'historique
              </button>
            </div>

            <div style={{ ...styles.card, padding: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: `1px solid ${theme.border}`, paddingBottom: '32px', marginBottom: '32px' }}>
                <div>
                  <h1 style={{ margin: '0 0 8px', color: theme.textMain, fontSize: '32px' }}>Facture</h1>
                  <p style={{ margin: 0, color: theme.textMuted }}>Ref: <strong style={{ color: theme.textMain }}>{selectedInvoice.id}</strong></p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ margin: '0 0 4px', color: theme.textMuted, fontSize: '14px' }}>Facturé le</p>
                  <p style={{ margin: '0 0 16px', fontWeight: '500' }}>{selectedInvoice.date}</p>

                  <p style={{ margin: '0 0 4px', color: theme.textMuted, fontSize: '14px' }}>Fournisseur</p>
                  <p style={{ margin: '0', fontWeight: '500' }}>{selectedInvoice.supplier.name}</p>
                </div>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '12px 0', borderBottom: `1px solid ${theme.border}`, textAlign: 'left', color: theme.textMuted, fontWeight: '500' }}>Désignation</th>
                    <th style={{ padding: '12px 0', borderBottom: `1px solid ${theme.border}`, textAlign: 'right', color: theme.textMuted, fontWeight: '500' }}>Montant</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedInvoice.products.map(p => (
                    <tr key={p.id}>
                      <td style={{ padding: '16px 0', borderBottom: `1px solid ${theme.border}` }}>{p.name}</td>
                      <td style={{ padding: '16px 0', borderBottom: `1px solid ${theme.border}`, textAlign: 'right', fontWeight: '500' }}>{p.price.toFixed(2)} MAD</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ width: '300px', background: 'rgba(0,0,0,0.2)', padding: '24px', borderRadius: '8px', border: `1px solid ${theme.border}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: theme.textMuted, fontWeight: '500' }}>Total TTC</span>
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: theme.primary }}>{selectedInvoice.total.toFixed(2)} MAD</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <button style={styles.buttonPrimary} onClick={() => window.print()}>
                🖨️ Imprimer la facture
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Client;
