import CartWidget from "./CartWidget";
import { FaHome, FaListUl, FaAt } from "react-icons/fa";
import { FcShop } from "react-icons/fc";
import { SiAwesomelists } from "react-icons/si";

import { Link } from "react-router-dom";

import CategoriesLink from "./CategoriesLink";
import carritoContext from "../context/CartContext";
import { useContext } from "react";

function NavBar() {
  const { carrito } = useContext(carritoContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <FcShop style={{ fontSize: "3rem" }}></FcShop>
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <FaHome />
              Home
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              to=""
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FaListUl /> Categorías
            </Link>

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <CategoriesLink />
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contacto">
              <FaAt /> Contacto
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/acerca_de">
              <SiAwesomelists /> Acerca de...
            </Link>
          </li>
        </ul>

        <li className="navbar-nav nav-item">
          <Link className="nav-link" to="/cart">
            {carrito.length > 0 && (
              <span className="badge badge-secondary">{carrito.length}</span>
            )}

            <CartWidget itemsEnCarrito={carrito.lenght} />
          </Link>
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
