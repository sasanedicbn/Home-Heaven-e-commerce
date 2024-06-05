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
            console.log('action',action)
            state.filters[action.payload.key] = action.payload.value;
            console.log(action)
            state.filteredProducts = filterProducts(state.products, state.filters);
        
        },
        resetFilters:(state) => {
            state.filters = initialFilters
            state.filteredProducts = state.products
        },
        sortProduct:(state,action) => {
            state.filters.sort = action.payload
            state.filteredProducts = sortProducts(state.filteredProducts, state.filters.sort)
        }
    },
});


const filterProducts = (products, filters) => {
    return products.filter(product => {
        return (
            (filters.category === 'All' || product.category === filters.category) &&
            (filters.company === 'All' || product.company === filters.company) &&
            (filters.color === 'All' || product.color === filters.color) &&
            (filters.search === '' || product.name.toLowerCase().includes(filters.search.toLowerCase())) &&
            (product.price <= filters.price) &&
            (!filters.shipping || product.shipping === filters.shipping)
        );
    });
};

export const { setFilter, setProducts, resetFilters, sortProduct} = productsFiltersSlice.actions;
export default productsFiltersSlice.reducer;
