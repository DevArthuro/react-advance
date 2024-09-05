import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/routes";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            {ROUTES.map(({ href, Component, id }) => (
              <Route path={href} element={<Component />} key={id} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
