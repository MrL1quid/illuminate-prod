import styles from "./Scroll.module.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useEffect, useRef } from "react";

const Scroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(scrollRef !== null && scrollRef.current !== null)
      window.scrollY < 50
        ? (scrollRef.current.style.display = "block")
        : (scrollRef.current.style.display = "none");
    });
  }, []);
  ``;
  const scrollHandler = () => {
    setTimeout(function () {
      window.scrollTo({ top: 400, behavior: "smooth" });
    }, 2);
  };

  return (
    <div className={styles.elem} onClick={scrollHandler} ref={scrollRef}>
      <MdOutlineArrowDropDown />
    </div>
  );
};

export default Scroll;
