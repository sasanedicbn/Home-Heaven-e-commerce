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
      },
      increaseProduct(state, action){
       const productId = action.payload;
       const currentProduct = state.cart.find((product) => product.id === productId)
       if(currentProduct){
        currentProduct.quantity += 1;
       }
      },
      decreaseProduct(state, action){
       const productId = action.payload;
       const currentProduct = state.cart.find((product) => product.id === productId)
       if(currentProduct && currentProduct > 1){
        currentProduct.quantity -= 1;
       }
      }
      
    },
});
export const { addItemToCart, increaseProduct, decreaseProduct} = cartSlice.actions;
export default cartSlice.reducer;
