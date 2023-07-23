import React from 'react';
import Image from 'next/image';

const ImageContentSection = ({ image, title, description, reverse }) => {
    return (
        <div
            className={`flex ${
                reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            } flex-col gap-8 items-center`}
        >
            <div className="sm:w-1/2 w-full">
                <div className="mx-auto relative aspect-[1/1] h-80 sm:h-96 rounded-3xl overflow-hidden">
                    <Image
                        src={image}
                        fill
                        alt={`${title} image`}
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center md:w-1/2 w-full ">
                <div className="max-w-md w-full flex flex-col  justify-center ">
                    <p className="text-4xl font-semibold mb-4 text-orange-300">
                        {title}
                    </p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ImageContentSection;
