import React, { memo, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNotification, markAsRead, loadReadState } from '../../../redux/reducers/notiAdminReducer';
import { connectWebSocket } from '../../../socket.io/SocketIo';
import { useNavigate } from 'react-router-dom';
import Router from '../../../router/router';
import icon from '../../../icons/icons';

const NotificationNewOrder = () => {
  const { LuBellRing } = icon;
  const dispatch = useDispatch();
  const noti = useSelector((state) => state.notification.notifications); // Danh sách thông báo
  const listNoti = useSelector((state) => state.getOrder.listOrderOfUser);
  const readIds = useSelector((state) => state.notification.readIds); // Danh sách ID đã đọc
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const dropdownRef = useRef(null); // Dùng để kiểm tra bấm ngoài danh sách
  useEffect(() => {
    // Load trạng thái "đã đọc" từ LocalStorage khi component mount
    dispatch(loadReadState());

    const ws = connectWebSocket("ws://localhost:8080", (message) => {
      if (message.type === "NEW_ORDER") {
        dispatch(addNotification(message.data));
      }
    });

    return () => {
      ws.close();
    };
  }, [dispatch]);

  // Đóng danh sách khi bấm Esc hoặc bấm ra ngoài
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setFlag(false);
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFlag(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClearNoti = () => {
    setFlag(!flag);
    dispatch(markAsRead()); // Đánh dấu là đã đọc
  };

  const handleNextPageNoti = () => {
    navigate(`${Router.order_product}`);
  };

  // Lọc thông báo chưa đọc
  const unreadNotiCount = noti.filter((item) => !readIds.includes(item.id)).length;
  console.log(unreadNotiCount)


  return (
    <div ref={dropdownRef} >
      <div onClick={handleClearNoti} className="relative cursor-pointer hover:bg-emerald-400 hover:rounded-full p-2">
        <LuBellRing className='text-2xl' />
        {unreadNotiCount > 0 && (
          <div className="absolute text-sm font-bold text-red-600 border-2 rounded-full bg-cyan-300 p-1 bottom-4 left-8">
            {unreadNotiCount}
          </div>
        )}
      </div>
      {flag && (
        <div className="w-[500px] mbl:w-[80%] mbl:top-16 xs:right-14 xs:top-[70px] absolute right-15 top-12 bg-[#ffffff] shadow-2xl rounded-xl z-10 h-[200px] overflow-y-scroll p-2">
          {listNoti.map((item) => (
            <div
              onClick={handleNextPageNoti}
              key={item?.id}
              className="p-2 cursor-pointer border-b-2 w-full flex items-start text-lg"
            >
              <i className="text-red-500">{item?.user.name}</i>
              <span className="ms-2 font-serif">đã đặt 1 đơn hàng mới</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(NotificationNewOrder);
