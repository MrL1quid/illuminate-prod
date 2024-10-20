import { createSlice } from "@reduxjs/toolkit";

const initialState = 'EN'

const langSlice = createSlice({
    name: 'language slice',
    initialState,
    reducers: {
        switchLang: (state)=> (state === 'EN' ? 'GE' : 'EN'),
    }
});

export const {switchLang} = langSlice.actions
export default langSlice.reducer