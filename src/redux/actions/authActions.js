import { getUserApi, loginApi, registerApi } from "../../api/api"
import { axiosClient } from "../../axios/axios"
import { loginFailed, loginSuccess, logoutSuccess, registerFailed, registerSuccess } from "../reducers/authReducer"
import { getUserSuccess } from "../reducers/getUserReducer"
import Cookies from "js-cookie"; // Thư viện lưu cookie

export const registerActions = (payload) => async (dispatch) => {
  try {
    const res = await registerApi(payload)
    dispatch(registerSuccess(res))
  } catch (error) {
    dispatch(registerFailed(error))
  }
}

export const loginActions = (payload) => async (dispatch) => {
  try {
    const res = await loginApi(payload)
    Cookies.set('refreshToken', res.refreshToken)
    dispatch(loginSuccess(res))
  } catch (error) {
    dispatch(loginFailed(error))
  }
}

export const logoutActions = () => async (dispatch) => {
  try {
    dispatch(logoutSuccess())
    delete axiosClient.defaults.headers['Authorization'];
  } catch (error) {
    console.log(error)
  }
}

export const getUserActions = () => async (dispatch) => {
  try {
    const res = await getUserApi()
    dispatch(getUserSuccess(res))
  } catch (error) {
    console.log(error)
  }
}