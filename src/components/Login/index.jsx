'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();

    const handleClik = () => {
        router.push('/myprofile');
    };

    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <div className={`text-center font-semibold text-gray-500`}>
                        WELCOME BACK
                    </div>
                    <div
                        className={`text-2xl font-semibold text-center text-white`}
                    >
                        Login to Your Account
                    </div>
                </div>
                <div className={`flex flex-col gap-2`}>
                    <span className={`text-white`}>Email</span>
                    <input
                        className={`rounded-md py-2 px-4 text-gray-700`}
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className={`flex flex-col gap-2`}>
                    <div className={`flex justify-between items-center`}>
                        <span className={`text-white`}>Password</span>
                        <button className={`text-sm text-gray-400`}>
                            Forgot password?
                        </button>
                    </div>
                    <input
                        className={`rounded-md py-2 px-4 text-gray-700`}
                        type="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button
                    className={`bg-primary bg-opacity-80 text-white w-full rounded-md px-4 py-2 hover:bg-opacity-100`}
                    onClick={handleClik}
                >
                    Login
                </button>

                <div className="flex gap-2">
                    <p className="text-gray-400">Not registered yet?</p>
                    <Link href="/register">
                        <p className={`underline underline-offset-2`}>
                            Register
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Login;
