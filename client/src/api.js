import axios from 'axios';

// --- HARDCODED URL (We will change this back if you develop locally later) ---
const API_URL = 'https://coursebete.onrender.com/api'; 

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;