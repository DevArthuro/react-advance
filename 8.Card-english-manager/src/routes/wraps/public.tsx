import { Route, Routes } from "react-router-dom";
import PUBLIC_ROUTES from "../public";

const PublicWraper = () => {
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES().map(({ id, path, component: Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  );
};

export default PublicWraper;
