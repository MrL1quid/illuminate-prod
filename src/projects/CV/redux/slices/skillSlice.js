import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
    name: 'skills',
    initialState: {
        skillsIsOpen: false,
        skills: [],
        status: "done"
    },
    reducers: {
        changeActive: (state) => ({
            ...state,
            skillsIsOpen: !state.skillsIsOpen
        }),
        loadSkills: (state) => {
            if (localStorage.getItem("skills") !== null && localStorage.getItem("skills") !== 'null' && localStorage.getItem("skills") !== '') {
                return {
                    ...state,
                    skills: JSON.parse(localStorage.getItem("skills"))
                }
            } else {
                return {
                    ...state,
                    skills: []
                }
            }
        },
        addSkill: (state, action)=>{
            localStorage.setItem("skills", JSON.stringify([...state.skills, action.payload]))
            return({
                ...state,
                skills: [...state.skills, action.payload]
            })
        },
        resetSkills: ()=>{
            localStorage.setItem("skills", [])
            return([])
        }

    }
})

export const { addSkill, changeActive, loadSkills, resetSkills } = skillSlice.actions
export default skillSlice.reducer