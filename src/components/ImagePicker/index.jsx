'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AddIcon from '@/public/icons/plus.svg';
import CrossIcon from '@/public/icons/cross.svg';
import style from './style.module.css';

const ImagePicker = () => {
    const [file, setFile] = useState(null);
    const [previewURL, setPreviewURL] = useState(null);

    const handleFileSelect = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        // Preview image
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewURL(reader.result);
        };
        reader.readAsDataURL(selectedFile);
    };

    return (
        <div>
            <div className="flex gap-2 flex-col max-w-[300px] mx-auto justify-between items-center">
                <div className="relative w-full  aspect-square rounded-xl flex justify-center items-center overflow-hidden border-2 border-indigo-500 shadow-lg">
                    {!previewURL && (
                        <span className="text-center">
                            No any Image for Preview
                        </span>
                    )}
                    {previewURL && (
                        <Image
                            className="object-cover object-center cursor-pointer hover:object-contain duration-300"
                            src={previewURL}
                            alt="Preview"
                            fill
                        />
                    )}
                </div>
                <button className="relative bg-indigo-500 w-full rounded-xl text-white px-4 py-2 cursor-pointer capitalize shadow-lg">
                    pick Image
                    <input
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        placeholder="pick image"
                    />
                </button>
            </div>
        </div>
    );
};

export default ImagePicker;
