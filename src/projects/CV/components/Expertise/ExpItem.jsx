import React from 'react'

const ExpItem = ({ date, info }) => {
    return (
        <div className="item">
            <div className='subItemL'>
                <p className='title'>{info.company}</p>
                <p className='date'>{date}</p>
            </div>
            <div className='subItemR'>
                <p className='title'>{info.job}</p>
                <p>{info.description}</p>
            </div>
        </div>
    )
}

export default ExpItem