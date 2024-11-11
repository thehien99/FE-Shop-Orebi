import { createSlice } from "@reduxjs/toolkit";
const authReducer = createSlice({
  name: "auth",
  initialState: {
    payload: "",
    isLogin: false,
    token: null
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.accessToken
      state.payload = action.payload
      state.isLogin = action.payload.accessToken && true
    },
    loginFailed: (state, action) => {
      state.payload = action.payload;
      state.isLogin = false
    },
    registerSuccess: (state, action) => {
      state.payload = action.payload
      state.isLogin = true
    },
    registerFailed: (state) => {
      state.isLogin = false
    },
    logoutSuccess: (state) => {
      state.isLogin = false
    },
  },
});

export const { loginFailed, loginSuccess, logoutSuccess, registerSuccess, registerFailed } = authReducer.actions;

export default authReducer.reducer;