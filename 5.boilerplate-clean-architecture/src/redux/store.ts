import { configureStore } from "@reduxjs/toolkit";
import { User } from "../models";
import { userReducer } from "./slices";

export interface AppReducer {
  user: User;
}

export default configureStore<AppReducer>({
  reducer: {
    user: userReducer,
  },
});
