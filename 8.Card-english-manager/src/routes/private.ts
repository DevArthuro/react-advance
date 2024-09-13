import { v4 } from "uuid";
import { ROUTE } from "./type";

type PRIVATE_ROUTE_TYPE = ROUTE;

const PRIVATE_ROUTES = (): PRIVATE_ROUTE_TYPE[] => [
  {
    id: v4(),
    path: "/",
    href: "/",
    isPublic: false,
    name: "home",
  },
];

export default PRIVATE_ROUTES;
