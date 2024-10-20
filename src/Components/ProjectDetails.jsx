import React, { useEffect, useRef } from "react";
import styles from "./ProjectDetails.module.css";
import DetailFeature from "./DetailFeature";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const ProjectDetails = ({ disableFunc, data, active }) => {
  const cardRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    if (cardRef.current) {
      const elemStyle = cardRef.current.style;
      elemStyle.visibility = active ? "visible" : "hidden";
    }
  }, [active]);

  const redirecthandler = () => {
    if (data.webData.type === "LINK") window.open(data.webData.url, "_blank");
    else {
      navigate(data.webData.url);
    }
  };

  return (
    <div
      className={`${styles.card}`}
      style={{ opacity: active ? "1" : "0" }}
      ref={cardRef}
    >
      <div
        className={`${styles["bg"]} ${active && styles.active}`}
        onClick={disableFunc}
      />
      <div className={`${styles.content} ${active && styles.activeFade}`}>
        <button className={styles.close} onClick={disableFunc}>
          <CgClose />
        </button>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
        <div className={styles.features}>
          <h3>FEATURES</h3>
          <div className={styles.featureList}>
            {data.features
              ? data.features.map((e, i) => (
                  <DetailFeature icon={e.icon} text={e.name} key={i} />
                ))
              : ""}
          </div>
        </div>
        <button className={styles.webNav} onClick={redirecthandler}>
          VISIT THE WEBSITE
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
