import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ data }) => {
    return (
        <div className="bg-white dark:bg-[#111] border border-[#6a6a6a] grid sm:grid-cols-2 items-center w-full aspect-[5/3] shadow-2xl rounded-lg p-4">
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
                <div className="flex flex-col items-end w-full gap-1 py-4">
                    <div className="flex gap-2 w-full justify-between">
                        <p>Phone:</p>
                        <p>{data.contactDetails.phoneNumber}</p>
                    </div>
                    <div className="flex gap-2 w-full justify-between">
                        <p>Email:</p>
                        <p>{data.contactDetails.email}</p>
                    </div>
                    <div className="flex gap-2 w-full justify-between">
                        <p>Website:</p>
                        <p>{data.contactDetails.website}</p>
                    </div>
                </div>
                <hr />
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                    <Link href={`/profile/${data.userId}`}>View Profile</Link>
                </button>
            </div>
        </div>
    );
};

export default Card;
