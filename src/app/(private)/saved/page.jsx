'use client';
import AxiosInstance from '@/AxiosInstance';
import Card from '@/components/Card';
import Header2 from '@/components/Header2';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import styles from './styles.module.css';

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
        <div className="max-w-screen-xl mx-auto bg-light-500 dark:bg-dark-700 py-4">
            <Header2 />
            <div
                className={clsx([
                    'min-h-screen p-8 md:px-20',
                    styles.gridContainer,
                ])}
            >
                {profiles.map((item) => {
                    return <Card key={item.id} data={item} />;
                })}
            </div>
        </div>
    );
};

export default page;
