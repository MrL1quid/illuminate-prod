import styles from './HotelProfileCard.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { remBook } from '../slices/bookedSlice'
import { unbook } from '../slices/roomSlice'

const TEXT_EN = [
    'Booked for nights',
    'Total price',
    'Unbook',
    'Entry Date',
]
const TEXT_GE = [
    'დაჯავშნილი ღამეების რაოდენობა',
    'ფასი მთლიანად',
    'გაუქმება',
    'შესვლის დღე',
  ]

const HotelProfileCard = ({ id, name, img, amt, price, bookId, date }) => {
    const language = useSelector(state => state.language)
    const currentLang = language === "EN" ? TEXT_EN : TEXT_GE
    const dispatch = useDispatch()

    const removeHandler = ()=>{
        dispatch(remBook(bookId))
        dispatch(unbook({
            id,
            amt
        }))
    }

    return (
        <div className={styles.card}>
            <div className={styles["img-holder"]}>
            <img src={img} alt="" />
            </div>
            <div className={styles.content}>
                <h2>{name}</h2>
                <p><strong>{currentLang[0]}:</strong> {amt}</p>
                <p><strong>{currentLang[1]}:</strong> {+amt * price}$</p>
                <p><strong>{currentLang[3]}:</strong> {date}</p>
                <button onClick={removeHandler}>{currentLang[2]}</button>
            </div>
        </div>
    )
}

export default HotelProfileCard