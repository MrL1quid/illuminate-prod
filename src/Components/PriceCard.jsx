import React from 'react'
import styles from './PriceCard.module.css'

const PriceCard = ({title, content, price, dark}) => {
  return (
    <div className={`${styles.card} ${dark === true ? styles.dark : ''}`}>
        <h2>{title}</h2>
        <ul>{content.map(e => (<li key={e}>{e}</li>))}</ul>
        <h3>{price}</h3>
    </div>
  )
}

export default PriceCard