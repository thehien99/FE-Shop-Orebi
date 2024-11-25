import { createSlice } from "@reduxjs/toolkit";
const getUserReducer = createSlice({
  name: "getUser",
  initialState: {
    userInfo: ''
  },
  reducers: {
    getUserSuccess: (state, action) => {
      state.userInfo = action.payload.detail
    },
    getUseFaied: (state) => {
      state.userInfo = null
    }
  },
});

export const { getUserSuccess, getUseFaied } = getUserReducer.actions;

export default getUserReducer.reducer;