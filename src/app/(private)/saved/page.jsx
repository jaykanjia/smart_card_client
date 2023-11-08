'use client';
import AxiosInstance from '@/AxiosInstance';
import Card from '@/components/Card';
import Header2 from '@/components/Header2';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import styles from './styles.module.css';
import SearchIcon from '@/public/icons/search.svg';
import Loading from '@/components/Loading';

const Page = () => {
    const [profiles, setProfiles] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredProfiles, setFilteredProfiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
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
        } finally {
            setLoading(false);
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

    const clearSearch = () => {
        setSearchInput('');
        setFilteredProfiles(profiles);
    };

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
        handleSearch();
    };

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        handleSearch();
    }, [profiles]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="max-w-screen-xl mx-auto min-h-screen bg-light-500 dark:bg-dark-700 py-4">
            <Header2 />
            <div className="max-w-screen-sm p-8 mx-auto flex items-center">
                <span className="border p-2 bg-white text-black">
                    <SearchIcon className="w-6 h-6" />
                </span>
                <input
                    type="text"
                    placeholder="Search by name, phone, email, or designation"
                    value={searchInput}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-r p-2 w-full text-black"
                />
                <button
                    className={`ml-8 bg-red-500 text-white px-4 py-2 h-full hover:bg-red-400 hover:bg-opacity-70 rounded-md `}
                    type="button"
                    onClick={clearSearch}
                >
                    Clear
                </button>
            </div>
            <div
                className={clsx([
                    'p-8 md:px-20 flex flex-col sm:grid lg:grid-cols-2 gap-4 items-center justify-center',
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
