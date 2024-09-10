import { useReducer } from "react";
import { INITIAL_STATE } from "../redux/state";
import formReducer from "../redux/reducer/formReducer";
import { AddUser } from "../redux/actions/formActions";
import { AddUserHandler, User } from "../models";

const useForm = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const handlerAddUser: AddUserHandler = ({ id, name, phone }: User) => {
    dispatch(AddUser({ id, name, phone }));
  };

  return {
    contacts: state.contacts,
    handlerAddUser,
  };
};

export default useForm;
