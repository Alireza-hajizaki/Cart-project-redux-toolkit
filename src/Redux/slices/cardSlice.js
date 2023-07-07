import {createSlice} from "@reduxjs/toolkit";
import {useState} from "react";

// const [decrement , setDecrement] = useState("");
const initialState = {
    shoppCart : [],
    increment : '',
    decrement : '',
    addProduct : '',
    removeProducts : '',
    clear : '',
}

export const cardSlice = createSlice({
    name:'Card',
    initialState,
    reducers : {
        setAddToProduct : (state , action) => {
            state.shoppCart = [...state.shoppCart , {...action.payload}]
        }

    }
})

export const { reducers } = cardSlice.actions

export default cardSlice.reducer