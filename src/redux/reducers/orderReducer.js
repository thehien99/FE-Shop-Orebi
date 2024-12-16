import { createSlice } from "@reduxjs/toolkit";
const orderReducer = createSlice({
  name: "order",
  initialState: {
    order: []
  },
  reducers: {
    getOrderSuccess: (state, action) => {
      state.order = action.payload
    },
    getOrderFail: (state) => {
      state.order = null
    },
  },
});

export const { getOrderFail, getOrderSuccess } = orderReducer.actions;

export default orderReducer.reducer;