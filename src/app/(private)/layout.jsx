import React from 'react';

const layout = ({ children }) => {
    return (
        <div className="relative w-screen h-screen overflow-scroll">
            {children}
        </div>
    );
};

export default layout;
