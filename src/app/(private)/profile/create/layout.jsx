import React from 'react';

const layout = ({ children }) => {
    return (
        <main
            className={`w-full md:py-8 min-h-screen flex justify-center items-center bg-light-300 dark:bg-dark-700`}
        >
            <div
                className={`max-w-screen-md w-full bg-light-500 sm:dark:bg-dark-500 dark:bg-dark-700 p-8 md:rounded-xl`}
            >
                {children}
            </div>
        </main>
    );
};

export default layout;
