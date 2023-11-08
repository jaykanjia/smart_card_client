'use client';
import AxiosInstance from '@/AxiosInstance';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import UpdateCard from '@/components/UpdateCard';
import Loading from '@/components/Loading';

const page = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [isPending, setIsPending] = useState(false);

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
        setIsPending(true);
        try {
            const response = await AxiosInstance.put('/profile', data, {
                headers: {
                    'auth-token': localStorage.getItem('AUTH_TOKEN'),
                },
            });
            toast.success(response?.data?.message);
        } catch (error) {
            toast.error(error?.response?.data?.error);
        } finally {
            setIsPending(false);
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <UpdateCard
            submitFunction={submitFunction}
            data={userData}
            isPending={isPending}
        />
    );
};

export default page;
