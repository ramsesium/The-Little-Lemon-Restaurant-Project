import React from "react";
import Logo from "../lllogo.svg"; // Измененный путь к изображению
import "../App.css"; // Подключаем CSS файл для стилей

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <About />
      <nav>
        <img src={Logo} alt="Social Icon" className="logo" />
        <ul className="nav-links">
          <li>
            <h3>Doormat Navigation</h3>
            <ul className="sub-nav-links">
              <li><a href="#placeholder">Home</a></li>
              <li><a href="#placeholder">About</a></li>
              <li><a href="#placeholder">Menu</a></li>
              <li><a href="#placeholder">Reservations</a></li>
              <li><a href="#placeholder">Order Online</a></li>
              <li><a href="#placeholder">Login</a></li>
            </ul>
          </li>
          <li>
            <h3>Contact</h3>
            <ul className="sub-nav-links">
              <li><a href="#placeholder">Address</a></li>
              <li><a href="#placeholder">Phone number</a></li>
              <li><a href="#placeholder">Email</a></li>
            </ul>
          </li>
          <li>
            <h3>Social Media Links</h3>
            <ul className="sub-nav-links">
              <li><a href="#placeholder">Instagram</a></li>
              <li><a href="#placeholder">Facebook</a></li>
              <li><a href="#placeholder">LinkedIn</a></li>
              <li><a href="#placeholder">Telegram</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;



