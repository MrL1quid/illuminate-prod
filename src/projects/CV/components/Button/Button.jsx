import React from 'react'

const Button = ({ icon, text = "submit", onClick, shrink, type="", disabled, className }) => {
  return (
    <button className={className + " " + (shrink ? 'btn shrink' : "btn")} disabled={disabled} onClick={onClick} type={type}>
      {icon}<p>{text}</p>
    </button>
  )
}

export default Button