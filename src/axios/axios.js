import axios from "axios";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_KEY
})

axiosClient.interceptors.request.use((config) => {
  // Làm gì đó trước khi request dược gửi đi
  let token = window.localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Beaer ${token}`
  } else {
    delete config.headers['Authorization'];
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

axiosClient.interceptors.response.use(
  (response) => {
    // refeshtoken
    return response.data;
  },
  function (error) {

    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    return Promise.reject(error);
  });