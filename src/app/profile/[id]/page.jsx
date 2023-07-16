'use client';
import Template from '@/components/Template';
import React from 'react';

const page = ({ params }) => {
    return (
        // <div className="flex gap-8 min-h-screen flex-col justify-between p-24">
        //     <div className="">Profile Page {params.id}</div>
        // </div>
        <main>
            <Template />
        </main>
    );
};

export default page;
