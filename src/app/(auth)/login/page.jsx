'use client';
import React, { useEffect, useState, useRef } from 'react';
import Login from '@/components/Login';
import AxiosInstance from '@/AxiosInstance';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
    const emailRef = useRef();
    const passwordRef = useRef();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await AxiosInstance.post('/user/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });
            console.log(response.data);
            sessionStorage.setItem('AUTH_TOKEN', response.data.authToken);
            window.alert('Login Successfull');
            router.push('/dashboard');
        } catch (error) {
            console.log(error);
            window.alert(error?.response?.data?.error);
        }
    };

    return (
        <>
            <Login
                onSubmit={onSubmit}
                emailRef={emailRef}
                passwordRef={passwordRef}
            />
        </>
    );
};

export default page;
