import React, { useEffect, useState } from 'react'
import PortfolioItem from './PortfolioItem';
import card1 from "../../assets/images/card_1.png"
import card2 from "../../assets/images/card_2.png"
import card3 from "../../assets/images/card_3.png"

const DUMMY_DATA = [
  {
    background: card1,
    id: 0,
    title: 'UI - 1',
    type: "ui",
    link: "https://google.com",
    description: "vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
  },
  {
    background: card3,
    id: 2,
    title: 'Code - 1',
    type: "code",
    link: "https://google.com",
    description: "vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
  },
  {
    background: card1,
    id: 1,
    title: 'UI - 2',
    type: "ui",
    link: "https://google.com",
    description: "arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
  },
  {
    background: card2,
    id: 3,
    title: 'Code - 2',
    type: "code",
    link: "https://google.com",
    description: "arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
  },
]

const Portfolio = () => {
  const [sortState, setSortState] = useState(0);
  const [currentData, setCurrentData] = useState(DUMMY_DATA);


  const sortHandler = (state) => {
    setSortState(state)
    switch (state) {
      case 0:
        setCurrentData(DUMMY_DATA)
        break;
      case 1:
          setCurrentData(DUMMY_DATA.filter(e => e.type === "code"))
        break
      case 2:
        setCurrentData(DUMMY_DATA.filter(e => e.type === "ui"))
        break
      default:
        break;
    }
  }

  useEffect(() => {
    sortHandler(0)
  }, [])

  return (
    <section className='portfolio' id='Portfolio'>
      <h1 className='title'>Portfolio</h1>
      <div className='controls'>
        <button data-testid="my-button" onClick={() => sortHandler(0)} className={sortState === 0 ? 'active' : ""}><p>All</p></button>
        /
        <button data-testid='my-button' onClick={() => sortHandler(1)} className={sortState === 1 ? 'active' : ""}><p>Code</p></button>
        /
        <button data-testid='my-button' onClick={() => sortHandler(2)} className={sortState === 2 ? 'active' : ""}><p>UI</p></button>

      </div>
      <div className="container">
        {currentData.map(e => <PortfolioItem title={e.title} key={e.id} img={e.background} desc={e.description} link={e.link} />)}
      </div>
    </section>
  )
}

export default Portfolio