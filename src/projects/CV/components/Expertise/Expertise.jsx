import React from 'react'
import ExpItem from './ExpItem'

const Expertise = ({ data }) => {
  return (
    <section id='Experience'>
      <h1 className='title'>Experience</h1>
      <div className='expContainer'>
        {data.map(e => <ExpItem date={e.date} info={e.info} key={e.info.id}/>)}
      </div>
    </section>
  )
}

export default Expertise