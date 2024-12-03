import { createSlice } from "@reduxjs/toolkit";
const getUserReducer = createSlice({
  name: "getUser",
  initialState: {
    userInfo: '',
    getAddress: '',
  },
  reducers: {
    getUserSuccess: (state, action) => {
      state.userInfo = action.payload.detail
    },
    getUseFaied: (state) => {
      state.userInfo = null
    },
    getAddressSuccess: (state, action) => {
      state.getAddress = action.payload
    },
    getAddressFailed: (state, action) => {
      state.getAddress = null
    }
  },
});

export const { getAddressSuccess, getAddressFailed, getUserSuccess, getUseFaied } = getUserReducer.actions;

export default getUserReducer.reducer;