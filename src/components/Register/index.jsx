import React from 'react';
import Link from 'next/link';

const Register = ({ onSubmit, nameRef, emailRef, passwordRef }) => {
    return (
        <form>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <div className={`text-center font-semibold text-gray-500`}>
                        WELCOME
                    </div>
                    <div
                        className={`text-2xl font-semibold text-center text-white`}
                    >
                        Create Your Account for free
                    </div>
                </div>
                <div className={`flex flex-col gap-2`}>
                    <span className={`text-white`}>Name</span>
                    <input
                        ref={nameRef}
                        className={`rounded-md py-2 px-4 text-gray-700`}
                        type="text"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className={`flex flex-col gap-2`}>
                    <span className={`text-white`}>Email</span>
                    <input
                        ref={emailRef}
                        className={`rounded-md py-2 px-4 text-gray-700`}
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className={`flex flex-col gap-2`}>
                    <span className={`text-white`}>Password</span>
                    <input
                        ref={passwordRef}
                        className={`rounded-md py-2 px-4 text-gray-700`}
                        type="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className={`flex flex-col gap-2`}>
                    <span className={`text-white`}>Confirm Password</span>
                    <input
                        className={`rounded-md py-2 px-4 text-gray-700`}
                        type="password"
                        placeholder="Confirm your password"
                        required
                    />
                </div>
                <button
                    className={`bg-primary bg-opacity-80 text-white w-full rounded-md px-4 py-2 hover:bg-opacity-100`}
                    onClick={(e) => onSubmit(e)}
                >
                    Register
                </button>

                <div className="flex gap-2">
                    <p className="text-gray-400">Already registered?</p>
                    <Link href="/login">
                        <p className={`underline underline-offset-2`}>Login</p>
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default Register;
