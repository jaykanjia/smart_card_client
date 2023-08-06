'use client';
import React, { useRef } from 'react';
import Login from '@/components/Login';
import AxiosInstance from '@/AxiosInstance';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

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
            toast.success('Login Successfull');
            router.push('/dashboard');
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.error);
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
