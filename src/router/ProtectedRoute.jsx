// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => {
  if (!isAuthenticated) {
    // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang login

    return <Navigate to="/system" />;
  }
  // Nếu đã đăng nhập, cho phép truy cập vào route cần bảo vệ
  return element;
};

export default ProtectedRoute;
