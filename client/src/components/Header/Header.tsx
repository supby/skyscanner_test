import logo from './logo.svg';
import React from 'react';
import './Header.css';

export default () => (
  <header className="header">
    <a href="/">
      <img className="header-logo-image" alt="Skyscanner" src={logo} />
    </a>
    <button className="navbar-toggler ml-auto bkp-toggler" type="button">
      <span className="navbar-toggler-icon"></span>
    </button>
  </header>
)
