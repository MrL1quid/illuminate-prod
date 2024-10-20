import React from 'react'
import TimelineItem from './TimelineItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

const Timeline = ({ data }) => {
  let componentData = "Initial state";
  switch (data.status) {
    case "loading":
      componentData = <FontAwesomeIcon className="icon" icon={faSyncAlt} spin size='2x' />
      break;
    case "error":
      componentData = <p className='err'>Something went wrong; please review your server connection!</p>
      break;
    case "done":
      if (data.educations && data.educations.length > 0) {
        componentData = data.educations.map(e => <TimelineItem date={e.date} title={e.title} description={e.text} key={e.id} />)
      } else {
        componentData = <p className='err'>There are no elements in here!</p>
      }
      break;
    default:
      break;
  }
  return (
    <section className='timeline' id='Education'>
      <h1 className='title'>Education</h1>
      <div className='dataHolder'>
        {componentData}
      </div>
    </section>
  )
}

export default Timeline