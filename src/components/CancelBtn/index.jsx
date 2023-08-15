'use client';
import React from 'react';
import FloatingBtn from '../FloatingBtn';

const CancelBtn = ({ setState }) => {
    return (
        <div className="absolute top-8 left-4 sm:right-10 flex flex-col gap-4">
            <FloatingBtn onClick={() => setState(false)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                    />
                </svg>
            </FloatingBtn>
        </div>
    );
};

export default CancelBtn;
