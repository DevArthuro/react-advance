import { INITIAL_STATE_AUTH_TYPE } from "../state";

export interface ACTION_SAVE {
  payload: {
    user: Omit<INITIAL_STATE_AUTH_TYPE, "isLogged">;
  };
}

export const saveUserAuth = (
  _: INITIAL_STATE_AUTH_TYPE,
  action: ACTION_SAVE
): INITIAL_STATE_AUTH_TYPE => {
  return { ...action.payload.user, isLogged: true };
};
