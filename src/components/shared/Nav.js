import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <NavLink to="/" exact className="nav-link" activeClassName="active">
      Todos
    </NavLink>
    <NavLink to="/about" className="nav-link" activeClassName="active">
      About
    </NavLink>
  </nav>
);

export default Nav;
