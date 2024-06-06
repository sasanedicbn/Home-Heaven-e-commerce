import { createSlice } from "@reduxjs/toolkit";



const cart = createSlice({
    name: 'cart',
    initialState: {
        cart:[],
    },
    reducers: {
      addItemToCart(state, action) {
        state.cart = action.payload
      }
    },
});

export default cart.reducer;
