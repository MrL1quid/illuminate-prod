import React, { useState } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../Components/ProjectCard";
import img1 from "../imgs/site1.png";
import img2 from "../imgs/site2.png";
import img3 from "../imgs/site3.png";
import img4 from "../imgs/site4.png";
import ProjectDetails from "../Components/ProjectDetails";
import DATA from '../misc/WebsiteData.jsx'

const Projects = () => {
  const [detailsActive, setDetailsActive] = useState(false);
  const [currentData, setcurrentDatacurrentData] = useState([]);

  const dataSetter = (id) => {
    setcurrentDatacurrentData(DATA[id]);
    setDetailsActive(true);
  };

  const disableDetails = () => {
    setDetailsActive(false);
  };

  return (
    <div className={styles.page}>
      <h1>PROJECTS</h1>
      <p>
        There are the projects previously done by me. Some of them were hosted
        for my clients and some were created as a training / other practical
        works.
      </p>
      <div className={styles.content}>
        <ProjectCard
          src={img1}
          title={"advokatbekauri.ru"}
          onClick={dataSetter}
          id={0}
        />
        <ProjectCard
          src={img2}
          title={"autodiagnostika.ge"}
          onClick={dataSetter}
          id={1}
        />
        <ProjectCard
          src={img3}
          title={"Student Hotels"}
          onClick={dataSetter}
          id={2}
        />
        <ProjectCard
          src={img4}
          title={"CV Website"}
          onClick={dataSetter}
          id={3}
        />
      </div>

      <ProjectDetails disableFunc={disableDetails} data={currentData} active={detailsActive}/>
    </div>
  );
};

export default Projects;
