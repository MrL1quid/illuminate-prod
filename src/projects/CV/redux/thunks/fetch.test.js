import '@testing-library/jest-dom/extend-expect';
import { configureStore } from "@reduxjs/toolkit";
import skillSlice from "../slices/skillSlice";
import educationSlide from "../slices/educationSlice";
import server from "../../services/server"
import { fetchEdData } from './edDataFetch';

server()

describe("skillSlice test", () => {
    test("creates a skillSlice", () => {
        const store = configureStore({
            reducer: {
                skills: skillSlice,
                education: educationSlide
            }
        })

        store.dispatch(fetchEdData({url: "api/educations", method: "GET"}))
        expect(store.getState().education.educations).toStrictEqual([])
    })
})