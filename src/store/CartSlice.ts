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
       if(currentProduct && currentProduct.quantity > 1){
        currentProduct.quantity -= 1;
       }
      },
      removeItemFromCart(state, action) {
        const productId = action.payload;
        console.log('ss',productId)
        state.cart = state.cart.filter(product => product.id !== productId)
      }
      
    },
});
export const { addItemToCart, increaseProduct, decreaseProduct, removeItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;
