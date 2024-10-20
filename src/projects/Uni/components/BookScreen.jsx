import React, { useEffect, useRef, useState } from 'react'
import styles from './BookScreen.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { book } from '../slices/roomSlice';
import { addBook } from '../slices/bookedSlice';

const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};
const TEXT_EN = [
    'Total',
    'Insert the details for booking',
    'Amount of nights',
    'Book a room',
  ]
  const TEXT_GE = [
    'მთლიანად',
    'შეიყვანეთ მონაცემები ოთახის დასაჯავშნად',
    'ღამეების რაოდენობა',
    'ოთახის დაჯავშნა',
  ]
const BookScreen = ({ id, placesLeft, closeFunc, price }) => {
    const language = useSelector(state => state.language)
    const currentLang = language === "EN" ? TEXT_EN : TEXT_GE

    const dispatch = useDispatch()
    const rooms = useSelector(state => state.rooms)
    const dateRef = useRef(null)
    const [nights, setNights] = useState('')

    const bookFunc = () => {
        if((nights+"").length > 0) {
            dispatch(book({id, amt: nights}))
            const chosenElem = rooms[rooms.findIndex(e => e.id === id)]
            dispatch(addBook({
                ...chosenElem,
                nights: nights,
                date: dateRef.current.value,
                bookId: Date.now()
            }))
            closeFunc()
        }
    }

    const validateInput = (e)=>{
        let input = e.target.value
        
        if(input !== ''){
            if(input < 1) setNights(1)
            else if(input > placesLeft) setNights(placesLeft)
            else setNights(input)
        }
        else setNights('')
    }

    return (
        <div className={styles.modal}>
            <div className={styles.bg} onClick={closeFunc}/>
            <div className={styles.content}>
                <h1>{currentLang[1]}</h1>
                <input type="number" required placeholder={currentLang[2]} min={1} max={placesLeft} value={nights} onChange={e => validateInput(e)}/>
                <input type="date" min={getCurrentDate()} ref={dateRef} defaultValue={getCurrentDate()} />
                <p><strong>{currentLang[0]}: </strong>{nights * price}$</p>
                <button onClick={bookFunc}>{currentLang[3]}</button>
            </div>
        </div>
    )
}

export default BookScreen