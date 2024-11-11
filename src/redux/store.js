import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
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
const persitConfig = {
  key: "auth",
  storage: localStorage,
  whitelist: ['auth'],
  stateReconciler: autoMergeLevel2,
};
const authConfig = {
  key: 'auth',
  storage: localStorage,
  whitelist: ['token', 'isLogin']
}


const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),

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