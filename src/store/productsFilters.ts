// store/productsFiltersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialFilters = {
    category: "All",
    company: "All",
    color: "All",
    search: "",
    price: 309999,
    shipping: false,
    sort: "lowest",
};

const productsFiltersSlice = createSlice({
    name: 'filters',
    initialState: {
        products: [],
        filters: initialFilters,
        filteredProducts: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
            state.filteredProducts = action.payload;
        },
        setFilter: (state, action) => {
            state.filters[action.payload.key] = action.payload.value;
        },
    },
});

export const { setFilter, setProducts } = productsFiltersSlice.actions;
export default productsFiltersSlice.reducer;
