import { createSlice } from "@reduxjs/toolkit";
const getProduct = createSlice({
  name: "getAllProduct",
  initialState: {
    product: '',
    productOne: "",
    productSearch: []
  },
  reducers: {
    getAllProductSuccess: (state, action) => {
      state.product = action.payload
    },
    getAllProductFaild: (state) => {
      state.product = null
    },
    getOneProductSuccess: (state, action) => {
      state.productOne = action.payload
    },
    getOneProductFailed: (state, acrtion) => {
      state.productOne = null
    },
    getProductSearchSuccess: (state, action) => {
      state.productSearch = action.payload
    },
    getProductSearchFailed: (state) => {
      state.productSearch = null
    }
  },
});

export const { getProductSearchFailed, getProductSearchSuccess, getAllProductSuccess, getAllProductFaild, getOneProductSuccess, getOneProductFailed } = getProduct.actions;

export default getProduct.reducer;