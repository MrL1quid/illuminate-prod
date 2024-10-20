import { useSelector } from "react-redux";
import classes from "./Contact.module.css";
import { useRef } from "react";
import ContactLine from "../components/ContactLine";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const TEXT_EN = [
  "Contact us!",
  "Your Email",
  "Subscribe to our newsletter",
  "Submit",
];
const TEXT_GE = [
  "დაგვიკავშირდით!",
  "თქვენი ელ-ფოსტა",
  "გამოიწერეთ ელექტრონული გაზეთი",
  "დადასტურება",
];

const Contact = () => {
  const checkRef = useRef()
  const language = useSelector((state) => state.language);
  const currentLang = language === "EN" ? TEXT_EN : TEXT_GE;

  const checkhandler = ()=> {
    checkRef.current.checked = !checkRef.current.checked
  }

  return (
    <div className={classes.page}>
      <h1>{currentLang[0]}</h1>
      <div className={classes["info-holder"]}>
        <ContactLine icon={<IoIosMail/>} text='studenthotels@gmail.com' color='#cea800'/>
        <ContactLine icon={<FaPhone/>} text='+995 575 272 545' color='#cea800'/>
        <div>
          <button onClick={() => window.open('https://www.facebook.com', '_blank')}><FaFacebook/></button>
          <button onClick={() => window.open('https://www.x.com', '_blank')}><FaSquareXTwitter/></button>
        </div>
      </div>
      <div className={classes["form-holder"]}>
        <form className={classes.form}>
          <input type="email" required placeholder={currentLang[1]}/>
          <div className={classes["check-holder"]} onClick={checkhandler}>
            <input type="checkbox" ref={checkRef}/>
            <span className={classes.checkmark}/>
            <p>{currentLang[2]}</p>
          </div>
          <button>{currentLang[3]}</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
