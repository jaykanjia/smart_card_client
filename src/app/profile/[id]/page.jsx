'use client';
import AxiosInstance from '@/AxiosInstance';
import Template from '@/components/Template';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const page = ({ params }) => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(async () => {
        setLoading(true);
        try {
            const response = await AxiosInstance.get(`/profile/${params.id}`);
            setUserData(response.data.data);
        } catch (error) {
            console.log(error);
            window.alert(error.response.data.error);
            router.push('/404');
        }
        setLoading(false);
    }, []);

    if (loading) {
        return <div>LOADING...</div>;
    }

    return (
        // <div className="flex gap-8 min-h-screen flex-col justify-between p-24">
        //     <div className="">Profile Page {params.id}</div>
        // </div>
        <main className="max-w-7xl mx-auto">
            <Template data={userData} />
        </main>
    );
};

export default page;
