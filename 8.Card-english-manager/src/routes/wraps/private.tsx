import { Route, Routes } from "react-router-dom";
import PRIVATE_ROUTES from "../private";
import ProtectedRoutes from "../../providers/ProtectedRoutes";

const PrivateWraper = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          {PRIVATE_ROUTES().map(({ id, path, Component }) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default PrivateWraper;
