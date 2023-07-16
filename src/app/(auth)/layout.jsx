import React from 'react';

const layout = ({ children }) => {
    return (
        <main
            className={`w-full min-h-[100vh] flex justify-center items-center bg-[#323f4b] sm:bg-[#222222]`}
        >
            <div
                className={`max-w-[500px] w-[100%] bg-[#323f4b] sm:p-[25px_30px] p-[15px_20px] sm:m-[0px_30px] m-[0px_15px] rounded-[10px]`}
            >
                {children}
            </div>
        </main>
    );
};

export default layout;
