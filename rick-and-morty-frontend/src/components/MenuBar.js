import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/characters">Characters</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">Favorites</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
