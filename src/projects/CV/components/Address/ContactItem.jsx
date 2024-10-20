import React from 'react'

const ContactItem = ({ title, info, img }) => {
    let link = info;
    if (title.includes("@")) {
        link = "mailto:"+title
    } else if (/^[+]?[0-9-() ]{10,}$/.test(info)) {
        link = "tel:"+info
    }
    return (
        <div className='item'>
            <div className='icon-holder'>
                {img}
            </div>
            <a  href={link} className='description' target='_blank' rel="noreferrer">
                {title && <p className='title'>{title}</p>}
                {info && <p className='text'>{info}</p>}
            </a>
        </div>
    )
}

export default ContactItem