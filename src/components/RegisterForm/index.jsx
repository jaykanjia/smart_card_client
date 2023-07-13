"use client"
import React from "react";
import Image from "next/image";
import styles from "./register.module.css";

export default function Register() {
    return (
        <main className={styles.logincontainer}>
            <div className={styles.container}>
                <div className={styles.wb}>WELCOME !</div>
                <div className={styles.title}>Create a Card</div>
                
                <div className="grid md:grid-cols-2 gap-8 w-full  ">
                    <div className={styles.fieldcon}>
                        <span className={styles.details}>Name</span>
                        <input
                            className={styles.inputstyle}
                            type="name"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className={styles.fieldcon}>
                        <div className={styles.data}>
                            <span className={styles.details}>Profession</span>
                            {/* <button className={styles.fp}>Forgot password?</button> */}
                        </div>
                        <input
                            className={styles.inputstyle}
                            type="profession"
                            placeholder="Tell us about your work"
                            required
                        />
                    </div>
                    <div className={styles.fieldcon}>
                        <div className={styles.data}>
                            <span className={styles.details}>About</span>
                            {/* <button className={styles.fp}>Forgot password?</button> */}
                        </div>
                        < textarea
                            className={styles.inputstyle}
                            type="about"
                            placeholder="Tell us a little about youself"
                            required
                            style={{ resize: 'vertical', overflow: 'hidden', height: '40px', paddingTop: '9px' }}
                            onInput={(e) => {
                                e.target.style.height = 'auto';
                                e.target.style.height = e.target.scrollHeight + 'px';
                            }}
                        />
                    </div>
                    <div className={styles.fieldcon}>
                        <span className={styles.details}>Company Number</span>
                        <input
                            className={styles.inputstyle}
                            type="number"
                            placeholder="Enter your company contact number"
                            required
                            style={{ appearance: 'textfield', '-moz-appearance': 'textfield' }}
                        />
                    </div>
                    <div className={styles.fieldcon}>
                        <span className={styles.details}>Email</span>
                        <input
                            className={styles.inputstyle}
                            type="email"
                            placeholder="Enter your Company email address"
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            title="Please enter a valid email address"
                        />
                    </div>
                    <div className={styles.fieldcon}>
                        <div className={styles.data}>
                            <span className={styles.details}>Address</span>
                            {/* <button className={styles.fp}>Forgot password?</button> */}
                        </div>
                        < textarea
                            className={styles.inputstyle}
                            type="address"
                            placeholder="Share your Company location"
                            required
                            style={{ resize: 'vertical', overflow: 'hidden', height: '40px', paddingTop: '9px' }}
                            onInput={(e) => {
                                e.target.style.height = 'auto';
                                e.target.style.height = e.target.scrollHeight + 'px';
                            }}
                        />
                    </div>
                    <div className={styles.fieldcon}>
                        <span className={styles.details}>Company website</span>
                        <input
                            className={styles.inputstyle}
                            type="url"
                            placeholder="Enter your Company website address"
                            required
                            pattern="https?://.+"
                            title="Please enter a valid URL starting with http:// or https://"
                        />
                    </div>
                   
                    <div className={styles.fieldcon}>
                        <span className={styles.details}>Profile Image</span>
                        <input
                            className={styles.inputstyle}
                            type="file"
                            aria-label="profile image"
                            accept=".png, .jpg, .jpeg"
                            required
                        />
                    </div>
                    <div className={styles.fieldcon}>
                        <span className={styles.details}>Banner Image</span>
                        <input
                            className={styles.inputstyle}
                            type="file"
                            aria-label="banner image"
                            accept=".png, .jpg, .jpeg"
                            required
                        />
                    </div>
                


                </div>

                <div className="m-[30px_0px] flex gap-3">
                    <button className={styles.btn1}>Cancel</button>
                    <button className={styles.btn}>Login</button>
                </div>
                <div className="flex flex-row gap-[5px]">
                    <p className="text-[#aabfd0]">Not registered yet?</p>
                    <p className={styles.reg}>Register</p>
                </div>
            </div>
        </main>
    );
}
