import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectUser } from "../store/selector/auth";

const ProtectedRoutes = () => {
  const state = useSelector(selectUser);

  if (!state.isLogged) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoutes;
