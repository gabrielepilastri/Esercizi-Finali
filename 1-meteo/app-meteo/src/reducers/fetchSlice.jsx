import { createSlice } from "@reduxjs/toolkit";

const initialState = { //definisco gli stati iniziali 
  city: [],
  city2: null,
};

const fetchSlice = createSlice({  //creo le azioni ed esporto il reducer da collegare allo store
  name: "weather",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload.city;
    },

    setCity2: (state, action) => {
        state.city2 = action.payload.city2;
    }
    
  },
});

export const { setCity, setCity2 } = fetchSlice.actions;
    
export const fetchReducer =  fetchSlice.reducer;
