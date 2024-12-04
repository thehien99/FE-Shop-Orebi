import { createSlice } from "@reduxjs/toolkit";
const cartReducer = createSlice({
  name: "getUser",
  initialState: {
    cartProduct: JSON.parse(localStorage.getItem('cart')) || []
  },
  reducers: {
    addProductSuccess: (state, action) => {
      state.cartProduct.push(action.payload)
      localStorage.setItem('cart', JSON.stringify(state.cartProduct))

    },
    removeProduct: (state, action) => {

    }
  },
});

export const { addProductSuccess, removeProduct } = cartReducer.actions;

export default cartReducer.reducer;