import React, { useState, useEffect } from 'react';

const initialMockProducts = [
  { id: 1, name: 'Produit A', price: 150 },
  { id: 2, name: 'Produit B', price: 300 },
  { id: 3, name: 'Produit C', price: 50 },
  { id: 4, name: 'Produit D', price: 120 },
];

const initialMockSuppliers = [
  { id: 1, name: 'Fournisseur Alpha' },
  { id: 2, name: 'Fournisseur Beta' },
  { id: 3, name: 'Fournisseur Gamma' },
];

const Client = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Lists loaded from localStorage or fallback to standard arrays
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('marketplace_products');
    return saved ? JSON.parse(saved) : initialMockProducts;
  });
  
  const [suppliers, setSuppliers] = useState(() => {
    const saved = localStorage.getItem('marketplace_suppliers');
    return saved ? JSON.parse(saved) : initialMockSuppliers;
  });

  // States
  const [currentView, setCurrentView] = useState('dashboard');
  
  // Initialize orders history from localStorage
  const [ordersHistory, setOrdersHistory] = useState(() => {
    const saved = localStorage.getItem('marketplace_orders');
    return saved ? JSON.parse(saved) : [];
  });
  
  // Ordering state
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [selectedSupplierId, setSelectedSupplierId] = useState('');
  
  // Custom items states
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  
  const [showAddSupplier, setShowAddSupplier] = useState(false);
  const [newSupplierName, setNewSupplierName] = useState('');

  // Invoice state
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsAuthenticated(true);
    }
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
    } else {
        alert("Veuillez remplir le nom et le prix du produit.");
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
      
      // Auto-select the newly added supplier
      setSelectedSupplierId(newS.id.toString());
    } else {
        alert("Veuillez remplir le nom du fournisseur.");
    }
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();
    if (selectedProductIds.length === 0) {
      alert("Veuillez sélectionner au moins un produit.");
      return;
    }
    if (!selectedSupplierId) {
      alert("Veuillez choisir un fournisseur.");
      return;
    }

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

  const showInvoice = (order) => {
    setSelectedInvoice(order);
    setCurrentView('invoice');
  };

  if (!isAuthenticated) {
    return (
      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h2>Accès Client</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ padding: '8px' }} />
          <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} required style={{ padding: '8px' }} />
          <button type="submit" style={{ padding: '10px', background: '#0275d8', color: 'white', border: 'none', cursor: 'pointer' }}>Se connecter</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Espace Client</h1>
        <button onClick={handleLogout} style={{ padding: '8px 15px', background: '#d9534f', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
          Déconnexion
        </button>
      </div>
      
      <div style={{ marginBottom: '20px', background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
        <button onClick={() => setCurrentView('ordering')} style={{ padding: '10px 15px', background: currentView === 'ordering' ? '#0056b3' : '#0275d8', color: 'white', border: 'none', cursor: 'pointer', marginRight: '10px', borderRadius: '4px' }}>
          Passer une commande
        </button>
        <button onClick={() => setCurrentView('history')} style={{ padding: '10px 15px', background: currentView === 'history' ? '#4cae4c' : '#5cb85c', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
          Historique des commandes
        </button>
      </div>

      {currentView === 'ordering' && (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h2>Nouvelle Commande</h2>
          <form onSubmit={handleCreateOrder}>
            <div style={{ marginBottom: '25px', background: '#fcfcfc', padding: '15px', border: '1px solid #eee' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ margin: 0 }}>1. Choisir les produits:</h3>
                <button type="button" onClick={() => setShowAddProduct(!showAddProduct)} style={{ padding: '5px 10px', background: '#17a2b8', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                  {showAddProduct ? 'Fermer' : '+ Nouveau produit'}
                </button>
              </div>

              {showAddProduct && (
                <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', padding: '10px', border: '1px dashed #17a2b8' }}>
                  <input type="text" placeholder="Nom du produit" value={newProductName} onChange={e => setNewProductName(e.target.value)} style={{ padding: '8px' }} />
                  <input type="number" placeholder="Prix" value={newProductPrice} onChange={e => setNewProductPrice(e.target.value)} style={{ padding: '8px', width: '100px' }} />
                  <button type="button" onClick={handleAddProduct} style={{ padding: '8px 15px', background: '#5cb85c', color: 'white', border: 'none', cursor: 'pointer' }}>Ajouter</button>
                </div>
              )}

              {products.map(product => (
                <div key={product.id} style={{ marginBottom: '5px' }}>
                  <label style={{ cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={selectedProductIds.includes(product.id)}
                      onChange={() => handleProductToggle(product.id)}
                      style={{ marginRight: '10px' }}
                    />
                    {product.name} - {product.price} MAD
                  </label>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '25px', background: '#fcfcfc', padding: '15px', border: '1px solid #eee' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ margin: 0 }}>2. Choisir le fournisseur:</h3>
                <button type="button" onClick={() => setShowAddSupplier(!showAddSupplier)} style={{ padding: '5px 10px', background: '#17a2b8', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                  {showAddSupplier ? 'Fermer' : '+ Nouveau fournisseur'}
                </button>
              </div>

              {showAddSupplier && (
                <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', padding: '10px', border: '1px dashed #17a2b8' }}>
                  <input type="text" placeholder="Nom du fournisseur" value={newSupplierName} onChange={e => setNewSupplierName(e.target.value)} style={{ padding: '8px', flex: 1 }} />
                  <button type="button" onClick={handleAddSupplier} style={{ padding: '8px 15px', background: '#5cb85c', color: 'white', border: 'none', cursor: 'pointer' }}>Ajouter</button>
                </div>
              )}

              <select 
                value={selectedSupplierId} 
                onChange={(e) => setSelectedSupplierId(e.target.value)}
                style={{ padding: '8px', width: '100%', maxWidth: '300px' }}
                required
              >
                <option value="">-- Sélectionnez un fournisseur --</option>
                {suppliers.map(supplier => (
                  <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
                ))}
              </select>
            </div>

            <div>
              <button type="submit" style={{ padding: '10px 20px', background: '#0275d8', color: 'white', border: 'none', cursor: 'pointer', marginRight: '10px', borderRadius: '4px' }}>
                Confirmer la commande
              </button>
              <button type="button" onClick={() => setCurrentView('dashboard')} style={{ padding: '10px 20px', background: '#ccc', color: '#333', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      {currentView === 'history' && (
        <div>
          <h2>Historique de vos commandes</h2>
          {ordersHistory.length === 0 ? (
            <p>Vous n'avez passé aucune commande pour le moment.</p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
              <thead>
                <tr style={{ background: '#eee' }}>
                  <th style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'left' }}>N° Commande</th>
                  <th style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'left' }}>Date</th>
                  <th style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'left' }}>Fournisseur</th>
                  <th style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'right' }}>Total</th>
                  <th style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'center' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {ordersHistory.map(order => (
                  <tr key={order.id}>
                    <td style={{ padding: '8px', border: '1px solid #ccc' }}>{order.id}</td>
                    <td style={{ padding: '8px', border: '1px solid #ccc' }}>{order.date}</td>
                    <td style={{ padding: '8px', border: '1px solid #ccc' }}>{order.supplier.name}</td>
                    <td style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'right' }}>{order.total} MAD</td>
                    <td style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'center' }}>
                      <button 
                        onClick={() => showInvoice(order)}
                        style={{ padding: '5px 10px', background: '#f0ad4e', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
                      >
                        Générer la facture
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
        <div style={{ marginTop: '20px', padding: '20px', border: '2px solid #333', borderRadius: '8px', background: '#f9f9f9', color: '#333' }}>
          <h2 style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px', marginTop: 0 }}>Facture de la commande {selectedInvoice.id}</h2>
          <p><strong>Date :</strong> {selectedInvoice.date}</p>
          <p><strong>Fournisseur :</strong> {selectedInvoice.supplier.name}</p>
          <p><strong>Client :</strong> {selectedInvoice.clientEmail}</p>
          
          <h3 style={{ marginTop: '20px' }}>Détails de la facture :</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ background: '#eee' }}>
                <th style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'left' }}>Produit</th>
                <th style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'right' }}>Prix</th>
              </tr>
            </thead>
            <tbody>
              {selectedInvoice.products.map(p => (
                <tr key={p.id}>
                  <td style={{ padding: '8px', border: '1px solid #ccc' }}>{p.name}</td>
                  <td style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'right' }}>{p.price} MAD</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td style={{ padding: '8px', border: '1px solid #ccc', fontWeight: 'bold', textAlign: 'right' }}>Total à payer</td>
                <td style={{ padding: '8px', border: '1px solid #ccc', fontWeight: 'bold', textAlign: 'right' }}>{selectedInvoice.total} MAD</td>
              </tr>
            </tfoot>
          </table>

          <button 
            onClick={() => setCurrentView('history')}
            style={{ padding: '10px 20px', background: '#0275d8', color: 'white', border: 'none', cursor: 'pointer', marginTop: '20px', borderRadius: '4px' }}
          >
            Retour à l'historique
          </button>
        </div>
      )}
    </div>
  );
};

export default Client;
