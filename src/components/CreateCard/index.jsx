'use client';
import React, { useRef, useEffect } from 'react';
import styles from './createcard.module.css';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import ImagePicker from '../ImagePicker';

const CreateCard = ({ submitFunction, data }) => {
    const router = useRouter();

    const nameRef = useRef();
    const designationRef = useRef();
    const contactNumebrRef = useRef();
    const emailRef = useRef();
    const websiteRef = useRef();
    const addressRef = useRef();
    const aboutRef = useRef();
    const youtubeRef = useRef();
    const linkedinRef = useRef();
    const instagramRef = useRef();
    const whatsappRef = useRef();
    const facebookRef = useRef();
    const skypeRef = useRef();
    const twitterRef = useRef();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        // const data = {
        //     data: {
        //         name: nameRef.current.value,
        //         designation: designationRef.current.value,
        //         about: aboutRef.current.value,
        //         socialLinks: [
        //             { title: 'youtube', link: youtubeRef.current.value },
        //             { title: 'linkedin', link: linkedinRef.current.value },
        //             {
        //                 title: 'instagram',
        //                 link: instagramRef.current.value,
        //             },
        //             { title: 'whatsapp', link: whatsappRef.current.value },
        //             { title: 'facebook', link: facebookRef.current.value },
        //             { title: 'skype', link: skypeRef.current.value },
        //             { title: 'twitter', link: twitterRef.current.value },
        //         ],
        //         contactDetails: {
        //             phoneNumber: contactNumebrRef.current.value,
        //             email: emailRef.current.value,
        //             address: addressRef.current.value,
        //             website: websiteRef.current.value,
        //         },
        //     },
        // };
        submitFunction(data);
    };

    useEffect(() => {
        console.log('hello');
        console.log(data);
        if (data) {
            console.log('hello1');
            nameRef.current.value = data.name;
            designationRef.current.value = data.designation;
            aboutRef.current.value = data.about;
            contactNumebrRef.current.value = data.contactDetails.phoneNumebr;
            emailRef.current.value = data.contactDetails.email;
            websiteRef.current.value = data.contactDetails.website;
            addressRef.current.value = data.contactDetails.address;
            youtubeRef.current.value = data.socialLinks[0];
            linkedinRef.current.value = data.socialLinks[1];
            instagramRef.current.value = data.socialLinks[2];
            whatsappRef.current.value = data.socialLinks[3];
            facebookRef.current.value = data.socialLinks[4];
            skypeRef.current.value = data.socialLinks[5];
            twitterRef.current.value = data.socialLinks[6];
        }
    }, []);

    return (
        <form onSubmit={handleOnSubmit}>
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
                        required
                        style={{
                            resize: 'vertical',
                            overflow: 'hidden',
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
                        required
                        style={{
                            resize: 'vertical',
                            overflow: 'hidden',
                        }}
                        onInput={(e) => {
                            e.target.style.height = 'auto';
                            e.target.style.height =
                                e.target.scrollHeight + 'px';
                        }}
                    />
                </div>

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

            {/* <div className="flex justify-evenly">
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
                    </div> */}

            {/*buttons */}
            <div className="m-[30px_0px] flex gap-3">
                <button
                    className={`bg-red-500 text-white w-full hover:bg-red-400 hover:bg-opacity-70 rounded-md p-2`}
                    onClick={() => router.back()}
                >
                    Cancel
                </button>
                <button
                    className={`bg-primary text-white w-full hover:bg-primary hover:bg-opacity-70 rounded-md p-2`}
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default CreateCard;
