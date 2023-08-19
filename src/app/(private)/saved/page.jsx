'use client';
import AxiosInstance from '@/AxiosInstance';
import Card from '@/components/Card';
import Header2 from '@/components/Header2';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import FloatingBtn from '@/components/FloatingBtn';
import BackBtn from '@/components/BackBtn';

const page = () => {
    const [profiles, setProfiles] = useState([]);

    const fetchData = async () => {
        try {
            const response = await AxiosInstance.get('/cards', {
                headers: {
                    'auth-token': localStorage.getItem('AUTH_TOKEN'),
                },
            });
            const cardIds = response?.data?.data?.savedCards;
            const data = [];
            for (let i = 0; i < cardIds.length; i++) {
                const res = await AxiosInstance.get(`/profile/${cardIds[i]}`);
                data.push(res.data.data);
            }
            setProfiles(data);
        } catch (error) {
            toast.error(error?.response?.data?.error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='max-w-7xl mx-auto bg-dark-700 relative '>
            <Header2 />
            <div className="flex flex-wrap gap-8 justify-center  w-auto p-10 mx-auto">
                {profiles.map((item) => {
                    return <Card key={item.id} data={item} />;
                })}
            </div>
        </div>
    );
};

export default page;
