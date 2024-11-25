import { createSlice } from "@reduxjs/toolkit";
const authReducer = createSlice({
  name: "auth",
  initialState: {
    payload: "",
    payloadRegister: {},
    isLogin: false,
    token: null
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = localStorage.setItem('token', action.payload.accessToken)
      state.payload = action.payload.msg
      state.isLogin = action.payload.accessToken && true
    },
    loginFailed: (state, action) => {
      state.payload = action.payload;
      state.isLogin = false
    },
    registerSuccess: (state, action) => {
      state.token = action.payload.accessToken && localStorage.setItem('token', action.payload.accessToken)
      state.payloadRegister = action.payload.user.name
      state.isLogin = action.payload.accessToken && true
    },
    registerFailed: (state) => {
      state.isLogin = false
    },
    logoutSuccess: (state) => {
      state.token = localStorage.removeItem('token')
      state.payload = null
      state.isLogin = false
    },
  },
});

export const { loginFailed, loginSuccess, logoutSuccess, registerSuccess, registerFailed } = authReducer.actions;

export default authReducer.reducer;