'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const layout = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem('AUTH_TOKEN');
        if (!token) router.push('/login');
    });

    return (
        <div className="relative w-screen h-screen overflow-scroll">
            {children}
        </div>
    );
};

export default layout;
