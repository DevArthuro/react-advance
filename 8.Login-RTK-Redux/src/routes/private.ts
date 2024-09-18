import { v4 } from "uuid";
import { ROUTE } from "./type";
import { lazy } from "react";

type PRIVATE_ROUTE_TYPE = ROUTE & {
  Component: React.LazyExoticComponent<() => JSX.Element>;
};

const HomeLazy = lazy(() => import("../pages/Home"));
const Cards = lazy(() => import("../pages/Cards"));
const Practice = lazy(() => import("../pages/Practice"));
const ManageProfile = lazy(() => import("../pages/ManageProfile"));

const PRIVATE_ROUTES = (): PRIVATE_ROUTE_TYPE[] => [
  {
    id: v4(),
    path: "",
    href: "",
    isPublic: false,
    name: "home",
    Component: HomeLazy,
  },
  {
    id: v4(),
    path: "cards",
    href: "cards",
    isPublic: false,
    name: "english cards",
    Component: Cards,
  },
  {
    id: v4(),
    path: "practice",
    href: "practice",
    isPublic: false,
    name: "practice (cards)",
    Component: Practice,
  },
  {
    id: v4(),
    path: "",
    href: "profile",
    isPublic: false,
    name: "profile",
    Component: ManageProfile,
  },
];

export default PRIVATE_ROUTES;
