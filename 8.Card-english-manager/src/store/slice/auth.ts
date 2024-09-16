import { createSlice } from "@reduxjs/toolkit";
import INITIAL_STATE_AUTH from "../state/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE_AUTH,
  reducers: {},
});

export default authSlice.reducer;
