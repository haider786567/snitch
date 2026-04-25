import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        totalPrice: null,
        currency: null,
        items: [],
    },
    reducers: {
        setCart: (state, action) => {
            state.items = action.payload.items || [];
            state.totalPrice = action.payload.totalPrice || 0;
            state.currency = action.payload.currency;
        },
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        incrementCartItem: (state, action) => {
            const { productId, variantId } = action.payload

            state.items.forEach(item => {
                if (item.product._id === productId && item.variant === variantId) {
                    item.quantity += 1;
                    const priceObj = item.price || item.product?.variants?.price || item.product?.price;
                    const amount = priceObj?.amount || 0;
                    state.totalPrice += amount;
                }
            });
        },
        decrementCartItem: (state, action) => {
            const { productId, variantId } = action.payload

            const index = state.items.findIndex(item => item.product._id === productId && item.variant === variantId);
            if (index !== -1) {
                const item = state.items[index];
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    const priceObj = item.price || item.product?.variants?.price || item.product?.price;
                    const amount = priceObj?.amount || 0;
                    state.totalPrice -= amount;
                } else {
                    const priceObj = item.price || item.product?.variants?.price || item.product?.price;
                    const amount = priceObj?.amount || 0;
                    state.totalPrice -= amount;
                    state.items.splice(index, 1);
                }
            }
        },
        removeCartItem: (state, action) => {
            const { productId, variantId } = action.payload

            const index = state.items.findIndex(item => item.product._id === productId && item.variant === variantId);
            if (index !== -1) {
                const item = state.items[index];
                const priceObj = item.price || item.product?.variants?.price || item.product?.price;
                const amount = priceObj?.amount || 0;
                state.totalPrice -= (amount * item.quantity);
                state.items.splice(index, 1);
            }
        }
    }
})

export const { setCart, addItem, incrementCartItem ,decrementCartItem,removeCartItem} = cartSlice.actions
export default cartSlice.reducer