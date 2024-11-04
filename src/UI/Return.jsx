import styles from "./Return.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Scroll = () => {
      return (<Link className={styles.elem} to='/' onClick={window.scrollTo({top: 0})}>
      <IoIosArrowBack />
    </Link>
  );
};

export default Scroll;
