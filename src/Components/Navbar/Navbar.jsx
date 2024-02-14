import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              Company Name
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu-active"
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu-active"
                    className="nav-link"
                    to="/service"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu-active"
                    className="nav-link"
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu-active"
                    className="nav-link"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
