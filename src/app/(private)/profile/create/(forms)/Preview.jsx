import AxiosInstance from '@/AxiosInstance';
import React from 'react';
import { toast } from 'react-toastify';

const Preview = ({ data, setFormIndex }) => {
    console.log(data);
    const handleBackClick = () => {
        setFormIndex(2);
    };
    const handleSubmitClick = async () => {
        try {
            const response = await AxiosInstance.post('/profile', data, {
                headers: {
                    'auth-token': sessionStorage.getItem('AUTH_TOKEN'),
                },
            });
            console.log(response);
            toast.success(response?.data?.message);
        } catch (error) {
            toast.error(error);
        }
    };
    return (
        <div>
            <p>Name: {data.name}</p>
            <p>Designation: {data.designation}</p>
            <p>About: {data.about}</p>
            <p>Email: {data.contactDetails.email}</p>
            <p>Phone: {data.contactDetails.phoneNumber}</p>
            <p>Website: {data.contactDetails.website}</p>
            <p>Address: {data.contactDetails.address}</p>
            {data &&
                data.socialLinks.map((item) => (
                    <p>
                        {item.title}: {item.link}
                    </p>
                ))}
            <div className="grid sm:grid-cols-2 gap-8">
                <button
                    className={`bg-red-600 text-white w-full hover:bg-opacity-70 rounded-md p-2`}
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
        </div>
    );
};

export default Preview;
