import axios from 'axios';
import url from './url';

const AxiosInstance = axios.create({
    baseURL: `${url.SERVER_URL}/api`,
    // timeout: 1500,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default AxiosInstance;
