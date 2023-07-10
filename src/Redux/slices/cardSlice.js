import {createSlice} from "@reduxjs/toolkit";
import {getToLocalStorage, setToLocalStorage} from "../localStorage/localStorage";


const initialState = {
    shoppCart : getToLocalStorage()
}

export const cardSlice = createSlice({
    name:'Card',
    initialState,
    reducers : {
        setAddToCart : (state , action) => {
            const {product, qty} = action.payload
            state.shoppCart.push({product , qty})
            setToLocalStorage(state.shoppCart)
        },
        setRemoveFromCart : (state , action) => {
            state.shoppCart = state.shoppCart.filter(item => item.product.id !== action.payload)
            setToLocalStorage(state.shoppCart)
        },
        increment : (state , action) => {
            state.shoppCart = state.shoppCart.map(item => item.product.id === action.payload ? {...item, qty: item.qty + 1} : item)
            setToLocalStorage(state.shoppCart)
        },
        decrement : (state , action) => {
            state.shoppCart = state.shoppCart.map(item => item.product.id === action.payload ? {...item, qty: item.qty - 1} : item)
            setToLocalStorage(state.shoppCart)
        },

    }
})

export const { setAddToCart , setRemoveFromCart, increment ,decrement } = cardSlice.actions

export default cardSlice.reducer