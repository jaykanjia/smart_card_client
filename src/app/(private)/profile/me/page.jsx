'use client';
import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import Template from '@/components/Template';
import AxiosInstance from '@/AxiosInstance';
import { useRouter } from 'next/navigation';
import FloatingBtn from '@/components/FloatingBtn';
import QRIcon from '@/public/icons/qr.svg';
import ShareIcon from '@/public/icons/share.svg';
import Loading from '@/components/Loading';

const QRCodeGenerator = ({ data }) => {
    return (
        <div>
            <QRCode value={data} />
        </div>
    );
};

const page = () => {
    const [showQrCode, setShowQrCode] = useState(false);
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    // const [qrData, setQrData] = useState('Hello, World!');

    const router = useRouter();

    const handleQrContainer = () => {
        return setShowQrCode(!showQrCode);
    };

    const handleShare = () => {
        const base = process.env.CLIENT_URL;
        const link = base + `/profile/${userData.userId}`;
        navigator.clipboard.writeText(link);
        window.alert('Profile Linked Copied...');
        return;
    };

    useEffect(async () => {
        setLoading(true);
        try {
            const response = await AxiosInstance.get('/profile', {
                headers: {
                    'auth-token': sessionStorage.getItem('AUTH_TOKEN'),
                },
            });
            setUserData(response.data.data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="relative max-w-7xl mx-auto">
            {showQrCode && (
                <div className="absolute z-50 max-h-[70%] aspect-square w-full left-0 bottom-0 px-[5%]">
                    <div className="bg-white rounded-t-3xl w-full h-full grid place-items-center">
                        <div
                            className="absolute top-6 h-2 w-[10%] bg-black rounded-full"
                            onClick={handleQrContainer}
                        ></div>
                        <div>
                            {/* TODO: change url to dynamic */}
                            <QRCodeGenerator
                                data={`${process.env.CLIENT_URL}/profile/${userData?.userId}`}
                            />
                        </div>
                    </div>
                </div>
            )}
            <Template data={userData} />
            <div className="absolute bottom-8 right-4 sm:right-10 flex flex-col gap-4">
                <FloatingBtn onClick={(e) => handleShare(e)}>
                    <ShareIcon />
                </FloatingBtn>
                <FloatingBtn onClick={handleQrContainer}>
                    <QRIcon />
                </FloatingBtn>
            </div>
            <div className="absolute top-8 left-4 sm:right-10 flex flex-col gap-4">
                <FloatingBtn onClick={router.back}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                        />
                    </svg>
                </FloatingBtn>
            </div>
        </div>
    );
};

export default page;
