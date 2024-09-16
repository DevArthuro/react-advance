import { Outlet } from "react-router-dom";
import PublicWraper from "./routes/wraps/public";
import PrivateWraper from "./routes/wraps/private";
import { Suspense } from "react";
function App() {
  return (
    <>
      <Suspense fallback={<div className="load">Loading</div>}>
        <PrivateWraper />
        <PublicWraper />
      </Suspense>
      <Outlet />
    </>
  );
}

export default App;
