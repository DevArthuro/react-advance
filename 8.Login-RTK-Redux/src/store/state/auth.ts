import { User } from "../../models";

export type INITIAL_STATE_AUTH_TYPE = {
  user: User;
};

const INITIAL_STATE_AUTH: INITIAL_STATE_AUTH_TYPE = {
  user: {
    name: null,
    email: null,
    isLogged: false,
    token: null,
    refresh: null,
  },
};

export default INITIAL_STATE_AUTH;
