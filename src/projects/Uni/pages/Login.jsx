import React from "react";
import classes from "./Login.module.css";
import bg from '../imgs/login.jpg'
import LoginBar from "../components/LoginBar";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useSelector } from "react-redux";

const TEXT_EN = [
  'Log into your account',
  'Username',
  'Password',
  'Log In',
  'or',
  'Login with Facebook',
  'Login with Gmail',
]
const TEXT_GE = [
  'გაიარეთ ავტორიზაცია',
  'მომხმარებლის სახელი',
  'პაროლი',
  'შესვლა',
  'ან',
  'ავტორიზაცია Facebook-ით',
  'ავტორიზაცია Gmail-ით',
]

const Login = () => {
  const language = useSelector(state => state.language)

  const currentLang = language === "EN" ? TEXT_EN : TEXT_GE

  return (
    <div className={classes.page}>
      <div className={classes["image-holder"]}>
        <img className={classes.img} src={bg} alt="Background" />
      </div>
      <div className={classes["form-holder"]}>
        <form className={classes.form}>
          <h1>{currentLang[0]}</h1>
          <input type="text" required placeholder={currentLang[1]} />
          <input type="password" required placeholder={currentLang[2]} />
          <button>{currentLang[3]}</button>
          <p>{currentLang[4]}</p>
          <LoginBar icon={<FaFacebook/>} text={currentLang[5]} color='#1877f2' mt='1lh'/>
          <LoginBar icon={<SiGmail/>} text={currentLang[6]} color='#EB483B' mt='1lh' mb='1lh'/>
        </form>
      </div>
    </div>
  );
};

export default Login;
