import logo from './logo.svg';
import React from 'react';
import './Header.css';

export default () => (
  <header className="header">
    <a href="/">
      <img className="header-logo-image" alt="Skyscanner" src={logo} />
    </a>
    {/* <nav className="navbar navbar-light bg-lignt">
      <button className="navbar-toggler ml-auto bkp-toggler" type="button">
        <span className="navbar-toggler-icon my-toggler"></span>
      </button>
    </nav> */}
    <button className="navbar-toggler ml-auto bkp-toggler" type="button">
      <span className="navbar-toggler-icon"></span>
    </button>
  </header>
)
