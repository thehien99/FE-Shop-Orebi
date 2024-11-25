import { loginAdmin } from "../../api/api"
import { loginFailed, loginSuccess } from "../reducers/adminReducer"

export const loginAdminActions = (payload) => async (dispatch) => {
  try {
    const res = await loginAdmin(payload)
    dispatch(loginSuccess(res))
  } catch (error) {
    dispatch(loginFailed(error))
  }
}