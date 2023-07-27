import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: `${process.env.CLIENT_URL}/api`,
    // timeout: 1500,
    headers: {},
});

export default AxiosInstance;
