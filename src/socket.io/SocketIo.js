// frontend/src/socket.js
import { io } from 'socket.io-client';

// Kết nối đến backend (http://localhost:8080)
const socket = io(import.meta.env.VITE_API_KEY, {
    autoConnect: true,
    withCredentials: true,  // Đảm bảo cookie hoặc session được gửi đi nếu cần
    transports: ['websocket'],  // Dùng WebSocket để kết nối (không dùng polling)
});

// Lắng nghe sự kiện kết nối
socket.on('connect', () => {
    console.log('Đã kết nối đến WebSocket');
});


export default socket;
