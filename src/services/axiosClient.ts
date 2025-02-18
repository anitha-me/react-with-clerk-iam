import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 300000,
  // TODO: add headers
});

// TODO: Add request and response interceptor
