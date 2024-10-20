import React, { useEffect } from 'react'
import SkillsForm from './SkillsForm'
import { useSelector, useDispatch } from 'react-redux'
import SkillsItem from './SkillsItem'
import Button from '../Button/Button'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { changeActive, loadSkills, resetSkills } from '../../redux/slices/skillSlice'

const Skills = () => {
    const skillsData = useSelector(state => state.skills)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadSkills())
    }, [dispatch])

    return (
        <section className='skills' id="Skills">
            <h1 className='title'>Skills</h1>
            <div className='changerHolder'>
                <Button text='Reset' onClick={() => dispatch(resetSkills())} />
                <Button icon={<FontAwesomeIcon icon={faPenToSquare} />} text='Open edit' onClick={() => dispatch(changeActive())} />
            </div>
            {skillsData.skillsIsOpen && <SkillsForm />}
            <div className='container'>
                {skillsData.skills && skillsData.skills.map((e, i) => <SkillsItem name={e.name} key={i} value={e.range} />)}
            </div>
            <div className='lowLines'>
                <div /> <div /> <div />
            </div>
            <div className='lowTitles'>
                <p>Beginner</p>
                <p>Proficient</p>
                <p>Expert</p>
                <p>Master</p>
            </div>
        </section>
    )
}

export default Skills