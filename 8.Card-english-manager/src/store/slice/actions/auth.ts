import { User } from "../../../models";
import { INITIAL_STATE_AUTH_TYPE } from "../../state/auth";

interface ActionPayload {
  payload: {
    user: User;
  };
}

export const saveDataUser = (
  state: INITIAL_STATE_AUTH_TYPE,
  action: ActionPayload
) => {
  const { payload } = action;

  return { ...state, ...payload };
};
