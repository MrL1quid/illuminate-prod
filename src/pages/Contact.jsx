import React from "react";
import ContactLine from "../Components/ContactLine";
import styles from './Contact.module.css'
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <h2>Send Me An Email</h2>
        <input type="text" placeholder="Your Name"/>
        <input type="text" placeholder="Your Email" />
        <textarea rows="3" placeholder="Your Message"></textarea>
        <button>Submit</button>
      </div>
      <div className={styles.contactInfo}>
        <h1>CONTACT ME</h1>
        <ContactLine icon={<IoIosMail/>} text='gudwebsites933@gmail.com'/>
        <ContactLine icon={<FaLinkedin/>} text='Tedo Bekauri'/>
        <ContactLine icon={<FaPhoneAlt/>} text='+995 552 53 43 33'/>
      </div>
    </div>
  );
};

export default Contact;
