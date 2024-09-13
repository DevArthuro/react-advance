import { createSlice } from "@reduxjs/toolkit";
import INITIAL_STATE_AUTH from "../state/auth";
import { saveUserAuth } from "../actions/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE_AUTH,
  reducers: {
    save: saveUserAuth,
  },
});

export const { save } = authSlice.actions;

export default authSlice.reducer;
