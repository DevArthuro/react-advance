import AboutUs from "../page/AboutUs";
import Home from "../page/Home";

type JSXElement = () => JSX.Element;

interface Route {
  id: string;
  href: string;
  path: string;
  appearance: string;
  Component: JSXElement;
}

export const ROUTES: Route[] = [
  {
    id: "root.home",
    href: "/",
    path: "home",
    appearance: "Home",
    Component: Home,
  },
  {
    id: "root.about-us",
    href: "/about",
    path: "about",
    appearance: "About us",
    Component: AboutUs,
  },
];
