import { v4 } from "uuid";
import { ROUTE } from "./type";
import { lazy } from "react";

type PUBLIC_ROUTE_TYPE = ROUTE & {
  Component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoginComponent = lazy(() => import("../pages/Login"));
const RegisterComponent = lazy(() => import("../pages/Register"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));

const PUBLIC_ROUTES = (): PUBLIC_ROUTE_TYPE[] => [
  {
    id: v4(),
    path: "login",
    href: "login",
    isPublic: true,
    name: "login",
    Component: LoginComponent,
  },
  {
    id: v4(),
    path: "register",
    href: "register",
    isPublic: true,
    name: "register",
    Component: RegisterComponent,
  },
  {
    id: v4(),
    path: "forgot-password",
    href: "forgot-password",
    isPublic: true,
    name: "forgot password",
    Component: ForgotPassword,
  },
];

export default PUBLIC_ROUTES;
