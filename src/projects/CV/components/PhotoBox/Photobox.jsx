import React from 'react'

const Photobox = ({ avatar, name, title, description }) => {
    if (!title && !description) {
        return <div className='photobox'>
            <img className='avatar' src={avatar} alt="avatar" />
            <p className='name'>{name}</p>
        </div>
    } else {
        return <div className='photobox home'>
            <img className="avatar" src={avatar} alt="avatar" />
            <h1 className='name'>{name}</h1>
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>
        </div>
    }
}

export default Photobox