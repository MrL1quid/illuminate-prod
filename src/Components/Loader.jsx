import React, { useState, useEffect } from "react";
import { VscLoading } from "react-icons/vsc";
import styles from "./Loader.module.css";

const Loader = () => {
  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    // window.addEventListener("load", () => {
    //   setShowComponents(true);
    // });
    // return () => {
    //   window.removeEventListener("load", () => {
    //     setShowComponents(true);
    //   });
    // };
    const finishLoading = ()=>{
      if (window.document.readyState === "complete") setShowComponents(true);
    }
    finishLoading()
    window.onload = () => {
      finishLoading()
    };
  }, [showComponents]);
  return !showComponents ? (
    <div className={styles.screen}>
      <VscLoading />
    </div>
  ) : (
    <></>
  );
};

export default Loader;
