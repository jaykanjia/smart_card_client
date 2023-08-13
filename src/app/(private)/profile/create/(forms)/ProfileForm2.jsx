'use client';
import React, { useRef } from 'react';
import styles from './register.module.css';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const ProfileForm2 = ({ setFormIndex, setData }) => {
    const router = useRouter();

    const youtubeRef = useRef();
    const linkedinRef = useRef();
    const instagramRef = useRef();
    const whatsappRef = useRef();
    const facebookRef = useRef();
    const skypeRef = useRef();
    const twitterRef = useRef();

    const handleBackClick = () => {
        setFormIndex(1);
    };
    const handleSubmitClick = () => {
        console.log(
            youtubeRef.current.value,
            linkedinRef.current.value,
            instagramRef.current.value,
            whatsappRef.current.value,
            facebookRef.current.value,
            skypeRef.current.value,
            twitterRef.current.value,
        );
        setData((prev) => {
            console.log({
                ...prev,
                socialLinks: [
                    { title: 'youtube', link: youtubeRef.current.value },
                    { title: 'linkedin', link: linkedinRef.current.value },
                    { title: 'instagram', link: instagramRef.current.value },
                    { title: 'whatsapp', link: whatsappRef.current.value },
                    { title: 'facebook', link: facebookRef.current.value },
                    { title: 'skype', link: skypeRef.current.value },
                    { title: 'twitter', link: twitterRef.current.value },
                ],
            });
            return {
                ...prev,
                socialLinks: [
                    { title: 'youtube', link: youtubeRef.current.value },
                    { title: 'linkedin', link: linkedinRef.current.value },
                    { title: 'instagram', link: instagramRef.current.value },
                    { title: 'whatsapp', link: whatsappRef.current.value },
                    { title: 'facebook', link: facebookRef.current.value },
                    { title: 'skype', link: skypeRef.current.value },
                    { title: 'twitter', link: twitterRef.current.value },
                ],
            };
        });
        setFormIndex(3);
        // toast.info('profile added...');
    };
    return (
        <>
            <div className={`flex justify-center text-gray-500 font-semibold`}>
                WELCOME !
            </div>
            <div className={`text-2xl font-semibold flex justify-center py-4`}>
                Social Profile Links
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                <div className={styles.inputContainer}>
                    <span className={styles.details}>YouTube</span>
                    <input
                        ref={youtubeRef}
                        className={styles.inputbox}
                        type="url"
                        placeholder="LinkedIn Profile Link"
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <span className={styles.details}>LinkedIn</span>
                    <input
                        ref={linkedinRef}
                        className={styles.inputbox}
                        type="url"
                        placeholder="YouTube Link"
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <span className={styles.details}>Instagram</span>
                    <input
                        ref={instagramRef}
                        className={styles.inputbox}
                        type="url"
                        placeholder="Instagram Profile Link"
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <span className={styles.details}>WhatsApp</span>
                    <input
                        ref={whatsappRef}
                        className={styles.inputbox}
                        type="text"
                        placeholder="WhatsApp Number"
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <span className={styles.details}>Facebook</span>
                    <input
                        ref={facebookRef}
                        className={styles.inputbox}
                        type="url"
                        placeholder="Facebook Profile Link"
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <span className={styles.details}>Skype</span>
                    <input
                        ref={skypeRef}
                        className={styles.inputbox}
                        type="text"
                        placeholder="SkypeId"
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <span className={styles.details}>Twitter</span>
                    <input
                        ref={twitterRef}
                        className={styles.inputbox}
                        type="url"
                        placeholder="Twitter Profile Link"
                        required
                    />
                </div>
            </div>
            <div className="m-[30px_0px] flex gap-3">
                <button
                    className={`bg-primary text-white w-full hover:bg-opacity-70 rounded-md p-2`}
                    onClick={handleBackClick}
                >
                    Back
                </button>
                <button
                    className={`bg-green-600 text-white w-full hover:bg-opacity-70 rounded-md p-2`}
                    onClick={handleSubmitClick}
                >
                    Preview
                </button>
            </div>
            <p className="w-full text-center">Form 3/3</p>
        </>
    );
};

export default ProfileForm2;
