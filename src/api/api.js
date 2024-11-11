import { axiosClient } from '../axios/axios'

export const registerApi = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axiosClient({
        method: 'POST',
        url: 'register',
        data: payload
      })
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}


export const loginApi = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axiosClient({
        method: 'post',
        url: 'login',
        data: payload
      })
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}