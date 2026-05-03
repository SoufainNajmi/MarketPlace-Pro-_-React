import React, { useState } from 'react';

const mockProducts = [
  { id: 1, name: 'Produit A', price: 150 },
  { id: 2, name: 'Produit B', price: 300 },
  { id: 3, name: 'Produit C', price: 50 },
  { id: 4, name: 'Produit D', price: 120 },
];

const mockSuppliers = [
  { id: 1, name: 'Fournisseur Alpha' },
  { id: 2, name: 'Fournisseur Beta' },
  { id: 3, name: 'Fournisseur Gamma' },
];

const Client = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Order state
  const [isOrdering, setIsOrdering] = useState(false);
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [selectedSupplierId, setSelectedSupplierId] = useState('');
  const [invoice, setInvoice] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsAuthenticated(true);
    }
  };

  const handleProductToggle = (productId) => {
    setSelectedProductIds(prev => 
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
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

    const selectedProductsData = mockProducts.filter(p => selectedProductIds.includes(p.id));
    const selectedSupplierData = mockSuppliers.find(s => s.id === parseInt(selectedSupplierId));
    
    const total = selectedProductsData.reduce((acc, curr) => acc + curr.price, 0);

    const newInvoice = {
      id: "FACT-" + Math.floor(Math.random() * 10000),
      date: new Date().toLocaleDateString(),
      supplier: selectedSupplierData,
      products: selectedProductsData,
      total
    };

    setInvoice(newInvoice);
    setIsOrdering(false);
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
      <h1>Espace Client</h1>
      <p>Bienvenue dans votre espace client.</p>

      {!isOrdering && !invoice && (
        <button 
          onClick={() => setIsOrdering(true)}
          style={{ padding: '10px 20px', background: '#5cb85c', color: 'white', border: 'none', cursor: 'pointer', marginTop: '10px' }}
        >
          Passer une commande
        </button>
      )}

      {isOrdering && (
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h2>Nouvelle Commande</h2>
          <form onSubmit={handleCreateOrder}>
            <div style={{ marginBottom: '15px' }}>
              <h3>1. Choisir les produits:</h3>
              {mockProducts.map(product => (
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

            <div style={{ marginBottom: '20px' }}>
              <h3>2. Choisir le fournisseur:</h3>
              <select 
                value={selectedSupplierId} 
                onChange={(e) => setSelectedSupplierId(e.target.value)}
                style={{ padding: '8px', width: '100%', maxWidth: '300px' }}
                required
              >
                <option value="">-- Sélectionnez un fournisseur --</option>
                {mockSuppliers.map(supplier => (
                  <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
                ))}
              </select>
            </div>

            <div>
              <button type="submit" style={{ padding: '10px 20px', background: '#0275d8', color: 'white', border: 'none', cursor: 'pointer', marginRight: '10px' }}>
                Confirmer la commande
              </button>
              <button type="button" onClick={() => setIsOrdering(false)} style={{ padding: '10px 20px', background: '#d9534f', color: 'white', border: 'none', cursor: 'pointer' }}>
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      {invoice && (
        <div style={{ marginTop: '30px', padding: '20px', border: '2px solid #333', borderRadius: '8px', background: '#f9f9f9', color: '#333' }}>
          <h2 style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px', marginTop: 0 }}>Facture {invoice.id}</h2>
          <p><strong>Date :</strong> {invoice.date}</p>
          <p><strong>Fournisseur :</strong> {invoice.supplier.name}</p>
          
          <h3 style={{ marginTop: '20px' }}>Détails de la commande :</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ background: '#eee' }}>
                <th style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'left' }}>Produit</th>
                <th style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'right' }}>Prix</th>
              </tr>
            </thead>
            <tbody>
              {invoice.products.map(p => (
                <tr key={p.id}>
                  <td style={{ padding: '8px', border: '1px solid #ccc' }}>{p.name}</td>
                  <td style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'right' }}>{p.price} MAD</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td style={{ padding: '8px', border: '1px solid #ccc', fontWeight: 'bold', textAlign: 'right' }}>Total</td>
                <td style={{ padding: '8px', border: '1px solid #ccc', fontWeight: 'bold', textAlign: 'right' }}>{invoice.total} MAD</td>
              </tr>
            </tfoot>
          </table>

          <button 
            onClick={() => {
              setInvoice(null);
              setSelectedProductIds([]);
              setSelectedSupplierId('');
            }}
            style={{ padding: '10px 20px', background: '#0275d8', color: 'white', border: 'none', cursor: 'pointer', marginTop: '20px' }}
          >
            Nouvelle Commande
          </button>
        </div>
      )}
    </div>
  );
};

export default Client;
