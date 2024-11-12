import styles from "./Scroll.module.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useMobileContext } from '../Components/ContextHolder'
import { useEffect, useRef } from "react";


const Scroll = ({ }) => {

  const { mobileNavActive } = useMobileContext();
  const scrollRef = useRef(null)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollRef !== null && scrollRef.current !== null)
        window.scrollY < 50
          ? (scrollRef.current.style.display = "block")
          : (scrollRef.current.style.display = "none");
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (scrollRef !== null && scrollRef.current !== null)
          window.scrollY < 50
            ? (scrollRef.current.style.display = "block")
            : (scrollRef.current.style.display = "none");
      });
    }
  }, [])

  useEffect(() => {
    if (scrollRef !== null && scrollRef.current !== null)
      (!mobileNavActive && window.scrollY < 50)
        ? (scrollRef.current.style.display = "block")
        : (scrollRef.current.style.display = "none");
    
  }, [mobileNavActive])

  const scrollHandler = () => {
    setTimeout(function () {
      window.scrollTo({ top: 400, behavior: "smooth" });
    }, 2);
  };

  return (
    <>
      <div className={styles.elem} onClick={scrollHandler} ref={scrollRef}>
        <MdOutlineArrowDropDown />
      </div>
    </>
  );
};

export default Scroll;
