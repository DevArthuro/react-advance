import { useSelector } from "react-redux";
import Home from "./page/home/Home";
import { AppReducer } from "./redux/store";

function App() {
  const user = useSelector((state: AppReducer) => state.user);

  return (
    <>
      <h1>The user has {user.name ?? `Not found`}</h1>
      <Home />
    </>
  );
}

export default App;
