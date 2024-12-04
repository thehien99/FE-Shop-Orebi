import { addProductSuccess } from "../reducers/cartReducer"

export const cartActions = (res) => async (dispatch) => {
  try {
    dispatch(addProductSuccess(res))
  } catch (error) {
    console.log(error)
  }
}