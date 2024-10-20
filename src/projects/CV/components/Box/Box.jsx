import React from 'react'

const Box = ({ title = "text for title", content = "some text" }) => {
  return (
    <section id="About">
      <h1 className='title'>{title}</h1>
      <div className='box'>
        <p className='box-content'>{content}</p>
      </div>
    </section>
  )
}

export default Box