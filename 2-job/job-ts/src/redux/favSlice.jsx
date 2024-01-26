import { createSlice } from "@reduxjs/toolkit";



export const favSlice = createSlice({
    name: 'fav',
    initialState: {
        value: [],

    },
    reducers: {
        addFav: (state, action) => {
            state.value.push(action.payload);
            
        },
        delFav: (state, action) => {
            state.value =  state.value.filter((title) => title !== action.payload);
            
        }
    }
})


export const { addFav, delFav } = favSlice.actions;

export const favReducer = favSlice.reducer
