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
const productsFilters = createSlice({
    name: 'filters',
    initialState:{
      products:[],
      filters:initialFilters,
      filteredProducts: [],
    },
    reducers:{
      setProducts:(state, action)=> {
           state.products = action.payload
        //    state.filteredProducts.push(state.products)
      },
      setFilter:(state, action) => {
       state.filters[action.payload.key] = action.payload.value
      },
    }
})
export const { setFilter, setProducts } = productsFilters.actions;
export default productsFilters.reducer


