'use client';
import React, { useState } from 'react';
import Template from '@/components/Template';

const page = () => {
    const [showQrCode, setShowQrCode] = useState(false);

    const handleQrContainer = () => {
        return setShowQrCode(!showQrCode);
    };
    const handleShare = () => {
        return;
    };
    return (
        <>
            {showQrCode && (
                <div className="absolute z-50 max-h-[70%] aspect-square w-full left-0 bottom-0 px-[5%]">
                    <div className="bg-white rounded-t-3xl w-full h-full grid place-items-center">
                        <div
                            className="absolute top-6 h-2 w-[10%] bg-black rounded-full"
                            onClick={handleQrContainer}
                        ></div>
                        <div>QRCode</div>
                    </div>
                </div>
            )}
            <div className="absolute bottom-8 right-4 sm:right-10 flex flex-col gap-4">
                <div
                    className="bg-gray-400 w-12 h-12 grid place-items-center rounded-full"
                    onClick={handleShare}
                >
                    S
                </div>
                <div
                    className="bg-gray-400 w-12 h-12 grid place-items-center rounded-full"
                    onClick={handleQrContainer}
                >
                    QR
                </div>
            </div>
            <Template />;
        </>
    );
};

export default page;
