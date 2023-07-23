'use client';
import React, { useState, useEffect } from 'react';
import Loading from '@/components/Loading';
import ImageContentSection from '@/components/IamgeContent';

const page = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    });

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <ImageContentSection />
        </>
    );
};

export default page;
