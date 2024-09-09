import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models";

const INITIAL_STATE: User = {
  id: null,
  name: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    createUser: (_, action) => {
      return action.payload;
    },
    modidyUser: (state, action) => {
      const formattedData = { ...state, ...action.payload };
      return formattedData;
    },
    resetUser: () => {
      return INITIAL_STATE;
    },
  },
});

/* Export Actions */
export const { createUser, modidyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
