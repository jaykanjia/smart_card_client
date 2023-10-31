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
import { toast } from 'react-toastify';
import BackBtn from '@/components/BackBtn';

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
        const base = process.env.NEXT_PUBLIC_CLIENT_URL;
        const link = base + `/profile/${userData.userId}`;
        navigator.clipboard.writeText(link);
        toast.info('Profile Linked Copied...');
        return;
    };

    const fetchData = async () => {
        try {
            const response = await AxiosInstance.get('/profile', {
                headers: {
                    'auth-token': localStorage.getItem('AUTH_TOKEN'),
                },
            });
            return setUserData(response?.data?.data);
        } catch (error) {
            toast.error(error?.response?.data?.error);
            router.back();
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchData();
        setLoading(false);
        return () => {};
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
                            {userData && (
                                <QRCodeGenerator
                                    data={`${url.CLIENT_URL}/profile/${userData?.userId}`}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}

            {userData && (
                <>
                    <Template data={userData} />
                    <div className="absolute bottom-8 right-4 sm:right-10 flex flex-col gap-4">
                        <FloatingBtn onClick={(e) => handleShare(e)}>
                            <ShareIcon />
                        </FloatingBtn>
                        <FloatingBtn onClick={handleQrContainer}>
                            <QRIcon />
                        </FloatingBtn>
                    </div>
                    <BackBtn />
                </>
            )}
        </div>
    );
};

export default page;
