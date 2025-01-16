import { getAddress, getUserApi, loginApi, registerApi } from "../../api/api"
import { axiosClient } from "../../axios/axios"
import { loginFailed, loginSuccess, logoutSuccess, registerFailed, registerSuccess } from "../reducers/authReducer"
import { getAddressSuccess, getUserSuccess } from "../reducers/getUserReducer"

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
    dispatch(loginSuccess(res))
  } catch (error) {
    dispatch(loginFailed(error))
  }
}

export const logoutActions = () => async (dispatch) => {
  try {
    dispatch(logoutSuccess());
    document.cookie = "refreshToken=; Max-Age=0; path=/;";
    localStorage.removeItem("token");
  } catch (error) {
    console.log(error);
  }
};




export const getUserActions = () => async (dispatch) => {
  try {
    const res = await getUserApi()
    dispatch(getUserSuccess(res))
  } catch (error) {
    console.log(error)
  }
}

export const getAddressActions = () => async (dispatch) => {
  try {
    const res = await getAddress()
    dispatch(getAddressSuccess(res))
  } catch (error) {
    console.log(error)
  }
}