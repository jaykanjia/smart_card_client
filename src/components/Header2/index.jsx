'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import HambarIcon from '@/public/icons/hambar.svg';
import CrossIcon from '@/public/icons/cross.svg';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const data = [
    { title: 'my profile', link: '/profile/me' },
    { title: 'create card', link: '/profile/create' },
    { title: 'saved cards', link: '/saved' },
    { title: 'order card', link: '/orderCard' },
];

const Header2 = () => {
    const [navToggler, setNavToggler] = useState(false);
    const router = useRouter();

    const handleNavToggler = () => {
        setNavToggler(!navToggler);
        return;
    };

    const logout = () => {
        sessionStorage.clear();
        toast.info('Logged Out');
        router.push('/');
    };

    return (
        <div className="z-10 sticky top-0 w-[90%] rounded-xl mx-auto flex flex-row md:flex-row-reverse items-center justify-between font-mono text-sm p-4 sm:p-8 bg-light-300 dark:bg-black backdrop-blur-lg bg-opacity-30">
            <div className="z-20 flex justify-between w-full md:w-auto">
                <Link
                    className="pointer-events-none flex items-baseline place-items-center gap-2 lg:pointer-events-auto"
                    href="/"
                >
                    By
                    <span className="text-xl">SmartBizCard</span>
                </Link>
                <div className="w-full flex justify-end md:hidden">
                    <span onClick={handleNavToggler}>
                        {navToggler ? (
                            <CrossIcon className="w-8 aspect-square" />
                        ) : (
                            <HambarIcon className="w-8 aspect-square" />
                        )}
                    </span>
                </div>
            </div>
            <div className="z-10">
                <nav
                    className={`${
                        navToggler
                            ? 'flex flex-col absolute top-0 left-0 h-screen'
                            : 'hidden'
                    } bg-light-300 dark:bg-black bg-opacity-90 md:bg-opacity-0 justify-center md:relative md:flex md:flex-row gap-8 md:gap-2 items-center w-full p-8 sm:p-2`}
                >
                    {data.map((item, index) => (
                        <span key={index}>
                            <a
                                className="capitalize p-2 sm:hover:bg-light-500 sm:dark:hover:bg-dark-500 rounded-xl"
                                href={item.link}
                            >
                                {item.title}
                            </a>
                        </span>
                    ))}
                    <span
                        className="capitalize p-2 sm:hover:bg-red-400 sm:dark:hover:bg-red-400 rounded-xl cursor-pointer"
                        onClick={logout}
                    >
                        LOG OUT
                    </span>
                </nav>
            </div>
        </div>
    );
};

export default Header2;
