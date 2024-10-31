import React, { useEffect, useRef } from "react";
import classes from "./Signup.module.css";
import bg from "../imgs/signup.jpg";
import LoginBar from "../components/LoginBar";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useSelector } from "react-redux";

const TEXT_EN = [
  "Create your account",
  "Name",
  "Email",
  "Password",
  "Repeat Password",
  "Sign Up",
  "or",
  "Register with Facebook",
  "Register with Gmail",
];
const TEXT_GE = [
  "გაიარეთ რეგისტრაცია",
  "სახელი",
  "ელ-ფოსტა",
  "პაროლი",
  "გაიმეორეთ პაროლი",
  "რეგისტრაცია",
  "ან",
  "დარეგისტრირდით Facebook-ით",
  "დარეგისტრირდით Gmail-ით",
];

const Signup = () => {
  const bgRef = useRef(null);
  const language = useSelector((state) => state.language);

  const currentLang = language === "EN" ? TEXT_EN : TEXT_GE;

  const resizeBg = () => {
    bgRef.current.style.height =
      document.body.scrollHeight + window.innerHeight * 0.06 + "px";
  };

  useEffect(() => {
    if (window.innerWidth < 1024) {
      window.addEventListener("resize", resizeBg());
    }

    return window.innerWidth < 1024
      ? window.removeEventListener("resize", resizeBg())
      : () => {};
  }, []);

  return (
    <div className={classes.page}>
      <div className={classes["image-holder"]} ref={bgRef}>
        <img className={classes.img} src={bg} alt="Background" />
      </div>
      <div className={classes["form-holder"]}>
        <form className={classes.form}>
          <h1>{currentLang[0]}</h1>
          <input type="text" required placeholder={currentLang[1]} />
          <input type="email" required placeholder={currentLang[2]} />
          <input type="password" required placeholder={currentLang[3]} />
          <input type="repeat password" required placeholder={currentLang[4]} />
          <button>{currentLang[5]}</button>
          <p>{currentLang[6]}</p>
          <LoginBar
            icon={<FaFacebook />}
            text={currentLang[7]}
            color="#1877f2"
            mt="1lh"
          />
          <LoginBar
            icon={<SiGmail />}
            text={currentLang[8]}
            color="#EB483B"
            mt="1lh"
            mb="1lh"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
