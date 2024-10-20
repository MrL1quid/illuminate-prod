import React from 'react'
import Info from "../../components/Info/Info"

const TimelineItem = ({ date, title, description }) => {
    return (
        <div className='item'>
            <div className='date-holder'>
                <p>{date}</p>
            </div>
            <Info content>
                <p className='title'>{title}</p>
                <p className='description'>{description}</p>
            </Info>
        </div>
    )
}

export default TimelineItem