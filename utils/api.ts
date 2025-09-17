import axios from 'axios';
const API = axios.create({
  baseURL: 'https://school-payment-frontend-puce.vercel.app/',
  headers: { 'Content-Type': 'application/json' }
});
API.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default API;
