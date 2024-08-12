import axios from 'axios';
import config from '../../config/config';

const api = axios.create({
  baseURL: config.API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (error.response && error.response.status === 401) {
    //   sessionStorage.removeItem('token');
    //   window.location = '/login';
    // }
    return Promise.reject(error);
  }
);

export default api;
