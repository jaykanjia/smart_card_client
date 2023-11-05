'use client';
import AxiosInstance from '@/AxiosInstance';
import Card from '@/components/Card';
import Header2 from '@/components/Header2';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import FloatingBtn from '@/components/FloatingBtn';
import BackBtn from '@/components/BackBtn';
import clsx from 'clsx';
import styles from './styles.module.css';
import { data } from 'autoprefixer';

const Page = () => {
    const [profiles, setProfiles] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredProfiles, setFilteredProfiles] = useState([]);

    const fetchData = async () => {
        try {
            const response = await AxiosInstance.get('/cards', {
                headers: {
                    'auth-token': localStorage.getItem('AUTH_TOKEN'),
                },
            });
            const cardIds = response?.data?.data?.savedCards;
            const data = [];
            for (let i = 0; i < cardIds.length; i++) {
                const res = await AxiosInstance.get(`/profile/${cardIds[i]}`);
                data.push(res.data.data);
            }
            setProfiles(data);
        } catch (error) {
            toast.error(error?.response?.data?.error);
        }
    };

    const handleSearch = () => {
        const searchText = searchInput.toLowerCase();

        const filteredData = profiles.filter((profile) => {
            const { name, designation, contactDetails } = profile;
            if (contactDetails) {
                const { phone, email } = contactDetails;

                return (
                    name?.toLowerCase()?.includes(searchText) ||
                    false ||
                    designation?.toLowerCase()?.includes(searchText) ||
                    false ||
                    phone?.toLowerCase()?.includes(searchText) ||
                    false ||
                    email?.toLowerCase()?.includes(searchText) ||
                    false
                );
            }
            return false;
        });

        setFilteredProfiles(filteredData);
    };

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
        handleSearch();
    };

    useEffect(() => {
        fetchData();
        handleSearch();
    }, [profiles]);

    return (
        <div className="max-w-screen-xl mx-auto bg-light-500 dark:bg-dark-700 py-4">
            <Header2 />
            <div className="mt-8 ml-20 max-w-sm">
                <input
                    type="text"
                    placeholder="Search by name, phone, email, or designation"
                    value={searchInput}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded p-2 w-full text-black"
                />
            </div>
            <div
                className={clsx([
                    'min-h-screen p-8 md:px-20',
                    styles.gridContainer,
                ])}
            >
                {filteredProfiles.map((item) => {
                    return <Card key={item.id} data={item} />;
                })}
            </div>
        </div>
    );
};

export default Page;
