import { Outlet } from "react-router-dom";
import PublicWraper from "./routes/wraps/public";
import PrivateWraper from "./routes/wraps/private";

function App() {
  return (
    <>
      <PrivateWraper />
      <PublicWraper />
      <Outlet />
    </>
  );
}

export default App;
