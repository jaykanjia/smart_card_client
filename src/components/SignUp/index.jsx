import React from "react";
import Image from "next/image";
import styles from "./challenge.module.css";

export default function Challenge() {
  return (
    <main className={styles.logincontainer}>
      <div className={styles.container}>
        <div className={styles.wb}>WELCOME BACK</div>
        <div className={styles.title}>Log in to your account</div>
        <div className={styles.fieldcon}>
          <span className={styles.details}>Email</span>
          <input
            className={styles.inputstyle}
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className={styles.fieldcon}>
          <div className={styles.data}>
            <span className={styles.details}>Password</span>
            <button className={styles.fp}>Forgot password?</button>
          </div>
          <input
            className={styles.inputstyle}
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="m-[30px_0px]">
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
