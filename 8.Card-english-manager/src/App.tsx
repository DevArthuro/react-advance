import { useSelector } from "react-redux";
import { authUserSelector } from "./store/selectors/auth";

function App() {
  const user = useSelector(authUserSelector);
  return <>{JSON.stringify(user)}</>;
}

export default App;
