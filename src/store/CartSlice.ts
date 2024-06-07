import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart:[],
    },
    reducers: {
      addItemToCart(state, action) {
        const newProduct = action.payload
        const existingProduct = state.cart.find(product => product.id === newProduct.id)
        if(existingProduct){
           existingProduct.quantity += 1;
        } else{
          state.cart.push(newProduct)
        }
      }
      
    },
});
export const { addItemToCart} = cartSlice.actions;
export default cartSlice.reducer;
