import { RootState } from "..";

export const rootSelector = (state: RootState) => state;

export const selectUser = (state: RootState) => state.auth.user;
