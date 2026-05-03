import axios from 'axios';

// Instance Axios configurée pour communiquer avec le backend Laravel
const api = axios.create({
  // Modifiez cette URL en fonction de l'adresse de votre backend Laravel local ou distant
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api', 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  // Requis si vous utilisez Laravel Sanctum pour l'authentification SPA basée sur les cookies
  // withCredentials: true,
});

// Intercepteur de requêtes : ajoute automatiquement le token JWT s'il existe
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('marketplace_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Intercepteur de réponses : gère les erreurs globales
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Si le backend renvoie 401 Unauthorized, on déconnecte l'utilisateur
      console.warn('Session expirée ou non autorisée.');
      localStorage.removeItem('marketplace_token');
      // Vous pourriez déclencher un événement pour forcer "setIsAuthenticated(false)"
      window.dispatchEvent(new Event('auth_unauthorized'));
    }
    return Promise.reject(error);
  }
);

export default api;
