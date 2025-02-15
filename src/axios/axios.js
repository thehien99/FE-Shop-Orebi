import axios from "axios";


export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  withCredentials: true, // Bật để cookie được gửi và nhận tự động
})


axiosClient.interceptors.request.use((config) => {
  // Làm gì đó trước khi request dược gửi đi
  let token = window.localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  } else {
    delete config.headers['Authorization'];
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

let isRefreshing = false //Trạng thái làm mới token

let refreshSubscribes = [] //Danh sách các api đang chờ token mới sẵn sàng

const onRefreshed = (token) => {
  refreshSubscribes.forEach((callback) => callback(token)) //cập nhật token mới cho các api đang chờ
  refreshSubscribes = [] //Xóa danh sách chờ khi call api xong
}

const addRefreshSubscribes = (callback) => {
  refreshSubscribes.push(callback) //Thêm api mới vào danh sách chờ
}


axiosClient.interceptors.response.use(
  (response) => response.data, // trả về data nếu ko có lỗi

  //xử lí nếu có lỗi 
  async function (error) {

    const originalRequest = error.config //api đầu tiên gây ra lỗi

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true //Đánh dấu các api đã được thử lại

      if (!localStorage.getItem('token')) {
        return Promise.reject(error) //người dùng đã đăng xuất
      }

      if (isRefreshing) {
        return new Promise((resolve) => {
          addRefreshSubscribes((token) => {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            resolve(axiosClient(originalRequest)) //gửi lại các yêu cầu kèm theo token mới
          })
        })
      }

      isRefreshing = true //Bắt đầu làm mới token

      try {
        const res = await axiosClient({
          method: 'post',
          url: 'rftk',
          withCredentials: true
        })

        const { accessToken } = res //lấy token mới từ res

        if (accessToken) {
          localStorage.setItem("token", accessToken)
          axiosClient.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
        }

        isRefreshing = false //đặt lại trạng thái làm mới token
        onRefreshed(accessToken) // cập nhật token mới cho các api đang chờ

        return axiosClient(originalRequest) //gửi lại các api ban đầu

      } catch (refreshError) {
        isRefreshing = false

        if (refreshError.response?.status === 403) {
          localStorage.removeItem('token')
          document.cookie = "refreshToken=; Max-Age=0; path=/;"; // Xóa refresh token.
          window.location.href = "/login"
        }

        return Promise.reject(refreshError); // Trả về lỗi nếu làm mới thất bại.
      }
    }

    return Promise.reject(error); // Trả về lỗi nếu không phải lỗi 401.
  }
)


