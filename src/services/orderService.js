import api from './api';

export const orderService = {
  // Récupérer les commandes (Côté Client ou Côté Fournisseur selon le rôle géré par le backend)
  fetchOrders: async () => {
    const response = await api.get('/orders');
    return response.data;
  },
  
  // Créer une nouvelle commande (Soumise par le client)
  createOrder: async (orderPayload) => {
    const response = await api.post('/orders', orderPayload);
    return response.data;
  },
  
  // Mettre à jour le statut d'une commande (Effectué par le fournisseur)
  updateOrderStatus: async (orderId, newStatus) => {
    const response = await api.patch(`/orders/${orderId}/status`, { status: newStatus });
    return response.data;
  },

  // Récupérer une facture spécifique
  getInvoice: async (orderId) => {
    const response = await api.get(`/orders/${orderId}/invoice`);
    return response.data;
  }
};
