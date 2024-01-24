import { configureStore } from "@reduxjs/toolkit";
import { jobReducer } from "./jobSlice";
import { favReducer } from "./favSlice";





export default configureStore({
    reducer: {
        jobs: jobReducer,
        fav: favReducer
    },
})