import { NavLink, Route, Routes } from "react-router-dom";

const LayoutLazy = () => {
  return (
    <div>
      <h1>LazyLoad</h1>

      <nav>
        <ul>
          <NavLink to="1"> Ruta 1</NavLink>
          <NavLink to="2"> Ruta 2</NavLink>
        </ul>
      </nav>

      <Routes>
        <Route path="/1" element={<h1>ruta 1</h1>} />
        <Route path="/2" element={<h1>ruta 2</h1>} />
      </Routes>
    </div>
  );
};

export default LayoutLazy;
