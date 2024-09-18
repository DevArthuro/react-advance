import { Outlet, Route, Routes } from "react-router-dom";
import PUBLIC_ROUTES from "../public";

const PublicWraper = () => {
  return (
    <>
      <Routes>
        <Route element={<Outlet />}>
          {PUBLIC_ROUTES().map(({ id, path, Component }) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default PublicWraper;
