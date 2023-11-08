import Header from '@/components/Header';
import ImageContentSection from '@/components/IamgeContent';
import React from 'react';

const data = [
    {
        image: '/images/mobile.webp',
        title: 'Create your Profile',
        description:
            "Create your digital profile, add social media links, email, contact & website links that you'd like to share with others. You have the liberty to access your profile anytime.",
    },
    {
        image: '/images/nfcCard2.png',
        title: 'Share it with a Tap',
        description:
            'Card can be tapped on nfc-enabled devices and share your card. Non-NFC devices can scan the QR code to access your profile. No external apps required. it is secure and fast as a light.',
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
        <main className="p-8 flex flex-col gap-8">
            <Header />
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
    );
};

export default page;
