import { getAllProductApi, getOneProductApi, searchProductApi } from "../../api/api"
import { getAllProductFaild, getAllProductSuccess, getOneProductFailed, getOneProductSuccess, getProductSearchFailed, getProductSearchSuccess } from "../reducers/productReducer"

export const getAllProductActions = (res) => async (dispatch) => {
  try {
    dispatch(getAllProductSuccess(res))
  } catch (error) {
    dispatch(getAllProductFaild(error))
  }
}

export const getOneProductActions = (payload) => async (dispatch) => {
  try {
    const res = await getOneProductApi(payload)
    dispatch(getOneProductSuccess(res.payload))
  } catch (error) {
    dispatch(getOneProductFailed(error))
  }
}

export const ProductSearchActions = (res) => async (dispatch) => {
  try {
    dispatch(getProductSearchSuccess(res))
    console.log(res)
  } catch (error) {
    dispatch(getProductSearchFailed(error))
  }
}