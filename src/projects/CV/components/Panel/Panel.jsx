import React, { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import Photobox from '../PhotoBox/Photobox'
import Button from '../Button/Button'
import img from "../../assets/images/avatar.png"
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Panel = ({func}) => {
    const [active, setActive] = useState(true)
    const activeHandler = ()=> {
        setActive(!active)
        func(!active);
    }
    return (
        <div className={active ? 'panel' : 'panel disabled'}>
            <div className='panel-content'>
                <div>
                    <div className="photobox-holder">
                        <Photobox avatar={img} name="Tedo Bekauri" />
                    </div>
                    <Navigation />
                </div>
                <div className='back-btn-holder'>
                    <Link to="/projects/cv-app">
                        <Button icon={<FontAwesomeIcon icon={faChevronLeft}/>} shrink text='Go back'><p></p></Button>
                    </Link>
                </div>
            </div>
            <div className='panel-close-btn'>
                <button onClick={activeHandler} className='btn-panel'>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </div>
    )
}

export default Panel