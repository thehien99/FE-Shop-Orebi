import { getAllOrder } from "../../api/api"
import { getOrderSuccess } from "../reducers/orderReducer"

export const getAllOrderActions = () => async (dispatch) => {
  try {
    const response = await getAllOrder()
    dispatch(getOrderSuccess(response))
  } catch (error) {
    console.log(error)
  }
}