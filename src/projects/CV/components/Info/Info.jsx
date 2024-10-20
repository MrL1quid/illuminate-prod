import React from 'react'

const Info = ({ content, text, children }) => {
  return (
    <div className='info'>
      {content ? <div>
        {children}
      </div> : <p>{text}</p>}
    </div>
  )
}

export default Info