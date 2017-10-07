import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <NavLink to="/" exact className="nav-link" activeClassName="active">
      Home
    </NavLink>
    <NavLink to="/about" className="nav-link" activeClassName="active">
      About
    </NavLink>
    <NavLink to="/todos" className="nav-link" activeClassName="active">
      Todos
    </NavLink>
  </nav>
);

export default Nav;
