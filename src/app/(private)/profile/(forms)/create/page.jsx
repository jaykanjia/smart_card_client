'use client';
import React from 'react';
import CreateCard from '@/components/CreateCard';
import AxiosInstance from '@/AxiosInstance';
import { toast } from 'react-toastify';

const page = () => {
    const submitFunction = async (data) => {
        try {
            const response = await AxiosInstance.post('/profile', data, {
                headers: {
                    'auth-token': localStorage.getItem('AUTH_TOKEN'),
                },
            });
            toast.success(response?.data?.message);
        } catch (error) {
            toast.error(error?.response?.data?.error);
        }
    };

    return <CreateCard submitFunction={submitFunction} />;
};

export default page;
