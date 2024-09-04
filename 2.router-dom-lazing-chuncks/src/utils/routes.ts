import Lazyload1 from "../01-lazyload/components/Lazyload1";
import Lazyload2 from "../01-lazyload/components/Lazyload2";
import Lazyload3 from "../01-lazyload/components/Lazyload3";

interface Route {
  id: string;
  href: string;
  path: string;
  appearance: string;
  Component: () => JSX.Element;
}

export const ROUTES: Route[] = [
  {
    id: "root.home",
    href: "/",
    path: "home",
    appearance: "Home",
    Component: Lazyload1,
  },
  {
    id: "root.about-us",
    href: "/about",
    path: "about",
    appearance: "About us",
    Component: Lazyload2,
  },
  {
    id: "root.users",
    href: "/users",
    path: "users",
    appearance: "Users",
    Component: Lazyload3,
  },
];
