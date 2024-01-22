import { configureStore } from "@reduxjs/toolkit"
import { fetchReducer } from "../reducers/fetchSlice"






export const store = configureStore({ //collego store e slice
    reducer: {
        weather: fetchReducer
    }
})

