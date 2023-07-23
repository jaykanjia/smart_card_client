'use client';
import AxiosInstance from '@/AxiosInstance';
import Template from '@/components/Template';
import React, { useState, useEffect } from 'react';

const page = ({ params }) => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        setLoading(true);
        try {
            const response = await AxiosInstance.get(`/profile/${params.id}`);
            setUserData(response.data.data);
        } catch (error) {
            console.log(error);
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
        <main>
            <Template data={userData} />
        </main>
    );
};

export default page;
