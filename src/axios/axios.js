import axios from "axios";
import Cookies from "js-cookie"; // Thư viện lưu cookie

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

axiosClient.interceptors.response.use(
  (response) => response.data, // Thành công, trả về response data
  async function (error) {
    const originalRequest = error.config;

    // Nếu lỗi 401 (Unauthorized) và chưa retry
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Đánh dấu đã retry để tránh vòng lặp vô hạn

      try {
        // Lấy refreshToken từ cookies
        const refreshToken = Cookies.get('refreshToken');
        console.log(refreshToken)
        if (!refreshToken) {
          throw new Error('Refresh token not found!');
        }

        // Gửi request lên BE để lấy accessToken mới
        const res = await axiosClient({
          method: 'post',
          url: 'rftk',
          withCredentials: true, // Bật để gửi cookie refreshToken
        })

        console.log(res)
        // const { accessToken } = res.data; // Lấy accessToken mới từ BE
        // console.log(accessToken)

        // // Lưu accessToken mới vào cookie (hoặc localStorage nếu cần)
        // localStorage.setItem('token', accessToken);

        // // Cập nhật accessToken mới vào headers
        // axiosClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        // originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        // // Thực hiện lại request ban đầu
        return axiosClient(originalRequest);
      } catch (refreshError) {
        // Nếu refreshToken không hợp lệ hoặc xảy ra lỗi
        console.error('Refresh token error:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    // Nếu không phải lỗi 401, hoặc request đã retry, trả lỗi ban đầu
    return Promise.reject(error);
  }
);
