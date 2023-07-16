import React from 'react';
import Image from 'next/image';

const data = {
    profileImage: '/images/photo.jpeg',
    bannerImage: '/images/banner.png',
    name: 'Zeel Hirpara',
    designation: 'UI / UX Designer',
    about: 'Web Developer Intern at The Special Character Building Scalable Solutions with React JS, Java script, MongoDB, and Next.js',
    socialLinks: [
        {
            icon: '/images/facebook.png',
        },
        {
            icon: '/images/linkedin.png',
        },
        {
            icon: '/images/instagram.png',
        },
        {
            icon: '/images/skype.png',
        },
        {
            icon: '/images/twitter.png',
        },
        {
            icon: '/images/whatsapp.png',
        },
    ],
    contactDetails: [
        {
            icon: '/images/phone.png',
            title: '1234567890',
            tag: 'work',
        },
        {
            icon: '/images/mail.png',
            title: 'abc@gmail.com',
            tag: 'work',
        },
        {
            icon: '/images/weblink.png',
            title: 'www.abc.com',
            tag: 'company',
        },
        {
            icon: '/images/address.png',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, impedit?',
            tag: 'company',
        },
    ],
};

const Template = () => {
    return (
        <div className="max-w-7xl h-screen m-auto bg-[#f0f0f0] dark:bg-[#222222] p-8 overflow-y-scroll overflow-x-hidden noScrollbar">
            <div className="relative flex flex-col justify-end items-center md:items-start">
                <div className="relative rounded-xl overflow-hidden">
                    <Image
                        src={data?.bannerImage}
                        style={{ objectFit: 'cover' }}
                        width={1280}
                        height={200}
                    />
                </div>
                <div className="absolute w-[28%] sm:w-[15%] top-[40%] sm:top-[55%] rounded-full overflow-hidden bg-[white] border-2 border-solid border-white m-[0px_30px]">
                    <Image
                        src={data?.profileImage}
                        style={{ objectFit: 'cover' }}
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-8 mt-[75px]">
                <div className="flex flex-col sm:items-start items-center">
                    <p className="font-medium text-[24px]">{data?.name}</p>
                    <p className="text-sm font-light italic">
                        {data?.designation}
                    </p>
                </div>
                <div className="rounded-xl">
                    <p className="text-lg font-semibold">About</p>
                    <p className="text-left font-light">{data?.about}</p>
                </div>
                <div className="flex flex-col gap-4 rounded-xl justify-start">
                    <p className="text-lg font-semibold">Social Networks</p>
                    <div
                        className={`flex gap-4 flex-wrap w-full justify-center items-center sm:justify-start`}
                    >
                        {data?.socialLinks.map((item) => {
                            return (
                                <div className="p-3 inline-block bg-[#fff] dark:bg-[#323f4b] rounded-[20px]">
                                    <Image
                                        src={item.icon}
                                        width={45}
                                        height={45}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-semibold">Contact Detail</p>
                    {data?.contactDetails.map((item) => {
                        return (
                            <div className="flex gap-4 items-center rounded-xl">
                                <div className="bg-white dark:bg-[#323f4b] p-3 rounded-[20px]">
                                    <Image
                                        src={item.icon}
                                        height={30}
                                        width={30}
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <p className="font-semibold">
                                        {item.title}
                                    </p>
                                    <p className="font-light">{item.tag}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Template;
