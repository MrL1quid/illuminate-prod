import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import ContactItem from './ContactItem'

const CONTACT_DATA = [
    {
        id: 1,
        title: "",
        info: "500 342 242",
        img: <FaPhoneAlt fill='rgb(38, 193, 126)' width='30px' />
    },
    {
        id: 2,
        title: "twolf957@gmail.com",
        info: "",
        img: <IoIosMail fill='rgb(38, 193, 126)' width='30px' />
    },
    {
        id: 3,
        title: "Twitter",
        info: "https://twitter.com/ThedoThePlayer",
        img: <FaSquareXTwitter fill='rgb(38, 193, 126)' width='30px' />
    },
    {
        id: 4,
        title: "Facebook",
        info: "https://www.facebook.com/Tedo.Bekauri.3",
        img: <FaFacebookSquare fill='rgb(38, 193, 126)' width='30px' />
    },
    {
        id: 5,
        title: "Skype",
        info: "https://www.donthaveskype.ge",
        img: <FaSkype fill='rgb(38, 193, 126)' width='30px' />
    },
]

const Contact = () => {
    return (
        <section className='contact' id='Contact'>
            <h1 className='title'>Contact</h1>
            <div>
                {CONTACT_DATA.map(e => <ContactItem title={e.title} info={e.info} img={e.img} key={e.id} />)}
            </div>
        </section>
    )
}

export default Contact