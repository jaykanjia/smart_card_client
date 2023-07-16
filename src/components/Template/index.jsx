import React from 'react';
import styles from './temp.module.css';
import Image from 'next/image';

const socialLinks = [
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
];
const contactFields = [
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
];

const Template = () => {
    return (
        <div className="max-w-7xl m-auto bg-[#f0f0f0] dark:bg-[#222222] p-[10px_20px]">
            <div className="relative p-[10px_0px] flex flex-col justify-end items-center md:items-start">
                <div className="relative rounded-xl overflow-hidden">
                    <Image
                        src="/images/banner.png"
                        style={{ objectFit: 'cover' }}
                        width={1280}
                        height={200}
                    />
                </div>
                <div className="absolute w-[28%] sm:w-[15%] top-[40%] sm:top-[55%] rounded-full overflow-hidden bg-[white] border-2 border-solid border-white m-[0px_30px]">
                    <Image
                        src="/images/photo.jpeg"
                        style={{ objectFit: 'cover' }}
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            <div></div>
            <div>
                <div className="flex flex-col sm:items-start sm:pl-[30px] items-center pt-[50px]">
                    <p className="font-medium text-[24px]">Hirpara Zeel</p>
                    <p className="text-sm font-light italic">Ui/Ux Developer</p>
                </div>
                <div className="rounded-xl p-3 mt-[20px]">
                    <p className="text-lg font-semibold sm:pl-[20px] p-[0px_0px_10px_0px]">
                        About
                    </p>
                    <p className="text-left sm:pl-[20px] font-light">
                        Web Developer Intern at The Special Character Building
                        Scalable Solutions with React JS, Java script, MongoDB,
                        and Next.js
                    </p>
                </div>
            </div>
            <div>
                <div className="flex flex-col rounded-xl p-3 justify-start mt-[20px]">
                    <p className="text-lg font-semibold p-[0px_0px_10px_0px]">
                        Social Networks
                    </p>
                    <div
                        className={`whitespace-nowrap overflow-y-hidden overflow-x-auto ${styles.socialIcons}`}
                    >
                        {socialLinks.map((item) => {
                            return (
                                <div className="p-3 mr-[15px] inline-block bg-[#fff] dark:bg-[#323f4b] rounded-[20px]">
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
                <div>
                    {contactFields.map((item) => {
                        return (
                            <div className="flex p-3 rounded-xl">
                                <div className="bg-white dark:bg-[#323f4b] p-3 rounded-[20px]">
                                    <Image
                                        src={item.icon}
                                        height={30}
                                        width={30}
                                    />
                                </div>
                                <div className="p-[0px_10px]">
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
