import { configureStore } from "@reduxjs/toolkit";
import productsFilters from "./productsFilters";
import CartSlice from "./CartSlice";



const store = configureStore({
    reducer: {
        filters: productsFilters,
        cart: CartSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;
export default store;