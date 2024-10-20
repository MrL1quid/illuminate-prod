import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa6";

const NAV_TEXT_EN = ["Home", "Profile", "Contact Us", "Log In", "Sign Up"];
const NAV_TEXT_GE = [
  "მთავარი",
  "პროფილი",
  "დაგვიკავშირდით",
  "ავტორიზაცია",
  "რეგისტრაცია",
];

const Navbar = () => {
  const language = useSelector((state) => state.language);
  const currentLang = language === "EN" ? NAV_TEXT_EN : NAV_TEXT_GE;
  const [barWidth, setBarWidth] = useState(window.innerWidth < 1200);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      setBarWidth(window.innerWidth < 1200);
    };

    window.addEventListener("resize", resizeHandler);
    !barWidth && setMobileMenu(false)
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [barWidth]);

  return (
    <div className={classes.bar}>
      {!barWidth && (
        <div className={classes["nav-holder"]}>
          <Link to="/projects/student-hotels">
            <p>{currentLang[0]}</p>
          </Link>
          <Link to="/projects/student-hotels/profile">
            <p>{currentLang[1]}</p>
          </Link>
          <Link to="/projects/student-hotels/contact">
            <p>{currentLang[2]}</p>
          </Link>
          <Link to="/projects/student-hotels/login">
            <p>{currentLang[3]}</p>
          </Link>
          <Link to="/projects/student-hotels/signup">
            <p>{currentLang[4]}</p>
          </Link>
        </div>
      )}
      {barWidth && (
        <button
          className={classes.dropdown}
          onClick={() => setMobileMenu((s) => !s)}
        >
          <FaBars />
        </button>
      )}
      {mobileMenu && (
        <div className={classes["mobile-menu"]}>
          <div className={classes.holder}>
            <Link to="/projects/student-hotels">
              <p>{currentLang[0]}</p>
            </Link>
            <Link to="/projects/student-hotels/profile">
              <p>{currentLang[1]}</p>
            </Link>
            <Link to="/projects/student-hotels/contact">
              <p>{currentLang[2]}</p>
            </Link>
            <Link to="/projects/student-hotels/login">
              <p>{currentLang[3]}</p>
            </Link>
            <Link to="/projects/student-hotels/signup">
              <p>{currentLang[4]}</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
