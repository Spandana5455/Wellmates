import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import logo from "./images/logo.png";
import './Footer.css';


const Footer = () => {
  const navigate = useNavigate();
    return (
        <>
        <footer className="footer-container">
              <div className="footer-content">
                <div className="footer-section logo-section">
                  <img src={logo} alt="Logo" className="footer-logo" style={{cursor: "pointer" }} onClick={() => navigate("/")} />
                </div>
        
                <div className="footer-section1">
                  <p><Link to="/about" className="footer-link">About Us</Link></p>
                  <p><Link to="/Faqs" className="footer-link">FAQ'S</Link></p>
                  <p><Link to="/product" className="footer-link">Products</Link></p>
                </div>
        
                <div className="footer-section">
                  <p><Link to="/contact" className="footer-link">Contact Us</Link></p>
                  <p>+91 91370 36623</p>
                  <p>Contactwellmates@gmail.com</p>
                </div>
        
                <div className="footer-section">
                  <p>Follow Us</p>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/share/1G4cpYDZW1/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareFacebook} />
                    </a>
                    <a href="https://www.instagram.com/wellmates_25?igsh=OWEyM3R1MWhiNWpt" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                  </div>
                </div> 
              </div>
              
              <div className="footer-bottom">
                <p>© 2025 WELL MATES ENTERPRICES. All Rights Reserved</p>
              </div>
            </footer>
        </>
    );
};

export default Footer;