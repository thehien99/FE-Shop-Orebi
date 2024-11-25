import { createSlice } from "@reduxjs/toolkit";
import { FaLeaf } from "react-icons/fa";
const adminReducer = createSlice({
  name: "admin",
  initialState: {
    payload: {},
    msg: '',
    isLogin: false,
    token: ''
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.payload = action.payload
      state.msg = action.payload.msg
      state.isLogin = !!action.payload.accessToken
      state.token = action.payload.accessToken
      localStorage.setItem('admin', action.payload.accessToken); // Lưu token vào localStorage
    },
    loginFailed: (state) => {
      state.payload = null
      state.token = null
    },
    logout: (state) => {
      state.isLogin = false
      state.token = localStorage.removeItem('admin')
    }
  },
});

export const { loginSuccess, loginFailed, logout } = adminReducer.actions;

export default adminReducer.reducer;