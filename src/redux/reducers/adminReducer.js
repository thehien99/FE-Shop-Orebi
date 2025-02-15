import { createSlice } from "@reduxjs/toolkit";

const adminReducer = createSlice({
  name: "admin",
  initialState: {
    payload: {},
    msg: "",
    isLogin: false,
    token: null,
    name: "",
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.payload = action.payload;
      state.msg = action.payload.msg;
      state.isLogin = !!action.payload.accessToken;
      state.token = action.payload.accessToken;
      localStorage.setItem("token", action.payload.accessToken); // Lưu token vào localStorage
    },
    loginFailed: (state) => {
      state.payload = null;
      state.token = null;
    },
    logout: (state) => {
      state.isLogin = false;
      localStorage.removeItem("token"); // Xóa token khi logout
    },
    getInforAdminSuccess: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { loginSuccess, loginFailed, logout, getInforAdminSuccess } = adminReducer.actions;

export default adminReducer.reducer;
