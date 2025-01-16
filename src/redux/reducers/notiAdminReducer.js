import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
  readIds: [], // Lưu danh sách ID các thông báo đã đọc
};

const notiAdminReducer = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notifications.push(action.payload);
    },
    markAsRead: (state) => {
      const unreadIds = state.notifications.map((noti) => noti.id);
      state.readIds = [...new Set([...state.readIds, ...unreadIds])]; // Gộp danh sách ID đã đọc
      localStorage.setItem('readIds', JSON.stringify(state.readIds)); // Lưu vào LocalStorage
    },
    loadReadState: (state) => {
      const readIds = JSON.parse(localStorage.getItem('readIds')) || [];
      state.readIds = readIds;
    },
  },
});

export const { addNotification, markAsRead, loadReadState } = notiAdminReducer.actions;
export default notiAdminReducer.reducer;
