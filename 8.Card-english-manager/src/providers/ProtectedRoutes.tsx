import { useSelector } from "react-redux";
import { authUserSelector } from "../store/selectors/auth";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const {
    user: { isLogged, token },
  } = useSelector(authUserSelector);

  if (!isLogged && !token) {
    return <Navigate to="login" replace />;
  }

  return <></>;
};

export default ProtectedRoutes;
