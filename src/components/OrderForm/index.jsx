import React from 'react';

const Orderform = () => {
    return (
        <div className=" mx-auto flex justify-center min-h-screen items-center bg-dark-500 sm:bg-dark-700 ">
            <form className="flex w-full rounded-xl max-w-[500px] px-8 sm:bg-dark-500 flex-col gap-8  ">
                <div className="flex flex-col gap-2">
                    <div
                        className={`text-2xl mt-8 font-semibold text-center text-white`}
                    >
                        Order Your Card
                    </div>
                </div>
                <div className={`flex flex-col gap-2`}>
                    <span className={`text-white`}>Name</span>
                    <input
                        className={`rounded-md py-2 px-4 text-gray-700`}
                        type="text"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className={`flex flex-col gap-2`}>
                    <span className={`text-white`}>Contact Number</span>
                    <input
                        className={`rounded-md py-2 px-4 text-gray-700`}
                        type="text"
                        placeholder="Enter your contact number"
                        required
                    />
                </div>
                <div className={`flex flex-col gap-2`}>
                    <span className={`text-white`}>Address</span>
                    <input
                        className={`rounded-md py-2 px-4 text-gray-700`}
                        type="text"
                        placeholder="Enter your address"
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <span>Payment Mode: cash on delevery</span>
                    <span>Rs. 999 + shipment</span>
                </div>
                <button
                    className={`bg-primary bg-opacity-80 text-white w-full rounded-md px-4 py-2 hover:bg-opacity-100  mb-8 `}
                    // onClick={(e) => onSubmit(e)}
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default Orderform;
