import { ActionsReducer, User } from "../../models";

export const AddUser = (user: User): ActionsReducer => ({
  type: "addContact",
  payload: { user },
});
