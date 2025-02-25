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


// Đảm bảo `axiosClient` có interceptor cho cả User và Admin.
axiosClient.interceptors.response.use(
  (response) => response.data, // trả về data nếu ko có lỗi

  async function (error) {
    const originalRequest = error.config; //api đầu tiên gây ra lỗi

    // Xử lý lỗi 401 (unauthorized)
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Đánh dấu đã thử lại request

      // Kiểm tra xem có token không, nếu không thì người dùng đã đăng xuất
      if (!localStorage.getItem('token')) {
        return Promise.reject(error);
      }

      if (isRefreshing) {
        // Nếu đang làm mới token, đợi cho tới khi có token mới
        return new Promise((resolve) => {
          addRefreshSubscribes((token) => {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            resolve(axiosClient(originalRequest)); // Gửi lại yêu cầu sau khi có token mới
          });
        });
      }

      isRefreshing = true; // Bắt đầu quá trình làm mới token

      try {
        const res = await axiosClient({
          method: 'post',
          url: '/rftk', // API lấy refresh token
          withCredentials: true,
        });

        const { accessToken } = res;

        if (accessToken) {
          localStorage.setItem("token", accessToken);
          axiosClient.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        }

        isRefreshing = false; // Đặt lại trạng thái làm mới token
        onRefreshed(accessToken); // Cập nhật các API đang chờ

        return axiosClient(originalRequest); // Gửi lại yêu cầu ban đầu

      } catch (refreshError) {
        isRefreshing = false;

        if (refreshError.response?.status === 403) {
          localStorage.removeItem('token');
          document.cookie = "refreshToken=; Max-Age=0; path=/;";
          window.location.href = "/login"; // Đưa người dùng về trang đăng nhập khi refresh token thất bại
        }

        return Promise.reject(refreshError); // Trả về lỗi nếu làm mới token thất bại
      }
    }

    return Promise.reject(error); // Trả về lỗi nếu không phải lỗi 401
  }
);


