import React from 'react';
import Loading from '@/components/Loading';
import ImageContentSection from '@/components/IamgeContent';
import Header2 from '@/components/Header2';

const data = [
    {
        image: '/images/mobile.webp',
        title: 'Create your Profile',
        description:
            "Add social media links, email, contact & website links that you'd like to share with others. You have the liberty to edit your profile anytime.",
    },
    {
        image: '/images/nfcCard2.png',
        title: 'Share it with a Tap',
        description:
            'Card can be tapped on most of the Android phones and newer iPhones. Non-NFC phones can scan the QR code to access your profile. No apps required.',
    },
    {
        image: '/images/dummyCard.png',
        title: 'Purchase card',
        description:
            "Choose between basic & custom SBC card & enter the name you want us to custom print on your card. We'll add your custom QR code in the card and ship it to you.",
    },
];

const page = () => {
    return (
        <div className="max-w-screen-xl mx-auto bg-light-500 dark:bg-dark-700 py-4">
            <Header2 />
            <main className="p-8 flex flex-col gap-8">
                {data.map((item, index) => (
                    <ImageContentSection
                        key={index}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                        reverse={index % 2 === 0}
                    />
                ))}
            </main>
        </div>
    );
};

export default page;
