import { createSlice } from "@reduxjs/toolkit";
const getAllUserReducer = createSlice({
  name: "admin",
  initialState: {
    user: []
  },
  reducers: {
    getAllUserSuccess: (state, action) => {
      state.user = action.payload
    },
    getAllUserFailed: (state) => {
      state.user = []
    }
  },
});

export const { getAllUserSuccess, getAllUserFailed } = getAllUserReducer.actions;

export default getAllUserReducer.reducer;