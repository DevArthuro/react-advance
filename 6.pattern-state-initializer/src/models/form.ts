export interface User {
  id: number;
  name: string;
  phone: string;
}

export interface Form {
  contacts: User[];
}

export type ActionsReducer = { type: "addContact"; payload: { user: User } };
