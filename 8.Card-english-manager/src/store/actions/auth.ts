import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/user";
import { User } from "../../models";

/** Types */
export interface LOGIN_TYPE {
  user: Omit<User, "token" | "refresh" | "isLogged">;
}

/** Variables needs */
const user = new UserService();

/** Actions */

export const LoginUser = createAsyncThunk<User, LOGIN_TYPE>(
  "auth/login",
  async ({ ...data }: LOGIN_TYPE): Promise<User> => {
    const { email, password } = data.user;

    if (!email || !password)
      return { ...data.user, isLogged: false, token: null, refresh: null };
    const auth = await user.loginUser({ email: email, password: password });

    if (!auth)
      return { ...data.user, isLogged: false, token: null, refresh: null };
    return { ...data.user, isLogged: true, ...auth };
  }
);
