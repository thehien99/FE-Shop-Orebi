import { getAllOrder, getAllOrderAdminApi } from "../../api/api"
import { getOrderSuccess, getOrderUserFailed, getOrderUserSuccess } from "../reducers/orderReducer"

export const getAllOrderActions = () => async (dispatch) => {
  try {
    const response = await getAllOrder()
    dispatch(getOrderSuccess(response))
  } catch (error) {
    console.log(error)
  }
}

export const getAllOrderAdminActions = () => async (dispatch) => {
  try {
    const response = await getAllOrderAdminApi()

    dispatch(getOrderUserSuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}