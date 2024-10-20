import React from 'react'
import classes from './ContactLine.module.css'

const ContactLine = ({icon, text, color}) => {
  return (
    <div className={classes.line}>
       <span style={{color}}>{icon}</span>
       <p>{text}</p> 
    </div>
  )
}

export default ContactLine