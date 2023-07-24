import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'https://smart-card-server.vercel.app/api',
    // timeout: 1500,
    headers: {},
});

export default AxiosInstance;
