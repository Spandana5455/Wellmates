import React from 'react';
import './Navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from './images/logo.jpeg';

const Navbar = () => { 
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container ms-0">
        <img src={logo} alt="Logo" className="navbar-logo"/>
      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link mx-3 me-4" to="/"> HOME</Link></li>
            <li className="nav-item"><Link className="nav-link mx-3 me-4" to="/about">ABOUT US</Link></li>
            <li className="nav-item"><Link className="nav-link mx-3 me-4" to="/product">PRODUCTS</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">CONTACT US</Link></li>
          </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar; 
