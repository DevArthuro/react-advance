import { createSlice } from "@reduxjs/toolkit";
import INITIAL_STATE_AUTH from "../state/auth";
import { saveDataUser } from "./actions/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE_AUTH,
  reducers: {
    saveDataAuth: saveDataUser,
  },
});

export const { saveDataAuth } = authSlice.actions;

export default authSlice.reducer;
