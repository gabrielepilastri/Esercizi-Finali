import { createSlice } from "@reduxjs/toolkit";



export const favSlice = createSlice({
    name: 'fav',
    initialState: {
        value: [],
    },
    reducers: {
        addFav: (state, action) => {
            state.value = action.payload
        }
    }
})


export const { addFav } = favSlice.actions;

export const favReducer = favSlice.reducer
