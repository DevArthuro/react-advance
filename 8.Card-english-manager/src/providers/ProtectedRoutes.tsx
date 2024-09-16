import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { rootSelector } from "../store/selector/auth";

const ProtectedRoutes = () => {
  const state = useSelector(rootSelector);

  return <></>;
};

export default ProtectedRoutes;
