import { configureStore } from "@reduxjs/toolkit";
import skillSlice from "./slices/skillSlice";
import educationSlice from "./slices/educationSlice";

export const store = configureStore({
    reducer:{
        skills: skillSlice,
        education: educationSlice
    },
})