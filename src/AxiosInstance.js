import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api`,
    // timeout: 1500,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default AxiosInstance;
