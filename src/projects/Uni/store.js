import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import roomSlice from "./slices/roomSlice";
import bookedSlice from './slices/bookedSlice'

export const store = configureStore({
    reducer:{
        language: languageSlice,
        rooms: roomSlice,
        bookedRooms: bookedSlice
    }
})

