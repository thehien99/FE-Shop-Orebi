import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: "auth",
  initialState: {
    payload: "",
    payloadRegister: {},
    isLogin: false,
    token: null,
    role: ''
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.role = action.payload.role
      state.token = action.payload.accessToken;
      state.payload = action.payload.msg;
      state.isLogin = !!action.payload.accessToken;
      localStorage.setItem("token", action.payload.accessToken); // Lưu token user vào localStorage
    },
    loginFailed: (state, action) => {
      state.payload = action.payload;
      state.isLogin = false;
    },
    registerSuccess: (state, action) => {
      state.token = action.payload.accessToken;
      localStorage.setItem("token", action.payload.accessToken);
      state.payloadRegister = action.payload.user.name;
      state.isLogin = true;
    },
    registerFailed: (state) => {
      state.isLogin = false;
    },
    logoutSuccess: (state) => {
      state.token = null;
      state.isLogin = false;
      state.payload = null;
      localStorage.removeItem("token"); // Xóa token khi logout
      localStorage.removeItem('cart')
      localStorage.removeItem('persist:admin')
      localStorage.removeItem('persist:auth')

    },
  },
});

export const { loginFailed, loginSuccess, logoutSuccess, registerSuccess, registerFailed } = authReducer.actions;

export default authReducer.reducer;
