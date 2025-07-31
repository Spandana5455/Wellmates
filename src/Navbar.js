import React from 'react';
import './Navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from './images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar navbar-light ">
      <div className="container-fluid px-4">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="Logo" className="navbar-logo me-2" />
          {/* <span className="d-none d-sm-inline fw-bold">WellMates</span> */}
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center text-center text-lg-start">
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/about">ABOUT US</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/product">PRODUCTS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

