import { Form, User } from "./form";

export type AddUserHandler = (user: User) => void;

export type ContextValues = Form & {
  handlerAddUser?: AddUserHandler;
};
