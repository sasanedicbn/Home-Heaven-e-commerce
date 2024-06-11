import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/types";



type  Filters = {
    category: string;
    company: string;
    color: string;
    search: string;
    price: number;
    shipping: boolean;
    sort: string;
    [key: string]: string | number | boolean;

}


interface FiltersState {
    products: Product[];
    filters: Filters;
    filteredProducts: Product[];
}

const initialFilters: Filters = {
    category: "All",
    company: "All",
    color: "All",
    search: "",
    price: 309999,
    shipping: false,
    sort: "lowest",
};

const initialState: FiltersState = {
    products: [],
    filters: initialFilters,
    filteredProducts: [],
};

const productsFiltersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
            state.filteredProducts = action.payload;
        },
        setFilter: (state, action: PayloadAction<{ key: string; value: any }>) => {
            state.filters[action.payload.key] = action.payload.value;
            state.filteredProducts = filterProducts(state.products, state.filters);
        },
        resetFilters: (state) => {
            state.filters = initialFilters;
            state.filteredProducts = state.products;
        },
        sortProduct: (state, action: PayloadAction<string>) => {
            state.filters.sort = action.payload;
            state.filteredProducts = sortProducts(state.filteredProducts, state.filters.sort);
        }
    },
});

const sortProducts = (filteredProducts: Product[], sort: string) => {
    switch (sort) {
        case 'lowest':
            return [...filteredProducts].sort((a, b) => a.price - b.price);
        case 'highest':
            return [...filteredProducts].sort((a, b) => b.price - a.price);
        case 'a-z':
            return [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
        case 'z-a':
            return [...filteredProducts].sort((a, b) => b.name.localeCompare(a.name));
        default:
            return filteredProducts;
    }
}

const filterProducts = (products: Product[], filters: Filters) => {
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

export const { setFilter, setProducts, resetFilters, sortProduct } = productsFiltersSlice.actions;
export default productsFiltersSlice.reducer;
