import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Menggunakan localStorage

// Konfigurasi persist
const persistConfig = {
  key: "root",
  storage,
};

// Menggabungkan semua reducer
const rootReducer = combineReducers({
  user: userReducer,
});

// Menerapkan persistReducer pada rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Membuat store menggunakan persistedReducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Membuat persistor untuk redux-persist
export const persistor = persistStore(store);

export default store;
