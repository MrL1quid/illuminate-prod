import React, { useContext } from "react";
import hsp1 from "../imgs/6.jpg";
import hsp2 from "../imgs/7.jpg";
import hsp3 from "../imgs/9.jpg";
import hsp4 from "../imgs/3.jpg";
import styles from "./Home.module.css";
import SubPage from "../Components/SubPage";
import Scroll from "../UI/Scroll";
import { MobileNavContext } from "../App";

const Home = () => {
  const {mobileNavActive} = useContext(MobileNavContext)

  return (
    <>
      {!mobileNavActive && <Scroll/>}
      <section className={styles.page}>
        <div className={styles["bg"]} />
        <h1>WEB SOLUOR</h1>
        <h2>OFFERING WEB DEVELOPMENT SERVICES TO THE USERS</h2>
      </section>
      <SubPage
        img={hsp3}
        title="REACTIVE APPS"
        description="CREATING WEB APPLICATIONS
        USING REACT.JS LIBRARY"
      />
      <SubPage
        img={hsp2}
        title="DIVERSITY OF OPTIONS"
        description="CREATING WEBSITES BY PROVIDED DESIGNS AND ALSO OFFERRING THE CUSTOM DESIGN OPTION"
        side
        dark
      />
      <SubPage
        img={hsp1}
        title="RESPONSIVE DESIGN"
        description="CREATING WEBPAGES FOR THE ABSOLUTE MAJORITY OF DISPLAY RESOLUTIONS"
      />
      <SubPage
        img={hsp4}
        title="STATE MANAGEMENT"
        description="STATE MANAGEMENT USING REDUX LIBRARY"
        side
        dark
      />
    </>
  );
};

export default Home;
