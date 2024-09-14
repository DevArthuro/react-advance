import { useSelector } from "react-redux";
import { authUserSelector } from "../store/selectors/auth";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isLogged } = useSelector(authUserSelector);

  if (!isLogged) {
    return <Navigate to="login" replace />;
  }

  return <></>;
};

export default ProtectedRoutes;
