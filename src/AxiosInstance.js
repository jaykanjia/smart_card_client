import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: `${process.env.SERVER_URL}/api`,
    // timeout: 1500,
    headers: {},
});

export default AxiosInstance;
