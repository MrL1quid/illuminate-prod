import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEdData } from '../../redux/thunks/edDataFetch'
import Panel from "../../components/Panel/Panel"
import Box from '../../components/Box/Box'
import Expertise from '../../components/Expertise/Expertise'
import Feedback from "../../components/Feedback/Feedback"
import pic from "../../assets/images/user.png"
import Portfolio from '../../components/Portfolio/Portfolio'
import Timeline from '../../components/TimeLine/Timeline'
import Contact from '../../components/Address/Contact'
import Skills from '../../components/Skills/Skills'
import server from '../../services/server'


const DUMMY_DATA = [
  {
    date: '2013-2014',
    info: {
      company: 'Google',
      job: 'Front-end developer / php programmer',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
      id: 0
    }
  },
  {
    date: '2012',
    info: {
      company: 'Twitter',
      job: 'Web developer',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
      id: 1
    }
  }
]
const DUMMY_TEXT = `My name is Tedo Bekauri. Currently, I study at Kutaisi International University in Georgia. 
I am a Front-End Web Developer and I have decided to take Epam courses to refresh my memory about web dev. 
This site will be an introduction to my skills. Some spaces are filled in with the real data and some of them are just placeholders.`

const FEEDBACK_DATA = [
  {
    feedback: `Very good guy bro, trust me! My boy made this website, u think he can't make yours? Quite a passionate guy
    fr fr, no cap, on god! Tbh he used to make games but well, I guess that's the path he has decided to take...`,
    reporter: { photoUrl: pic, name: 'Jonathan Doestar', citeUrl: 'https://www.citeexample.com', id: 0 }
  },
  {
    feedback: `Yep, whatever the guy above said. I wonder if anybody will actually read our totally non hardcoded reviews... Anyway, whoever it is and if you're reading this, wish you a good day... Or a night, you workaholic ;)`,
    reporter: { photoUrl: pic, name: 'Johnny Doestar', citeUrl: 'https://www.citeexample.com', id: 1 }
  },
  {
    feedback: `Rumors say he's planning to add a section for the websites he has made...`,
    reporter: { photoUrl: pic, name: 'Joseph Doestar', citeUrl: 'https://www.citeexample.com', id: 2 }
  }
]


const Inner = () => {
  const [active, setActive] = useState(true)
  const educationData = useSelector(state => state.education)
  const dispatch = useDispatch()

  const activeHandler = (state) => {
    setActive(state)
  }

  useEffect(() => {
    server()
    dispatch(fetchEdData("/api/educations"))
  }, [dispatch])

  return (
    <div className='inner'>
      <Panel func={activeHandler} />
      <div className={active ? 'content' : 'content wide'}>
        <Box
          title='About me'
          content={DUMMY_TEXT}
        />
        <Timeline data={educationData} />
        <Expertise data={DUMMY_DATA} />
        <Skills />
        <Portfolio />
        <Contact />
        <Feedback data={FEEDBACK_DATA} />
      </div>
    </div>
  )
}

export default Inner