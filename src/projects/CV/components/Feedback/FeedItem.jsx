import React from 'react'
import Info from '../Info/Info'

const FeedItem = ({ feedback, reporter }) => {
    const {photoUrl, name, citeUrl} = reporter
    return (
        <div className='feed-item'>
            <Info text={feedback}/>
            <div className='review-user-holder'>
                <img src={photoUrl} alt="User"/>
                <p>{name}, <a href={citeUrl}>{citeUrl}</a></p>
            </div>
        </div>
    )
}

export default FeedItem