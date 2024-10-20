import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { VscLoading } from "react-icons/vsc";

const ProjectCard = ({ src, title, onClick, id }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.card} onClick={() => onClick(id)}>
      <h3>{title}</h3>
      {loading && <div className={styles.loader}><VscLoading/></div>}
      <img
        src={src}
        alt="big screen image"
        onLoad={()=> setLoading(false)}
        style={{
          visibility: loading ? "hidden" : "visible",
          opacity: loading ? "0" : "1",
        }}
      />
    </div>
  );
};

export default ProjectCard;
