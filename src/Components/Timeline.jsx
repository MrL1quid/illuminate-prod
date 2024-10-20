import React from 'react'
import styles from './Timeline.module.css'
import TimelineNode from './TimelineNode'

const Timeline = ({data}) => {
  return (
    <section className={styles.timeline}>
        <h1>TIMELINE</h1>
        <div>
            {data.map(e => <TimelineNode key={e.id} title={e.title} description={e.description}/>)}
        </div>
    </section>
  )
}

export default Timeline