import { UserAdapter } from "../adapter/user";
import { ENV_API } from "../utils/variables_env";
import { UserData } from "./models/user";

class User {
  private env = ENV_API;
  private header = {};
  constructor() {
    this.header = {
      "x-rapidapi-key": this.env.KEY,
      "x-rapidapi-host": this.env.HOST,
      "Content-Type": "application/json",
    };
  }

  async loginUser(user: UserData) {
    const url = `${this.env.BASE_URL}/login`;
    const body = {
      email: user.email,
      password: user.password,
    };

    try {
      const response = await fetch(url, {
        headers: this.header,
        method: "POST",
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log("Succed", data);
      return UserAdapter(data);
    } catch (error) {
      console.error(error);
      return UserAdapter();
    }
  }
}

export default User;
