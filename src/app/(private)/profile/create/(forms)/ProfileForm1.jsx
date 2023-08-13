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
        <>
            <div className={`flex justify-center text-gray-500 font-semibold`}>
                WELCOME !
            </div>
            <div className={`text-2xl font-semibold flex justify-center py-4`}>
                Upload Profile Image
            </div>

            {/* <div className="md:col-span-2 grid md:grid-cols-2 gap-8"> */}
            <div className={styles.inputContainer}>
                <span className={styles.details}>Profile Image</span>
                <ImagePicker />
            </div>
            {/* <div className={styles.inputContainer}>
                        <span className={styles.details}>Banner Image</span>
                        <ImagePicker />
                    </div>
                </div> */}

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
            <p className="w-full text-center">Form 2/3</p>
        </>
    );
};

export default ProfileForm1;
