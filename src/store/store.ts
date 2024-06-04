import { configureStore } from "@reduxjs/toolkit";
import productsFilters from "./productsFilters";



const store = configureStore({
    reducer: {
        filters: productsFilters
    }
})
export type RootState = ReturnType<typeof store.getState>;
export default store;