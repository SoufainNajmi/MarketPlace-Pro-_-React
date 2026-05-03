import api from './api';

export const catalogService = {
  // Obtenir la liste des produits depuis la base de données Laravel
  getProducts: async () => {
    const response = await api.get('/products');
    return response.data;
  },
  
  // Obtenir la liste des fournisseurs valides
  getSuppliers: async () => {
    const response = await api.get('/suppliers');
    return response.data;
  },

  // Ajouter un produit (Si nécessaire dans votre interface)
  addProduct: async (productData) => {
    const response = await api.post('/products', productData);
    return response.data;
  }
};
