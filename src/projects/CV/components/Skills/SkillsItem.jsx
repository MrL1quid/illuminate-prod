import React from 'react'

const SkillsItem = ({ name, value }) => {

    return (
        <div className='skillsItem' style={{ width: value + '%' }}>
            <p>{name}</p>
        </div>
    )
}

export default SkillsItem