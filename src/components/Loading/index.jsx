import React from 'react';

const Loading = () => {
    return (
        <div className="w-full h-screen grid place-content-center">
            <span className="block w-12 h-12 rounded-full border-4 border-black dark:border-white border-t-transparent dark:border-t-transparent animate-spin"></span>
        </div>
    );
};

export default Loading;
