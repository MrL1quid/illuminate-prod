import React from 'react'
import styles from './HotelCard.module.css'
import { useSelector } from 'react-redux'

const TEXT_EN = [
  'Price',
  'Bed Type',
  'Space',
  'Book',
  'Night',
  'id',
  'Nights available',
  'Unavailable',
]
const TEXT_GE = [
  'ფასი',
  'საწოლის ტიპი',
  'ადგილი',
  'დაჯავშნა',
  'ღამე',
  'id',
  'დარჩენილია ღამეები',
  'მიუწვდომელია',
]
const HotelCard = ({ img, price, bed, space, name, id, placesLeft, bookFunct }) => {
  const language = useSelector((state) => state.language);
  const currentLang = language === "EN" ? TEXT_EN : TEXT_GE;

  return (
    <div className={styles.card}>
      {(placesLeft === 0) && <div className={styles.unavailable}><h2>{currentLang[7]}</h2></div>}
      <img src={img} alt="hotel_image" />
      <h2>{name}</h2>
      <p><strong>{currentLang[5]}: </strong> {id}</p>
      <p><strong>{currentLang[0]}: </strong> ${price}/{currentLang[4]}</p>
      <p><strong>{currentLang[1]}: </strong> {bed}</p>
      <p><strong>{currentLang[2]}: </strong> {space}</p>
      <p><strong>{currentLang[6]}: </strong> {placesLeft}</p>
      <button onClick={bookFunct}>{currentLang[3]}</button>
    </div>
  )
}

export default HotelCard