import { createSlice } from "@reduxjs/toolkit";
import h1 from "../imgs/r1.jpg";
import h2 from "../imgs/r2.jpg";
import h3 from "../imgs/r3.jpg";
import h4 from "../imgs/r4.jpg";
import h5 from "../imgs/r5.jpg";

const initialState = [
  {
    id: 1,
    name: "Solo Modern",
    price: 100,
    bedType: "Single Bed",
    peoplePerRoom: 1,
    img: h4,
    bookedAmount: 0,
    available: 3,
  },
  {
    id: 2,
    name: "Classic",
    price: 49,
    bedType: "Double Bed",
    peoplePerRoom: 5,
    img: h5,
    bookedAmount: 0,
    available: 4,
  },
  {
    id: 3,
    name: "Wood Style",
    price: 120,
    bedType: "Double Bed",
    peoplePerRoom: 4,
    img: h1,
    bookedAmount: 0,
    available: 2,
  },
  {
    id: 4,
    name: "Queen's Apartament",
    price: 850,
    bedType: "Queen Bed",
    peoplePerRoom: 2,
    img: h2,
    bookedAmount: 0,
    available: 4,
  },
  {
    id: 5,
    name: "Luxury Palace",
    price: 1100,
    bedType: "King Bed",
    peoplePerRoom: 2,
    img: h3,
    bookedAmount: 0,
    available: 4,
  },
]

const roomSlice = createSlice({
  name: "Rooms Slice",
  initialState,
  reducers: {
    book: (state, action) => {
      const chosenElem = state[state.findIndex(e => e.id === action.payload.id)]
      if (chosenElem.available - chosenElem.bookedAmount > 0) state[state.findIndex(e => e.id === action.payload.id)].bookedAmount+= action.payload.amt;
      console.log(action.payload.amt);
    },
    unbook: (state, action) => {
      state[state.findIndex((e) => e.id === action.payload.id)].bookedAmount-=action.payload.amt
    },
  },
});

export const { book, unbook } = roomSlice.actions;
export default roomSlice.reducer;
