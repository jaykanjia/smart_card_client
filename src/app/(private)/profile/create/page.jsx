'use client';
import React, { useState } from 'react';
import ProfileForm from './(forms)/ProfileForm';
import ProfileForm1 from './(forms)/ProfileForm1';
import ProfileForm2 from './(forms)/ProfileForm2';

const page = () => {
    const [formIndex, setFormIndex] = useState(0);

    if (formIndex === 0) {
        return <ProfileForm setFormIndex={setFormIndex} />;
    } else if (formIndex === 1) {
        return <ProfileForm1 setFormIndex={setFormIndex} />;
    } else if (formIndex === 2) {
        return <ProfileForm2 setFormIndex={setFormIndex} />;
    }
};

export default page;
