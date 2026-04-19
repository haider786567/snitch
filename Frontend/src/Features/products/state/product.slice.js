import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
    name: "product",
    initialState: {
        sellerProducts: [],
        Products: [],

        loading: false,
        error: null,
    },
    reducers: {
        setSellerProducts: (state, action) => {
            state.sellerProducts = action.payload;
        },
        setProducts: (state, action) => {
            state.Products = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { setError, setLoading, setSellerProducts,setProducts } = productSlice.actions
export default productSlice.reducer