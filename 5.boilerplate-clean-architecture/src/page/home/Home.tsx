import { useEffect, useState } from "react";
import { Layout } from "../../styled-components";
import { BASE_URL, fetchUsers } from "./services";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/slices/user.slice";

const Home = () => {
  const [number, setNumber] = useState(1);

  const dispatch = useDispatch();

  const updateNumber = (newNumber: number) => {
    setNumber(newNumber);
    console.log(number);
  };

  useEffect(() => {
    const getUsers = async () => {
      const user = await fetchUsers(BASE_URL);
      if (user.error) {
        console.error(user.error);
        return;
      }
      dispatch(createUser(user));
    };

    getUsers();
  }, []);

  return (
    <Layout>
      Home {number}
      <br />
      <button
        onClick={() => {
          updateNumber(3);
        }}
      >
        Click me
      </button>
    </Layout>
  );
};

export default Home;
