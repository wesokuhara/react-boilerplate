import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link" activeClassName="active">
          Todos
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/about" className="nav-link" activeClassName="active">
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
