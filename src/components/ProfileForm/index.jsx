'use client';
import React from 'react';
import Image from 'next/image';
import ImagePicker from '../ImagePicker';
import { useRouter } from 'next/navigation';
import styles from './register.module.css';

const ProfileForm = () => {
    const router = useRouter();
    return (
        <main
            className={`w-full md:py-8 min-h-screen flex justify-center items-center bg-light-300 dark:bg-dark-700`}
        >
            <div
                className={`max-w-screen-md w-full bg-light-500 sm:dark:bg-dark-500 dark:bg-dark-700 p-8 md:rounded-xl`}
            >
                <div
                    className={`flex justify-center text-gray-500 font-semibold`}
                >
                    WELCOME !
                </div>
                <div
                    className={`text-2xl font-semibold flex justify-center py-4`}
                >
                    Create Your Profile
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                    <div className={styles.inputContainer}>
                        <span className={styles.details}>Name</span>
                        <input
                            className={styles.inputbox}
                            type="text"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.data}>
                            <span className={styles.details}>Designation</span>
                        </div>
                        <input
                            className={styles.inputbox}
                            type="text"
                            placeholder="Tell us about your work"
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.data}>
                            <span className={styles.details}>Company Name</span>
                        </div>
                        <input
                            className={styles.inputbox}
                            type="text"
                            placeholder="Enter company name"
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <span className={styles.details}>Contact Number</span>
                        <input
                            className={styles.inputbox}
                            type="text"
                            placeholder="Enter your contact number"
                            pattern="[0-9]{10}$"
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <span className={styles.details}>Email</span>
                        <input
                            className={styles.inputbox}
                            type="email"
                            placeholder="Enter your Company email address"
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            title="Please enter a valid email address"
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.data}>
                            <span className={styles.details}>Address</span>
                        </div>
                        <textarea
                            className={styles.inputbox}
                            type="text"
                            placeholder="Share your Company location"
                            required
                            style={{
                                resize: 'vertical',
                                overflow: 'hidden',
                                height: '40px',
                                paddingTop: '9px',
                            }}
                            onInput={(e) => {
                                e.target.style.height = 'auto';
                                e.target.style.height =
                                    e.target.scrollHeight + 'px';
                            }}
                        />
                    </div>
                    <div className={`styles.inputContainer md:col-span-2`}>
                        <div className={styles.data}>
                            <span className={styles.details}>About</span>
                        </div>
                        <textarea
                            className={styles.inputbox}
                            type="about"
                            placeholder="Tell us a little about youself"
                            required
                            style={{
                                resize: 'vertical',
                                overflow: 'hidden',
                                height: '40px',
                                paddingTop: '9px',
                            }}
                            onInput={(e) => {
                                e.target.style.height = 'auto';
                                e.target.style.height =
                                    e.target.scrollHeight + 'px';
                            }}
                        />
                    </div>
                    <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
                        <div className={styles.inputContainer}>
                            <span className={styles.details}>
                                Profile Image
                            </span>
                            <ImagePicker />
                        </div>
                        <div className={styles.inputContainer}>
                            <span className={styles.details}>Banner Image</span>
                            <ImagePicker />
                        </div>
                    </div>
                </div>
                <div className="m-[30px_0px] flex gap-3">
                    <button
                        className={`bg-red-500 text-white w-full hover:bg-red-400 hover:bg-opacity-70 rounded-md p-2`}
                        onClick={() => router.back()}
                    >
                        Cancel
                    </button>
                    <button
                        className={`bg-primary text-white w-full hover:bg-primary hover:bg-opacity-70 rounded-md p-2`}
                    >
                        Create Profile
                    </button>
                </div>
                {/* <div className="flex flex-row gap-[5px]">
                    <p className="text-[#aabfd0]">Not registered yet?</p>
                    <p className={styles.reg}>Register</p>
                </div> */}
            </div>
        </main>
    );
};

export default ProfileForm;
