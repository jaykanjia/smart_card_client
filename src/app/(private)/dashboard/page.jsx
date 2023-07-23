'use client';
import React, { useState, useEffect } from 'react';
import Loading from '@/components/Loading';

const page = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    });

    if (loading) {
        return <Loading />;
    }
    return <div>page</div>;
};

export default page;
