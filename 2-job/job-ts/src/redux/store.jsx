import { configureStore } from "@reduxjs/toolkit";
import { jobReducer } from "./jobSlice";
import { favReducer } from "./favSlice";





export default configureStore({    /**assegno allo store i reducer esportati come const dallo slicer con la dot notation */
    reducer: {
        jobs: jobReducer,
        fav: favReducer
    },
})