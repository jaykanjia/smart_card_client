import React from 'react';
import styles from './register.module.css';

const ProfileForm2 = ({ setFormIndex }) => {
    const handleSubmitClick = () => {
        setFormIndex(0);
    };
    const handleBackClick = () => {
        setFormIndex(1);
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
                    Social Profile Links
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                    <div className={styles.inputContainer}>
                        <span className={styles.details}>LinkedIn</span>
                        <input
                            className={styles.inputbox}
                            type="url"
                            placeholder="LinkedIn Profile Url"
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <span className={styles.details}>YouTube</span>
                        <input
                            className={styles.inputbox}
                            type="url"
                            placeholder="YouTube Url"
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <span className={styles.details}>Instagram</span>
                        <input
                            className={styles.inputbox}
                            type="url"
                            placeholder="Instagram Profile Url"
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <span className={styles.details}>Facebook</span>
                        <input
                            className={styles.inputbox}
                            type="url"
                            placeholder="Facebook Profile Url"
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
                        Submit
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

export default ProfileForm2;
