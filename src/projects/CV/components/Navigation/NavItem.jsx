import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NavItem = ({ icon, text, onClick, active }) => {
    return (
        <nav className={active ? 'item active' : 'item'} onClick={onClick}>
            <div className='icon-holder'>
                <FontAwesomeIcon icon={icon} />
            </div>
            <p className='text'>{text}</p>
            <div className='spaceholder'/>
        </nav>
    )
}

export default NavItem