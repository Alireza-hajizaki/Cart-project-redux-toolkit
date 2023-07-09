import {createSlice} from "@reduxjs/toolkit";


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
        setAddToCart : (state , action) => {
            state.shoppCart = [...state.shoppCart , action.payload]
        },
        setRemoveFromCart : (state , action) => {
            state.shoppCart = state.shoppCart.filter(product => product.id !== action.payload)
        },

    }
})

export const { setAddToCart , setRemoveFromCart } = cardSlice.actions

export default cardSlice.reducer