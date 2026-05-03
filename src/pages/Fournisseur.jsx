import React, { useState, useEffect } from 'react';

const Fournisseur = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [showNotifications, setShowNotifications] = useState(false);
  const [receivedOrders, setReceivedOrders] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  // Load orders from localStorage
  const loadOrders = () => {
    const storedOrders = localStorage.getItem('marketplace_orders');
    if (storedOrders) {
      setReceivedOrders(JSON.parse(storedOrders));
    }
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
    if (email && password) {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowNotifications(false);
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

  if (!isAuthenticated) {
    return (
      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h2>Accès Fournisseur</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ padding: '8px' }} />
          <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} required style={{ padding: '8px' }} />
          <button type="submit" style={{ padding: '10px', background: '#5cb85c', color: 'white', border: 'none', cursor: 'pointer' }}>Se connecter</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Espace Fournisseur</h1>
        <div>
          <button 
            onClick={() => {
                setShowNotifications(!showNotifications);
                setSelectedInvoice(null);
            }}
            style={{ 
              padding: '8px 15px', 
              background: '#f0ad4e', 
              color: 'white', 
              border: 'none', 
              cursor: 'pointer', 
              borderRadius: '4px',
              marginRight: '10px',
              position: 'relative'
            }}
          >
            🔔 Notifications 
            {receivedOrders.length > 0 && (
              <span style={{ 
                background: 'red', 
                color: 'white', 
                borderRadius: '50%', 
                padding: '2px 6px', 
                fontSize: '12px', 
                position: 'absolute', 
                top: '-5px', 
                right: '-10px' 
              }}>
                {receivedOrders.length}
              </span>
            )}
          </button>
          <button onClick={handleLogout} style={{ padding: '8px 15px', background: '#d9534f', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
            Déconnexion
          </button>
        </div>
      </div>
      
      <p>Bienvenue dans votre espace fournisseur.</p>

      {showNotifications && !selectedInvoice && (
        <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', background: '#fff' }}>
          <h2>Commandes reçues</h2>
          {receivedOrders.length === 0 ? (
            <p>Vous n'avez reçu aucune commande pour le moment.</p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
              <thead>
                <tr style={{ background: '#eee' }}>
                  <th style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'left' }}>N° Commande</th>
                  <th style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'left' }}>Date</th>
                  <th style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'left' }}>Client</th>
                  <th style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'right' }}>Total</th>
                  <th style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'center' }}>Statut</th>
                  <th style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'center' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {receivedOrders.map(order => (
                  <tr key={order.id}>
                    <td style={{ padding: '8px', border: '1px solid #ccc' }}>{order.id}</td>
                    <td style={{ padding: '8px', border: '1px solid #ccc' }}>{order.date}</td>
                    <td style={{ padding: '8px', border: '1px solid #ccc' }}>{order.clientEmail}</td>
                    <td style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'right' }}>{order.total} MAD</td>
                    <td style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'center', color: order.status === 'Validée' ? 'green' : '#f0ad4e', fontWeight: 'bold' }}>
                      {order.status || 'En attente'}
                    </td>
                    <td style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'center' }}>
                      <button 
                        onClick={() => setSelectedInvoice(order)}
                        style={{ padding: '5px 10px', background: '#0275d8', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
                      >
                        Gérer la facture
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {selectedInvoice && (
        <div style={{ marginTop: '20px', padding: '20px', border: '2px solid #333', borderRadius: '8px', background: '#f9f9f9', color: '#333' }}>
          <h2 style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px', marginTop: 0 }}>Gestion de la facture : {selectedInvoice.id}</h2>
          <p><strong>Date :</strong> {selectedInvoice.date}</p>
          <p><strong>Client (Email) :</strong> {selectedInvoice.clientEmail}</p>
          <p><strong>Statut :</strong> <span style={{ color: selectedInvoice.status === 'Validée' ? 'green' : '#f0ad4e', fontWeight: 'bold' }}>{selectedInvoice.status || 'En attente'}</span></p>
          
          <h3 style={{ marginTop: '20px' }}>Détails des produits :</h3>
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
                <td style={{ padding: '8px', border: '1px solid #ccc', fontWeight: 'bold', textAlign: 'right' }}>Total à facturer</td>
                <td style={{ padding: '8px', border: '1px solid #ccc', fontWeight: 'bold', textAlign: 'right' }}>{selectedInvoice.total} MAD</td>
              </tr>
            </tfoot>
          </table>

          <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
            {(!selectedInvoice.status || selectedInvoice.status === 'En attente') && (
              <button 
                onClick={() => updateOrderStatus(selectedInvoice.id, 'Validée')}
                style={{ padding: '10px 20px', background: '#5cb85c', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}
              >
                Valider la commande
              </button>
            )}
            <button 
              onClick={() => {
                alert("La facture est prête pour l'impression.");
              }}
              style={{ padding: '10px 20px', background: '#17a2b8', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
            >
              Imprimer la facture
            </button>
            <button 
              onClick={() => setSelectedInvoice(null)}
              style={{ padding: '10px 20px', background: '#6c757d', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
            >
              Retour aux notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fournisseur;
