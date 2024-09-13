import { INITIAL_STATE_AUTH_TYPE } from "../state";

export interface ACTION_SAVE {
  payload: {
    user: INITIAL_STATE_AUTH_TYPE;
  };
}

export const saveUserAuth = (
  state: INITIAL_STATE_AUTH_TYPE,
  action: ACTION_SAVE
): INITIAL_STATE_AUTH_TYPE => {
  return { ...state, ...action.payload };
};
