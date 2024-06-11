import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/types";

interface CartState {
    cart: Product[];
}

const initialState: CartState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<Product>) {
            const newProduct = action.payload;
            const existingProduct = state.cart.find(product => product.id === newProduct.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cart.push(newProduct);
            }
        },
        increaseProduct(state, action: PayloadAction<{ id: string; product: Product }>) {
            const { id, product } = action.payload;
            const currentProduct = state.cart.find(product => product.id === id);
            if (currentProduct) {
                currentProduct.quantity += 1;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
        },
        decreaseProduct(state, action: PayloadAction<string>) {
            const productId = action.payload;
            const currentProduct = state.cart.find(product => product.id === productId);
            if (currentProduct && currentProduct.quantity > 1) {
                currentProduct.quantity -= 1;
            }
        },
        removeItemFromCart(state, action: PayloadAction<string>) {
            const productId = action.payload;
            state.cart = state.cart.filter(product => product.id !== productId);
        },
        clearShoppingCart(state) {
            state.cart = [];
        }
    },
});

export const { addItemToCart, increaseProduct, decreaseProduct, removeItemFromCart, clearShoppingCart } = cartSlice.actions;
export default cartSlice.reducer;

