import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/', // Remplacez par l'URL de base de votre API
    // autres configurations globales si nécessaire
});

axiosInstance.interceptors.request.use(
    (config:any) => {
        const token = localStorage.getItem('token'); // Ou obtenez-le de votre state/contexte global
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error:any) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;