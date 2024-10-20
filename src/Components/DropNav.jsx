import { Link } from "react-router-dom";
import styles from "./DropNav.module.css";

const DropNav = ({ to, disableFunc, text }) => {
  return (
    <span className={styles.nav}>
      <Link to={to}>
        <p onClick={disableFunc}>{text}</p>
      </Link>
    </span>
  );
};

export default DropNav;
