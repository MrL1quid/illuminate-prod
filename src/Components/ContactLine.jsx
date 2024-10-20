import React from 'react'
import styles from './ContactLine.module.css'

const ContactLine = ({icon, text}) => {
  return (
    <div className={styles.line}>
        <p>{text}</p>
        <div className={styles.inline}/>
        {icon}
    </div>
  )
}

export default ContactLine