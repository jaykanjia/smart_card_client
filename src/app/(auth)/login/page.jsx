'use client';
import { useRef, useState } from 'react';
import Login from '@/components/Login';
import AxiosInstance from '@/AxiosInstance';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const page = () => {
    const router = useRouter();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [isPending, setIsPending] = useState();

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true);
        try {
            const response = await AxiosInstance.post('/user/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });
            localStorage.setItem('AUTH_TOKEN', response.data.authToken);
            toast.success('Login Successfull');
            router.push('/dashboard');
        } catch (error) {
            toast.error(error?.response?.data?.error);
        } finally {
            setIsPending(false);
        }
    };

    return (
        <>
            <Login
                onSubmit={onSubmit}
                emailRef={emailRef}
                passwordRef={passwordRef}
                isPending={isPending}
            />
        </>
    );
};

export default page;
