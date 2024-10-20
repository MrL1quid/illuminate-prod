import React from 'react'
import styles from './Pricing.module.css'
import PriceCard from '../Components/PriceCard'

const temp1 = [
    'The website will be created according to the design provided by the client.',
    'Average needed time per basic page is 2-3 hours.'
]
const temp2 = [
    `This option is recommended if the user doesn't have a premade design.`,
    `Will provide the user with far more detailization if picked in addition to the webpage creation.`,
]

const Pricing = () => {
  return (
    <section className={styles.page}>
        <h1>PRICING</h1>
        <p>I offer <strong>two options</strong> for the website building: by <strong>premade templates</strong> or
            <strong> created from scratch</strong>, fully custom design. The project pricing varies 
            depending on the requirements of the client (let’s say, if we want to integrate different types 
            of features like language switching or product cart, the price would add up). Usually, the cheapest 
            types of websites are basic advertisement pages only with information on them.</p>
        <div className={styles.content}>
            <PriceCard title='WEBPAGE CREATION' content={temp1} price='15$/hour' key={0}/>
            <PriceCard title='DESIGN' dark content={temp2} price='200$/page (might change depending on complexity)' key={1}/>
        </div>
        <p>For any questions, you can contact me via the email or the form on the “CONTACT” page.</p>
    </section>
  )
}

export default Pricing