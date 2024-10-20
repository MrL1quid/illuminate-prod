import React from 'react'
import styles from './DropNavbar.module.css'
import { RiCloseLargeLine } from "react-icons/ri";
import DropNav from './DropNav.jsx'

const DropNavbar = ({active, disableFunc}) => {

  return (
    <div className={`${styles.nav} ${active ? styles.active : ''}`}>
        <button className={styles.close} onClick={disableFunc}><RiCloseLargeLine/></button>
        <div className={styles.navs}>
          <DropNav to='/' text='HOME' disableFunc={disableFunc}/>
          <DropNav to='/about' text='ABOUT ME' disableFunc={disableFunc}/>
          <DropNav to='/pricing' text='PRICING' disableFunc={disableFunc}/>
          <DropNav to='/projects' text='PROJECTS' disableFunc={disableFunc}/>
          <DropNav to='/contact' text='CONTACT' disableFunc={disableFunc}/>
        </div>
    </div>
  )
}

export default DropNavbar