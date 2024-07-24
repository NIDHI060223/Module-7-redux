import React from "react";
import { Link } from "react-router-dom";

function Header({ darkMode, toggleTheme }) {
  return (
    <nav className={`navbar navbar-expand-lg  ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-primary"}`} >
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-outline-secondary text-white border border-white "
            onClick={toggleTheme}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
