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
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosClient({
        method: 'get',
        url: `search`,
        params: { q: query }
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}


export const updateUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosClient({
        method: 'put',
        url: 'update_user',
        data: data
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}

export const createAddress = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosClient({
        method: 'post',
        url: 'createAddress',
        data: data
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}

export const getAddress = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosClient({
        method: 'get',
        url: 'getAddress',
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}