'use client';
import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import Template from '@/components/Template';
import AxiosInstance from '@/AxiosInstance';

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

    const handleQrContainer = () => {
        return setShowQrCode(!showQrCode);
    };

    const handleShare = () => {
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
        return <div>LOADING...</div>;
    }

    return (
        <>
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
                                data={`http://localhost:3000/profile/${userData?.userId}`}
                            />
                        </div>
                    </div>
                </div>
            )}
            <div className="absolute bottom-8 right-4 sm:right-10 flex flex-col gap-4">
                <div
                    className="bg-dark-500 w-12 h-12 grid place-items-center rounded-full"
                    onClick={handleShare}
                >
                    S
                </div>
                <div
                    className="bg-dark-500 w-12 h-12 grid place-items-center rounded-full"
                    onClick={handleQrContainer}
                >
                    QR
                </div>
            </div>
            <Template data={userData} />
        </>
    );
};

export default page;
