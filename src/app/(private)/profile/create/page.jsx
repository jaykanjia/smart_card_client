'use client';
import React, { useState } from 'react';
import ProfileForm from './(forms)/ProfileForm';
import ProfileForm1 from './(forms)/ProfileForm1';
import ProfileForm2 from './(forms)/ProfileForm2';
import Preview from './(forms)/Preview';

const page = () => {
    const [formIndex, setFormIndex] = useState(0);
    const [profileData, setProfileData] = useState({});

    if (formIndex === 1) {
        return (
            <ProfileForm1
                setFormIndex={setFormIndex}
                setData={setProfileData}
            />
        );
    } else if (formIndex === 2) {
        return (
            <ProfileForm2
                setFormIndex={setFormIndex}
                setData={setProfileData}
            />
        );
    } else if (formIndex === 3) {
        return <Preview setFormIndex={setFormIndex} data={profileData} />;
    } else {
        return (
            <ProfileForm setFormIndex={setFormIndex} setData={setProfileData} />
        );
    }
};

export default page;
