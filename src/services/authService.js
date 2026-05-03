import api from './api';

export const authService = {
  // Prépare le cookie CSRF si vous utilisez l'authentification native Sanctum SPA
  csrf: () => api.get('/sanctum/csrf-cookie', { 
    baseURL: process.env.REACT_APP_API_URL?.replace('/api', '') || 'http://localhost:8000' 
  }),
  
  login: async (credentials) => {
    // await authService.csrf(); // À décommenter si vous utilisez Sanctum SPA
    const response = await api.post('/login', credentials);
    return response.data;
  },
  
  register: async (userData) => {
    const response = await api.post('/register', userData);
    return response.data;
  },

  logout: async () => {
    const response = await api.post('/logout');
    return response.data;
  },
  
  getProfile: async () => {
    const response = await api.get('/user');
    return response.data;
  }
};
