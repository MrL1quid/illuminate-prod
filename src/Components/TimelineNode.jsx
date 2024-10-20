import React from 'react'
import styles from './TimelineNode.module.css'

const TimelineNode = ({title, description}) => {
  return (
    <div className={styles.node}>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default TimelineNode