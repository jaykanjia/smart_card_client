import React from 'react';
import Image from 'next/image';

const ImageContentSection = () => {
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-1  gap-8 bg-dark-700 p-8">
            <div className='flex md:flex-row flex-col '>
                <div className="sm:w-1/2 w-full">
                    <div className="relative aspect-3/4 h-96">
                        <Image src="/images/content1.png" fill style={{ objectFit: "contain" }} />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center sm:w-1/2 w-full ">
                    <div className='max-w-md w-full flex flex-col  justify-center '>
                        <p className="text-3xl font-semibold mb-4">Purchase card</p>
                        <p >
                            Choose between basic & custom SBC card & enter the name you want us to custom print on your card. We'll add your custom QR code in the card and ship it to you.
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex md:flex-row-reverse flex-col '>
                <div className="sm:w-1/2 w-full">
                    <div className="relative aspect-3/4 h-96">
                        <Image src="/images/content2.png" fill style={{ objectFit: "contain" }} />
                    </div>
                </div>
                <div className="flex flex-col justify-center  sm:w-1/2 w-full sm:pl-24 ">
                    <div className='max-w-md w-full flex flex-col  '>
                        <p className="text-3xl font-semibold mb-4">Create your Profile</p>
                        <p >
                            Add social media links, email, contact & website links that you'd like to share with others. You have the liberty to edit your profile anytime.
                        </p>
                    </div>
                </div>
            </div>
            

            <div className='flex md:flex-row flex-col '>
                <div className="sm:w-1/2 w-full">
                    <div className="relative aspect-3/4 h-96">
                        <Image src="/images/content3.png" fill style={{ objectFit: "contain" }} />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center sm:w-1/2 w-full ">
                    <div className='max-w-md w-full flex flex-col  justify-center '>
                        <p className="text-3xl font-semibold mb-4">Share it with a Tap</p>
                        <p >
                        Card can be tapped on most of the Android phones and newer iPhones. Non-NFC phones can scan the QR code to access your profile. No apps required.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ImageContentSection;

