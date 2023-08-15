import Image from 'next/image';
import React from 'react';

const Card = ({ data }) => {
    return (
        <div className="bg-white dark:bg-dark-700 border border-[#6a6a6a] grid sm:grid-cols-2 items-center w-full aspect-[5/3] max-w-[500px] shadow-2xl rounded-lg p-4">
            <div className="flex justify-center items-center aspect-square border-b sm:border-b-0 sm:border-r border-[#6a6a6a] p-4">
                <div className="relative aspect-square bg-white rounded-full h-full overflow-hidden border">
                    <Image src={'/images/avatar.png'} fill />
                </div>
            </div>
            <div className="p-4 flex flex-col gap-2  justify-end">
                <h3 className="text-xl font-medium leading-8 text-right">
                    {data.name}
                </h3>
                <div className="text-xs font-semibold text-right">
                    <p className="">{data.designation}</p>
                </div>
                <hr />
                <div className="flex flex-col items-end gap-1 py-4">
                    <div className="flex gap-4">
                        <p>Phone:</p>
                        <p>{data.contactDetails.phoneNumber}</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Email:</p>
                        <p>{data.contactDetails.email}</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Website:</p>
                        <p>{data.contactDetails.website}</p>
                    </div>
                </div>
                {/* <table className="text-xs my-3 flex">
                    <tbody>
                        <tr>
                            <td className="px-2 py-2 text-gray-500 font-semibold">
                                Phone
                            </td>
                            <td className="px-2 py-2">
                                {data.contactDetails.phoneNumber}
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2 text-gray-500 font-semibold">
                                Email
                            </td>
                            <td className="px-2 py-2">
                                {data.contactDetails.email}
                            </td>
                        </tr>
                    </tbody>
                </table> */}
                <hr />
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                    View Profile
                </button>
            </div>
        </div>
    );
};

export default Card;
