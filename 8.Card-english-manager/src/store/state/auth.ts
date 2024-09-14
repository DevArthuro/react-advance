import { User } from "../../models";

export type INITIAL_STATE_AUTH_TYPE = User;

const INITIAL_STATE_AUTH: INITIAL_STATE_AUTH_TYPE = {
  name: null,
  email: null,
  password: null,
  isLogged: false,
};

export default INITIAL_STATE_AUTH;
