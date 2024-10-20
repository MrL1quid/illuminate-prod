import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = ({ text, onClick, to }) => {
  return (
    <Link to={to}>
      <button
        onClick={onClick}
        className={`${styles.nav} ${location.pathname === to && styles.active}`}
      >
        <p>{text}</p>
        <div className={styles.bg1} />
        <div className={styles.bg2} />
      </button>
    </Link>
  );
};

export default Nav;
