import styles from "./Navbar.module.css";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import DropNavbar from "./DropNavbar";
import { HiBars3 } from "react-icons/hi2";
import { MobileNavContext } from "../App";

const Navbar = () => {
  const location = useLocation();
  const [mobile, setMobile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false)
  const {setMobileNav} = useContext(MobileNavContext)

  useEffect(() => {
    // initial state change
    setMobile(window.innerWidth <= 900);
    
    // function for the eventListener
    const handleResize = ()=> {
      setMobile(window.innerWidth <= 900);
    }
      window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(()=>{
    mobileMenu ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll')
    setMobileNav(mobileMenu)
  },[mobileMenu])

  return (
    <div className={styles.nav}>
      <div className={styles["logo"]}>
        <h3>WEB SOLUOR</h3>
      </div>
      <div className={styles["navs"]}>
        {!mobile ? (
          <>
            <Nav text="HOME" to={"/"} active={location.pathname === "/"} />
            <Nav
              text="ABOUT ME"
              to={"/about"}
            />
            <Nav
              text="PRICING"
              to={"/pricing"}
            />
            <Nav
              text="PROJECTS"
              to={"/projects"}
            />
            <Nav
              text="CONTACT"
              to={"/contact"}
            />
          </>
        ) : (
          <>
          <button className={styles.mobileBtn} onClick={()=>setMobileMenu(true)}><HiBars3/></button>
          <DropNavbar active={mobileMenu} disableFunc={()=>setMobileMenu(false)}/>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
