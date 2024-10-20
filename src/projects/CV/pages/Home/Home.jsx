import React from 'react'
import Photobox from '../../components/PhotoBox/Photobox'
import img from "../../assets/images/avatar.png"
import Button from "../../components/Button/Button"
import { Link } from 'react-router-dom'

const Home = () => {
  const title = "Programmer, React Front-End Developer (not me on the picture btw)"
  return (
    <div className='main'>
      <Photobox
        avatar={img}
        name="Tedo Bekauri"
        title={title}
        description="Check the works of the web developer Tedo Bekauri (aka me). 
        This website will provide you with all the necessary information about my overall skills and abilities concerning web development."
      />
      <Link to="/projects/cv-app/inner"><Button text='Know more' /></Link>
    </div>
  )
}

export default Home