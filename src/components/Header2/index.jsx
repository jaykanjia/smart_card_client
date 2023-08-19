'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import HambarIcon from '@/public/icons/hambar.svg';
import CrossIcon from '@/public/icons/cross.svg';
import ChevronDown from '@/public/icons/dropdown.svg';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import styles from './style.module.css';
import AxiosInstance from '@/AxiosInstance';

const data = [
    {
        title: 'Profile',
        dropdown: [
            {
                title: 'See Profile',
                link: '/profile/me',
            },
            {
                title: 'Create Profile',
                link: '/profile/create',
            },
            {
                title: 'Update Profile',
                link: '/profile/update',
            },
        ],
    },
    { title: 'saved cards', link: '/saved' },
    { title: 'order card', link: '/orderCard' },
];

const deleteProfile = async () => {
    try {
        const response = await AxiosInstance.delete('/profile', {
            headers: {
                'auth-token': localStorage.getItem('AUTH_TOKEN'),
            },
        });
        toast.success(response?.data?.message);
    } catch (error) {
        toast.error(error?.response?.data?.error);
    }
};

const Header2 = () => {
    const [navToggler, setNavToggler] = useState(false);
    const router = useRouter();

    const handleNavToggler = () => {
        setNavToggler(!navToggler);
        return;
    };

    const logout = () => {
        localStorage.clear();
        toast.info('Logged Out');
        router.push('/');
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <Link className={styles.logo} href="/">
                    By
                    <span className="text-xl">SmartBizCard</span>
                </Link>
                <div className={styles.navToggler}>
                    <span onClick={handleNavToggler}>
                        {navToggler ? (
                            <CrossIcon className={styles.navIcon} />
                        ) : (
                            <HambarIcon className={styles.navIcon} />
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
                    } ${styles.navBar}`}
                >
                    {data.map((item, index) => (
                        <div key={index}>
                            {item.dropdown ? (
                                <div className="group relative">
                                    <p
                                        className={`flex gap-1 items-center ${styles.link}`}
                                    >
                                        <span>{item.title}</span>
                                        <span className="w-6 aspect-square group-hover:rotate-180 duration-300">
                                            <ChevronDown />
                                        </span>
                                    </p>
                                    <ul
                                        className={`hidden absolute group-hover:flex ${styles.dropDown}`}
                                    >
                                        {item.dropdown &&
                                            item.dropdown.map(
                                                (dropdownItem) => (
                                                    <li key={dropdownItem.link}>
                                                        <Link
                                                            className={
                                                                styles.link
                                                            }
                                                            href={
                                                                dropdownItem.link
                                                            }
                                                        >
                                                            {dropdownItem.title}
                                                        </Link>
                                                    </li>
                                                ),
                                            )}
                                        <li
                                            className={styles.linkRed}
                                            onClick={deleteProfile}
                                        >
                                            Delete Profile
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <Link className={styles.link} href={item.link}>
                                    {item.title}
                                </Link>
                            )}
                        </div>
                    ))}
                    <span className={styles.linkRed} onClick={logout}>
                        LOG OUT
                    </span>
                </nav>
            </div>
        </header>
    );
};

export default Header2;
