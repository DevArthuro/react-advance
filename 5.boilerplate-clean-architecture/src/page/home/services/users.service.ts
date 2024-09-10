import userAdapter from "../adapter/users.adapter";

export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async (url: string) => {
  try {
    const response = await fetch(`${url}/users`);
    const data = await response.json();
    return userAdapter(data);
  } catch (e) {
    console.error(e);
    return userAdapter();
  }
};
