import React from "react";
import Image from 'next/image'

import styles from "./index.module.css";
import addAvatar from "../../static/images/addAvatar.png";

type Props = {};

function Register({}: Props) {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <span className={styles.logo}>Comp5322 Chat Spaces</span>
        <span className={styles.title}>Sign Up</span>
        <form className={styles.signupForm}>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input className={styles.imageUpload} type="file" />
          <label htmlFor="file">
            <Image src={addAvatar} alt="Error" width={31} />
            <span>Add a profile pic</span>
          </label>
          <button>Sign up</button>
        </form>
        <p className={styles.signin}>Already have an account? <span>login</span></p>
      </div>
    </div>
  );
}

export default Register;
