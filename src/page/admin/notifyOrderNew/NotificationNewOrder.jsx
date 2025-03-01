import React, { useState, useEffect } from 'react';
import socket from '../../../socket.io/SocketIo';  // Kết nối socket
import icon from '../../../icons/icons';
import { axiosClient } from '../../../axios/axios';
import { NavLink } from "react-router-dom";
import Router from '../../../router/router';

const NotificationNewOrder = () => {
  const [orders, setOrders] = useState([]); // Lưu danh sách đơn hàng đã đọc
  const [unreadOrders, setUnreadOrders] = useState([]); // Lưu danh sách đơn hàng chưa đọc
  const { LuBellRing } = icon;
  const [open, setOpen] = useState(false); // Điều khiển trạng thái mở/đóng bảng thông báo

  // Lắng nghe sự kiện 'newOrder' từ Socket.IO
  useEffect(() => {
    socket.on('newOrder', (order) => {
      console.log('Đơn hàng mới:', order);
      // Thêm đơn hàng mới vào đầu danh sách đơn hàng chưa đọc
      setUnreadOrders((prevOrders) => [order, ...prevOrders]); // Đưa đơn hàng mới vào đầu
    });

    return () => {
      socket.off('newOrder'); // Dọn dẹp khi component bị unmount
    };
  }, []);

  // Khi có đơn hàng mới, gọi API lấy tên người dùng
  useEffect(() => {
    const fetchUserNames = async () => {
      // Mảng để lưu tên người dùng sau khi API trả về
      const fetchedNames = [];

      for (let order of unreadOrders) {
        try {
          const res = await axiosClient({
            method: 'get',
            url: 'getUserOrder', // API để lấy thông tin người dùng
            params: { id: order.userId },
          });

          // Lưu tên người dùng vào mảng fetchedNames
          fetchedNames.push({ userName: res.name });
        } catch (error) {
          console.error('Lỗi khi lấy thông tin người dùng:', error);
        }
      }

      // Sau khi tất cả tên người dùng được lấy xong, cập nhật state orders mà không thay đổi unreadOrders
      setOrders((prevOrders) => [...fetchedNames, ...prevOrders]); // Đưa các đơn hàng mới vào đầu
    };

    // Chạy hàm khi `unreadOrders` thay đổi
    if (unreadOrders.length > 0) {
      fetchUserNames();
    }
  }, [unreadOrders]); // Thực hiện mỗi khi `unreadOrders` thay đổi

  // Hàm mở/đóng thông báo
  const hanldeOpen = () => {
    setOpen(!open);
    if (!open) {
      // Khi admin bấm vào chuông, chỉ xoá danh sách đơn hàng chưa đọc
      setUnreadOrders([]); // Xoá danh sách đơn hàng chưa đọc khi mở thông báo
    }
  };

  return (
    <div className="relative w-[270px]">
      <div className="cursor-pointer relative" onClick={hanldeOpen}>
        <LuBellRing className="text-3xl" />
        {/* Hiển thị số lượng đơn hàng chưa đọc */}
        <div className="absolute top-[-15px] left-[11px] border-2 w-fit px-2 rounded-full text-red-400 bg-blue-600 font-bold">
          {unreadOrders.length} {/* Hiển thị tổng số đơn hàng chưa đọc */}
        </div>
      </div>

      {/* Hiển thị thông báo khi bảng thông báo mở */}
      {open && (
        <ul className="absolute top-8 z-10 bg-slate-400 border-2 p-4 w-full h-[150px] overflow-y-scroll">
          {orders.map((user, index) => (
            <NavLink to={Router.order_product} key={index} className="py-2">
              <li className="border-b-2 text-lg p-1">
                <span className="me-2 text-orange-700 font-extrabold">
                  {user.userName}
                </span>
                <span className="text-white">đã đặt hàng</span>
              </li>
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationNewOrder;
