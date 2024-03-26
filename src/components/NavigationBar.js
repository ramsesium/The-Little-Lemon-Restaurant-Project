import React from "react";
import Logo from "../lllogo.svg"; // Измененный путь к изображению
import "../App.css"; // Подключаем CSS файл для стилей

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Social Icon" className="logo" />
      <ul className="nav-links">
        <li><a href="#placeholder">Home</a></li>
        <li><a href="#placeholder">About</a></li>
        <li><a href="#placeholder">Menu</a></li>
        <li><a href="#placeholder">Reservations</a></li>
        <li><a href="#placeholder">Order Online</a></li>
        <li><a href="#placeholder">Login</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
