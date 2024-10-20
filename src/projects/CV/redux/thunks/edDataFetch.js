import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEdData = createAsyncThunk("educations/fetchData", async (url) => {
    try {
        const response = await fetch(url).then(e => {
            if (!e.ok) {
                throw new Error(e.statusText)
            } else {
                return e.json()
            }
        })

        return response
    } catch (error) {
        throw new Error(error)
    }
})