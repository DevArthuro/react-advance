import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../public/vite.svg";
import { ROUTES } from "../utils/routes";

const Navbar = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <div className="logo">
            <img src={Logo} alt="logo navbar" />
          </div>
          <ul>
            {ROUTES.map(({ id, href, appearance }) => (
              <li key={id}>
                <NavLink
                  to={href}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {appearance}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Navbar;
