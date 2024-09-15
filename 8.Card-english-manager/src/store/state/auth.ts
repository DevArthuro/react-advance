import { User } from "../../models";

export type INITIAL_STATE_AUTH_TYPE = {
  user: User;
  loading: boolean;
  error: string | null;
  isError: boolean;
};

const INITIAL_STATE_AUTH: INITIAL_STATE_AUTH_TYPE = {
  user: {
    name: null,
    email: null,
    password: null,
    isLogged: false,
    token: null,
    refresh: null,
  },
  error: null,
  loading: false,
  isError: false,
};

export default INITIAL_STATE_AUTH;
