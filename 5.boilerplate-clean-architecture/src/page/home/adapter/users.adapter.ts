import { User } from "../../../models";

const userAdapter = (users?: User[]) => {
  if (!users) return { error: "Not found" };
  const user = users[0];

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};

export default userAdapter;
