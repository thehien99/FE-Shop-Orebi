import { loginApi, registerApi } from "../../api/api"
import { loginFailed, loginSuccess, registerFailed, registerSuccess } from "../reducers/authReducer"

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