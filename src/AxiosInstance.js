import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'http://localhost:5001/api/',
    timeout: 1000,
    headers: {},
});

export default AxiosInstance;
