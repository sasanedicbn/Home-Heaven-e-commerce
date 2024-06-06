import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
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
export const { addItemToCart} = cartSlice.actions;
export default cartSlice.reducer;
