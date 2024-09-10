import { ActionsReducer, Form } from "../../models";

const formReducer = (state: Form, action: ActionsReducer): Form => {
  switch (action.type) {
    case "addContact":
      return { contacts: [...state.contacts, action.payload.user] };
    default:
      return state;
  }
};

export default formReducer;
