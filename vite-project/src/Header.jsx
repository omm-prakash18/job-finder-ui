import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-logo">
        🚀 JobFinder
      </div>
      <nav className="header-nav">
        <a href="#jobs">Find Jobs</a>
        <a href="#companies">Companies</a>
        <button className="login-btn">Login</button>
      </nav>
    </header>
  );
};

export default Header;
