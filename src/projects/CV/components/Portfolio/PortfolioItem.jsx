import React from 'react'

const PortfolioItem = ({title, img, desc, link}) => {
  return (
    <div className={"item"}>
      <img src={img} alt="Background" className='background'/>
      <div className="content">
        <p className='title'>{title}</p>
        <p className='description'>{desc}</p>
        <a href={link} className='link'>View resource</a>
      </div>  
    </div>
  )
}

export default PortfolioItem