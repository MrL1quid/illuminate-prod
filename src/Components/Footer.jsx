import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const location = useLocation()

  return (
    <div className={styles.footer}>
      <div className={styles["logo-holder"]}>
        <h3>WEB SOLUOR</h3>
        <div>
          <button><FaLinkedin/></button>
          <button><IoMdMail/></button>
        </div>
      </div>
      <div className={styles.fnav}>
        <Link to={"/"} className={location.pathname === '/' ? styles.active : ''}>HOME</Link>
        <Link to={"/about"} className={location.pathname === '/about' ? styles.active : ''}>ABOUT ME</Link>
        <Link to={"/pricing"} className={location.pathname === '/pricing' ? styles.active : ''}>PRICING</Link>
        <Link to={"/projects"} className={location.pathname === '/projects' ? styles.active : ''}>PROJECTS</Link>
        <Link to={"/contact"} className={location.pathname === '/contact' ? styles.active : ''}>CONTACT</Link>
      </div>
      <p>&copy; Soluor - All rights reserved.</p>
    </div>
  );
};

export default Footer;
