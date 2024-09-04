import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../public/vite.svg";
import { ROUTES } from "../utils/routes";
import { Suspense, useEffect, useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const handlerMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <header>
        <nav className={`${showMenu ? "visible-menu" : ""}`}>
          <div className="logo">
            <img src={Logo} alt="logo navbar" />
          </div>
          <ul>
            {ROUTES.map(({ id, href, appearance }) => (
              <li key={id}>
                <NavLink
                  to={href}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={handlerMenu}
                >
                  {appearance}
                </NavLink>
              </li>
            ))}
          </ul>
          {showMenu && (
            <span className="icon icon-x" onClick={handlerMenu}>
              <i className="fa-solid fa-x fa-xl"></i>
            </span>
          )}
        </nav>
      </header>
      <main>
        {!showMenu && (
          <span className="icon icon-bars" onClick={handlerMenu}>
            <i className="fa-solid fa-bars fa-xl"></i>
          </span>
        )}
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Navbar;
