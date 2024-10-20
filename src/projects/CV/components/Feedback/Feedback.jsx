import React from 'react'
import FeedItem from './FeedItem'

const Feedback = ({data}) => {

  return (
    <section id="Feedback">
        <h1 className='title'>Feedback</h1>
        {data.map(e => <FeedItem feedback={e.feedback} reporter={e.reporter} key={e.reporter.id}/>)}
    </section>
  )
}

export default Feedback