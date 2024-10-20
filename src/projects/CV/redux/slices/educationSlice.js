import { createSlice } from "@reduxjs/toolkit";
import { fetchEdData } from "../thunks/edDataFetch";

const edSlice = createSlice({
    name: 'education',
    initialState: {
        educations: [],
        status: "done"
    },
    reducers: {
        updateState: (state, action) => ({...state, educations: action.payload})
    },
    extraReducers: (builder)=>{
        builder
            .addCase(fetchEdData.pending, state => {
                state.status = "loading"
            })
            .addCase(fetchEdData.fulfilled, (state, action) => {
                state.status = "done"
                state.educations = action.payload.data
            })
            .addCase(fetchEdData.rejected, (state) => {
                state.status = "error"
            })
    }
})

export const {updateState} = edSlice.actions
export default edSlice.reducer