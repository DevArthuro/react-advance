import { v4 } from "uuid";
import { ROUTE } from "./type";
import { lazy } from "react";

type PUBLIC_ROUTE_TYPE = ROUTE & {
  component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoginComponent = lazy(() => import("../pages/login"));

const PUBLIC_ROUTES = (): PUBLIC_ROUTE_TYPE[] => [
  {
    id: v4(),
    path: "login",
    href: "/login",
    isPublic: true,
    name: "login",
    component: LoginComponent,
  },
];

export default PUBLIC_ROUTES;
