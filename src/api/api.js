import { axiosClient } from "../axios/axios"

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

export const getUserApi = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axiosClient({
        method: 'get',
        url: 'getUser'
      })
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}

export const loginAdmin = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axiosClient({
        method: 'post',
        url: 'adPanel',
        data: payload
      })
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}

export const getAllProductApi = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axiosClient({
        method: 'get',
        url: 'getallProduct',
      })
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}

export const getOneProductApi = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axiosClient({
        method: 'get',
        url: 'getProduct',
        params: { id: query }
      })
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}

export const searchProductApi = (query) => {
  console.log(query)
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosClient({
        method: 'get',
        url: `search`,
        params: { search: query }
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}