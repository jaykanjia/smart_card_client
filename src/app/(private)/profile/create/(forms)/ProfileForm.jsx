import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './register.module.css';
import clsx from 'clsx';
import { toast } from 'react-toastify';

const ProfileForm = ({ setFormIndex, setData }) => {
    const router = useRouter();

    const nameRef = useRef();
    const designationRef = useRef();
    const emailRef = useRef();
    const contactNumebrRef = useRef();
    const addressRef = useRef();
    const aboutRef = useRef();
    const websiteRef = useRef();

    const handleNextClick = () => {
        if (
            [
                nameRef.current.value,
                designationRef.current.value,
                emailRef.current.value,
                contactNumebrRef.current.value,
                addressRef.current.value,
                aboutRef.current.value,
                websiteRef.current.value,
            ].some((item, index, array) => {
                return item === '' || item === null;
            })
        ) {
            return toast.warn('Please Enter All Required Fields...');
        } else {
            console.log(
                nameRef.current.value,
                designationRef.current.value,
                emailRef.current.value,
                contactNumebrRef.current.value,
                addressRef.current.value,
                aboutRef.current.value,
                websiteRef.current.value,
            );
        }
        setData((prev) => {
            return {
                ...prev,
                name: nameRef.current.value,
                designation: designationRef.current.value,
                about: aboutRef.current.value,
                contactDetails: {
                    phoneNumber: contactNumebrRef.current.value,
                    email: emailRef.current.value,
                    address: addressRef.current.value,
                    website: websiteRef.current.value,
                },
            };
        });
        setFormIndex(1);
    };

    return (
        <>
            <div className={`flex justify-center text-gray-500 font-semibold`}>
                WELCOME !
            </div>
            <div className={`text-2xl font-semibold flex justify-center py-4`}>
                Create Your Profile
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                <div className={styles.inputContainer}>
                    <span className={clsx([styles.details, styles.required])}>
                        Name
                    </span>
                    <input
                        ref={nameRef}
                        className={styles.inputbox}
                        type="text"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <span className={clsx([styles.details, styles.required])}>
                        Designation
                    </span>
                    <input
                        ref={designationRef}
                        className={styles.inputbox}
                        type="text"
                        placeholder="Tell us about your work"
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <span className={clsx([styles.details, styles.required])}>
                        Contact Number
                    </span>
                    <input
                        ref={contactNumebrRef}
                        className={styles.inputbox}
                        type="text"
                        placeholder="Enter your contact number"
                        pattern="[0-9]{10}$"
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <span className={clsx([styles.details, styles.required])}>
                        Email
                    </span>
                    <input
                        ref={emailRef}
                        className={styles.inputbox}
                        type="email"
                        placeholder="Enter your Company email address"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address"
                    />
                </div>
                <div className={styles.inputContainer}>
                    <span className={clsx([styles.details, styles.required])}>
                        Website Link
                    </span>
                    <input
                        ref={websiteRef}
                        className={styles.inputbox}
                        type="url"
                        placeholder="Enter your website"
                        required
                        title="Please enter your website link"
                    />
                </div>
                <div className={styles.inputContainer}>
                    <span className={clsx([styles.details, styles.required])}>
                        Address
                    </span>
                    <textarea
                        ref={addressRef}
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
                    <span className={clsx([styles.details, styles.required])}>
                        About
                    </span>
                    <textarea
                        ref={aboutRef}
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
                    onClick={handleNextClick}
                >
                    Next
                </button>
            </div>
            <p className="w-full text-center">Form 1/3</p>
        </>
    );
};

export default ProfileForm;
