import { createSlice } from "@reduxjs/toolkit";



export const jobSlice = createSlice({
    name: "jobs",
    initialState: {
        value: [],
    },
    reducers: {
        getJobs: (state, action) => {
            state.value = action.payload;
        }
    }
})



export const { getJobs } = jobSlice.actions;

export const jobReducer = jobSlice.reducer
