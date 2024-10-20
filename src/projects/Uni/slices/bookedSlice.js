import { createSlice, current } from "@reduxjs/toolkit";

const initialState = []

const bookedSlice = createSlice({
    name: 'language slice',
    initialState,
    reducers: {
        addBook: (state, action)=> {
            state[state.length] = action.payload
        },
        remBook: (state, action)=>{
            return state.filter(e => e.bookId !== action.payload)
        }
    }
});

export const {addBook, remBook} = bookedSlice.actions
export default bookedSlice.reducer