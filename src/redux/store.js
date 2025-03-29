import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

import localStorage from "redux-persist/es/storage";
import authReducer from "./reducers/authReducer"
import getUserReducer from './reducers/getUserReducer'
import adminReducer from './reducers/adminReducer'
import getProduct from './reducers/productReducer'
import cartReducer from './reducers/cartReducer'
import orderReducer from './reducers/orderReducer'
import notificationReducer from './reducers/notiAdminReducer'
import getAllUserReducer from './reducers/getAllUserReducer'
import storage from "redux-persist/es/storage";

const persitConfig = {
  key: "auth",
  storage: localStorage,
  whitelist: ['auth', 'admin'],
  stateReconciler: autoMergeLevel2,
};
const authConfig = {
  key: 'auth',
  storage: localStorage,
  whitelist: ['isLogin']
}
const authAdminConfig = {
  key: 'admin',
  storage: localStorage,
  whitelist: ['isLogin']
}


const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  admin: persistReducer(authAdminConfig, adminReducer),
  getUser: getUserReducer,
  product: getProduct,
  cartReducer: cartReducer,
  getOrder: orderReducer,
  notification: notificationReducer,
  getAllUser: getAllUserReducer
});
const persistedReducer = persistReducer(persitConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);