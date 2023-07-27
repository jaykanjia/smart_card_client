import React from 'react';
import ImagePicker from '@/components/ImagePicker';
import styles from './register.module.css';

const ProfileForm1 = ({ setFormIndex }) => {
    const handleNextClick = () => {
        setFormIndex(2);
    };
    const handleBackClick = () => {
        setFormIndex(0);
    };
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
                    Upload Profile Image
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center w-full">
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
                        className={`bg-primary text-white w-full hover:bg-opacity-70 rounded-md p-2`}
                        onClick={handleBackClick}
                    >
                        Back
                    </button>
                    <button
                        className={`bg-primary text-white w-full hover:bg-opacity-70 rounded-md p-2`}
                        onClick={handleNextClick}
                    >
                        Next
                    </button>
                </div>
            </div>
        </main>
    );
};

export default ProfileForm1;
