import React from 'react';
import Nav from './Nav';
import logo from './logo.svg';

const Header = () => (
  <header className="app-header">
    <img src={logo} className="app-logo" alt="logo" />
    <h1>Welcome to React</h1>
    <Nav />
  </header>
);

export default Header;
