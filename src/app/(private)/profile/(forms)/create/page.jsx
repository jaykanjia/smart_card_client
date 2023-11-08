'use client';
import React, { useState } from 'react';
import CreateCard from '@/components/CreateCard';
import AxiosInstance from '@/AxiosInstance';
import { toast } from 'react-toastify';

const page = () => {
    const [isPending, setIsPending] = useState(false);

    const submitFunction = async (data) => {
        setIsPending(true);
        try {
            const response = await AxiosInstance.post('/profile', data, {
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

    return <CreateCard submitFunction={submitFunction} isPending={isPending} />;
};

export default page;
