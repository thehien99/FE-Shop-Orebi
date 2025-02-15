import { getAllUserAdmin, getUserApi, loginAdmin } from "../../api/api"
import { getInforAdminSuccess, loginFailed, loginSuccess } from "../reducers/adminReducer"
import { getAllUserSuccess } from "../reducers/getAllUserReducer"

export const loginAdminActions = (payload) => async (dispatch) => {
  try {
    const res = await loginAdmin(payload)
    dispatch(loginSuccess(res))
  } catch (error) {
    dispatch(loginFailed(error))
  }
}

export const getAlluserAdminActions = () => async (dispatch) => {
  try {
    const res = await getAllUserAdmin()
    dispatch(getAllUserSuccess(res))
  } catch (error) {
    console.log(error)
  }
}

export const getInforAdminActions = () => async (dispatch) => {
  try {
    const res = await getUserApi()
    dispatch(getInforAdminSuccess(res))
  } catch (error) {
    console.log(error)
  }
}

