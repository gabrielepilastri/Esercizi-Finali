import { createSlice } from "@reduxjs/toolkit";



export const jobSlice = createSlice({     /**jobs è inizialmente un array vuoto e l'action prende come payload il json fetchato */
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
