import React from 'react'
import styles from './DetailFeature.module.css'

const DetailFeature = ({icon, text}) => {
  return (
    <div className={styles.feature}>
        <span>{icon}</span>
        <p>{text}</p>
    </div>
  )
}

export default DetailFeature