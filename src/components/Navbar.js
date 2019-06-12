import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <ul>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/addContact" activeClassName="aktivNav">
            Legg til kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
