'use client';
import Login from '@/components/Login';
import Register from '@/components/Register';
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import AxiosInstance from '@/AxiosInstance';
import { toast } from 'react-toastify';

const page = () => {
    const router = useRouter();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await AxiosInstance.post('/user/register', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });
            toast.success('Registered Successfull');
            router.push('/dashboard');
        } catch (error) {
            toast.alert(error?.response?.data?.error);
        }
    };

    return (
        <>
            <Register
                onSubmit={onSubmit}
                nameRef={nameRef}
                emailRef={emailRef}
                passwordRef={passwordRef}
            />
        </>
    );
};

export default page;
