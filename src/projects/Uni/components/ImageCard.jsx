import React, { useState } from 'react'
import styles from './ImageCard.module.css'
import { useSelector } from 'react-redux'

const TEXT_EN = [
  'Zoom In',
]
const TEXT_GE = [
  'გადიდება',
]


const ImageCard = ({img}) => {
  const [preview, setPreview] = useState(false)
  const language = useSelector(state => state.language)
  
  const currentLang = language === "EN" ? TEXT_EN : TEXT_GE
  return (
    <div className={styles['img-holder']}>
        {preview && <div className={styles.fullscreen} onClick={()=>setPreview(false)}>
          <div className={styles.bg} />
          <img src={img} className={styles['full-img']} alt="fullscreen_image" />
        </div>}
        <div className={styles['cover-button']} onClick={()=>setPreview(true)}><h2>{currentLang[0]}</h2></div>
        <img src={img} alt="gallery_image" />
    </div>
  )
}

export default ImageCard