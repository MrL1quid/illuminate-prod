import styles from "./Navbar.module.css";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DropNavbar from "./DropNavbar";
import { HiBars3 } from "react-icons/hi2";
import {useMobileContext} from './ContextHolder'


const Navbar = () => {
  const location = useLocation();
  const [mobile, setMobile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false)
  const {setMobileNavActive} = useMobileContext();

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
    mobileMenu ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
    // setLastScrollPos(window.scrollY);
    setMobileNavActive(mobileMenu)
  },[mobileMenu])
  
  const closeHandler = ()=> {
    setMobileMenu(false)
  }

  return (
    <div className={styles.nav}>
      <div className={styles["logo"]}>
        <h3>ILLUMINATE</h3>
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
            <DropNavbar active={mobileMenu} disableFunc={closeHandler}/>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
