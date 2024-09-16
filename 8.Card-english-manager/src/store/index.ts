import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginUserApi } from "./api/auth";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./slice/auth";

const persistConfig = {
  key: "root",
  version: 1,
  storage: storageSession,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: authReducer,
  [loginUserApi.reducerPath]: loginUserApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginUserApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
