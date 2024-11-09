import React, { useContext } from "react";
import SubPage from "../Components/SubPage";
import styles from './About.module.css'
import img1 from '../imgs/edited1.jpg'
import Timeline from "../Components/Timeline";
import Scroll from "../UI/Scroll";
import {useMobileContext} from '../Components/ContextHolder'

const DESC =
  `Hello! I’m Tedo, a passionate front-end React developer 
  mostly focused on modern style web applications. With a 
  strong foundation in HTML, CSS, and JavaScript, I love 
  creating interactive and responsive designs. React is my 
  framework of choice, and I enjoy leveraging its component-based 
  architecture to build scalable and maintainable user interfaces. 
  I am constantly exploring new technologies and best practices to 
  enhance my skills not only in programming but in design as well.`;
const TIMELINE_DATA =
  [
    {
      id: 0,
      title: `Getting in touch with web development`,
      description: `I first started learning Web Development in the programming
       school 'Mziuri' in Georgia, right after finishing 2 year Game Development course.
        I learn HTML, CSS and JS, as well as some of the basic html, css and js libraries 
        like Bootstrap and Materialize.`
    },
    {
      id: 1,
      title: `Learning Back-End`,
      description: `Even though I specialize in React Front-End, during the second 
      semester of the Web Development classes, I learnt fundamentals of Back-End as
      well, including Node js libraries, such as Express and Mongoose.`
    },
    {
      id: 2,
      title: `Introduction to React and Redux`,
      description: `During the summer of 2021, I started learning React from the 
      courses my teacher had suggested to me, including Udemy and Youtube courses. 
      At around that time, I also built a basic website for my father, which I later updated in terms of design.`
    },
    {
      id: 3,
      title: `Courses to refresh memory`,
      description: `Throughout this time, I had been studying to get into university, 
      therefore, my Web Development skills have gotten dull. Because of this, I decided to
       take the course, which IT-Hub had suggested on par with Epam. One of the websites was made 
       after completing the course.`
    },
    {
      id: 4,
      title: `University Web Dev`,
      description: `Later on, I once again went through HTML, CSS and JS courses in university, 
      as well as React and Redux and made a basic website as a final project, which you can check
       out along with my other works.`
    },
  ]

const About = () => {
  const {mobileNavActive} = useMobileContext();
  
  return (
    <div>
      {!mobileNavActive && <Scroll/>}
      <SubPage description={DESC} title='ABOUT ME' textAlign='left' addStyles={styles.subpage} img={img1}/>
      <Timeline data={TIMELINE_DATA}/>
    </div>
  );
};

export default About;
