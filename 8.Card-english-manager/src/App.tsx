import { Outlet } from "react-router-dom";
import PublicWraper from "./routes/wraps/public";
import { Suspense } from "react";

function App() {
  return (
    <>
      <PublicWraper />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
