import React from "react";
import Logo from "../logover.png";
import "../App.css";



const Footer = () => {
  return (
    <footer>
      <div className="logo-footer">
        <img src={Logo} alt="Social Icon" className="logofooter" />
      </div>

      <div className="door-nav">
        <h3>Doormat Navigation</h3>
        <ul className="sub-nav-links">
          <li><a href="#placeholder">Home</a></li>
          <li><a href="#placeholder">About</a></li>
          <li><a href="#placeholder">Menu</a></li>
          <li><a href="#placeholder">Reservations</a></li>
          <li><a href="#placeholder">Order Online</a></li>
          <li><a href="#placeholder">Login</a></li>
        </ul>
      </div>

      <div className="contact-nav">
        <h3>Contact</h3>
        <ul className="sub-nav-links">
          <li><a href="#placeholder">Address</a></li>
          <li><a href="#placeholder">Phone number</a></li>
          <li><a href="#placeholder">Email</a></li>
        </ul>
      </div>

      <div className="social-nav">
        <h3>Social Media Links</h3>
        <ul className="sub-nav-links">
          <li><a href="#placeholder">Instagram</a></li>
          <li><a href="#placeholder">Facebook</a></li>
          <li><a href="#placeholder">LinkedIn</a></li>
          <li><a href="#placeholder">Telegram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;



