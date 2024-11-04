import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const location = useLocation()

  const btnhandler = (url)=>{
    window.open(url, '_blank');
  }

  const emailHandler = ()=>{
    window.location.href = `mailto:twolf957@gmail.com`;
  }

  return (
    <div className={styles.footer}>
      <div className={styles["logo-holder"]}>
        <h3>WEB SOLUOR</h3>
        <div>
          <button onClick={()=> btnhandler('https://www.linkedin.com/in/tedo-bekauri-707a05271')}><FaLinkedin/></button>
          <button onClick={emailHandler}><IoMdMail/></button>
        </div>
      </div>
      <div className={styles.fnav}>
        <Link to={"/"} onClick={window.scrollTo({top: 0})} className={location.pathname === '/' ? styles.active : ''}>HOME</Link>
        <Link to={"/about"} onClick={window.scrollTo({top: 0})} className={location.pathname === '/about' ? styles.active : ''}>ABOUT ME</Link>
        <Link to={"/pricing"} onClick={window.scrollTo({top: 0})} className={location.pathname === '/pricing' ? styles.active : ''}>PRICING</Link>
        <Link to={"/projects"} onClick={window.scrollTo({top: 0})} className={location.pathname === '/projects' ? styles.active : ''}>PROJECTS</Link>
        <Link to={"/contact"} onClick={window.scrollTo({top: 0})} className={location.pathname === '/contact' ? styles.active : ''}>CONTACT</Link>
      </div>
      <p>&copy; Soluor - All rights reserved.</p>
    </div>
  );
};

export default Footer;
