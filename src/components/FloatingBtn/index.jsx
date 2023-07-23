import React from 'react';

const FloatingBtn = ({ onClick, children }) => {
    return (
        <div
            className="bg-white dark:bg-dark-500 w-12 h-12 p-3 grid place-items-center rounded-full"
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default FloatingBtn;
