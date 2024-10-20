import '@testing-library/jest-dom/extend-expect';
import { changeActive } from "./skillSlice";
import { configureStore } from "@reduxjs/toolkit";
import { updateState } from './educationSlice';
import skillSlice from "./skillSlice";
import educationSlide from "./educationSlice";

describe("skillSlice test", () => {
    test("creates a skillSlice", () => {
        const store = configureStore({
            reducer: {
                skills: skillSlice,
                education: educationSlide
            }
        })

        expect(store.getState().skills.skillsIsOpen).toBe(false)
        store.dispatch(changeActive())
        expect(store.getState().skills.skillsIsOpen).toBe(true)

        expect(store.getState().education.educations).toStrictEqual([])
        store.dispatch(updateState({sussy: "baka"}))
        expect(store.getState().education.educations).toStrictEqual({sussy: "baka"})
        store.dispatch(updateState({red: "impostor"}))
        expect(store.getState().education.educations).toStrictEqual({red: "impostor"})
    })
})