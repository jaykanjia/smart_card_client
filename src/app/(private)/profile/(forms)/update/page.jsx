'use client';
import AxiosInstance from '@/AxiosInstance';
import { toast } from 'react-toastify';
import UpdateCard from '@/components/UpdateCard';
import { useEffect, useState } from 'react';

const page = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await AxiosInstance.get('/profile', {
                headers: {
                    'auth-token': localStorage.getItem('AUTH_TOKEN'),
                },
            });
            setUserData(response?.data?.data);
        } catch (error) {
            toast.error(error?.response?.data?.error);
            router.back();
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();

        return () => {};
    }, []);

    const submitFunction = async (data) => {
        try {
            const response = await AxiosInstance.put('/profile', data, {
                headers: {
                    'auth-token': localStorage.getItem('AUTH_TOKEN'),
                },
            });
            toast.success(response?.data?.message);
        } catch (error) {
            toast.error(error?.response?.data?.error);
        }
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return <UpdateCard submitFunction={submitFunction} data={userData} />;
};

export default page;
