import { INITIAL_STATE_AUTH_TYPE } from "../state";

export const authUserSelector = (state): INITIAL_STATE_AUTH_TYPE => state.auth;
