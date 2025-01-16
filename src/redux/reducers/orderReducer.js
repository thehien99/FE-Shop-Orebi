import { createSlice } from "@reduxjs/toolkit";
const orderReducer = createSlice({
  name: "order",
  initialState: {
    order: [],
    listOrderOfUser: []
  },
  reducers: {
    getOrderSuccess: (state, action) => {
      state.order = action.payload
    },
    getOrderFail: (state) => {
      state.order = null
    },
    getOrderUserSuccess: (state, action) => {
      state.listOrderOfUser = action.payload
    },
    getOrderUserFailed: (state, action) => {
      state.listOrderOfUser = []
    }
  },
});

export const { getOrderFail, getOrderSuccess, getOrderUserSuccess, getOrderUserFailed } = orderReducer.actions;

export default orderReducer.reducer;