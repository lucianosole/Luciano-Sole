import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Favoritos from "../Favs/Favoritos";

const NavBar = () => {
  return (
    <nav className="row">
      <div className="col-md-6 d-flex justify-content-around">
        <NavLink
          to={`/category/indumentaria`}
          className={({ isActive }) => (isActive ? "ActiveOpcion" : "Option")}>
          Indumentaria
        </NavLink>
        <NavLink
          to={`/category/proteccion`}
          className={({ isActive }) => (isActive ? "ActiveOpcion" : "Option")}>
          Protección
        </NavLink>
        <NavLink
          to={`/category/accesorios`}
          className={({ isActive }) => (isActive ? "ActiveOpcion" : "Option")}>
          Accesorios
        </NavLink>
      </div>

      <div className="col-md-6 d-flex justify-content-end">
        <Favoritos />
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
