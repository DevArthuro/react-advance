import { createSlice } from "@reduxjs/toolkit";
import INITIAL_STATE_AUTH from "../state/auth";
import { LoginUser } from "../actions/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE_AUTH,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state, _) => {
      state.loading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isError = false;
      state.error = null;
      state.user = { ...action.payload };
    });
    builder.addCase(LoginUser.rejected, (state, _) => {
      state.loading = false;
      state.isError = true;
      state.error = "The login is failled";
    });
  },
});

export default authSlice.reducer;
