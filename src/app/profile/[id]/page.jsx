'use client';
import AxiosInstance from '@/AxiosInstance';
import Template from '@/components/Template';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Login from '@/components/Login';
import CancelBtn from '@/components/CancelBtn';

const page = ({ params }) => {
    const router = useRouter();

    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [showLoginForm, setShowLoginForm] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();

    const onLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await AxiosInstance.post('/user/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });
            localStorage.setItem('AUTH_TOKEN', response.data.authToken);
            toast.success('Login Successfull');
            setShowLoginForm(false);
        } catch (error) {
            toast.error(error?.response?.data?.error);
        }
    };

    const saveContact = async () => {
        const data = { data: userData.userId };
        try {
            const response = await AxiosInstance.post('/cards', data, {
                headers: {
                    'auth-token': localStorage.getItem('AUTH_TOKEN'),
                },
            });
            console.log(response);
            toast.success(response?.data?.message);
        } catch (error) {
            toast.error(error?.response?.data?.error);
        }
    };

    const handleSaveContact = () => {
        // check if user is logged in
        const authToken = localStorage.getItem('AUTH_TOKEN');
        if (!authToken) {
            setShowLoginForm(true);
            toast.info('Login required');
        } else {
            toast.success('You are logged in :)...');
            saveContact();
        }
    };

    useEffect(async () => {
        setLoading(true);
        try {
            const response = await AxiosInstance.get(`/profile/${params.id}`);
            setUserData(response.data.data);
        } catch (error) {
            console.log(error);
            toast.alert(error?.response?.data?.error);
            router.push('/404');
        }
        setLoading(false);
    }, []);

    if (loading) {
        return <div>LOADING...</div>;
    }

    if (showLoginForm) {
        return (
            <main
                className={`relative w-full min-h-[100vh] flex justify-center items-center bg-[#323f4b] sm:bg-[#222222]`}
            >
                <div
                    className={`max-w-[500px] w-[100%] bg-[#323f4b] sm:p-[25px_30px] p-[15px_20px] sm:m-[0px_30px] m-[0px_15px] rounded-[10px]`}
                >
                    <Login
                        onSubmit={onLogin}
                        emailRef={emailRef}
                        passwordRef={passwordRef}
                    />
                    <CancelBtn setState={setShowLoginForm} />
                </div>
            </main>
        );
    }

    return (
        // <div className="flex gap-8 min-h-screen flex-col justify-between p-24">
        //     <div className="">Profile Page {params.id}</div>
        // </div>
        <main className="max-w-7xl mx-auto">
            <Template data={userData} />
            <div className="absolute bottom-6 left-0 w-full flex items-center justify-center">
                <button
                    className="bg-blue-700 hover:bg-blue-500 p-4 min-w-[200px] w-[90%] md:w-[60%] rounded-xl duration-300"
                    onClick={handleSaveContact}
                >
                    Save Card
                </button>
            </div>
        </main>
    );
};

export default page;
