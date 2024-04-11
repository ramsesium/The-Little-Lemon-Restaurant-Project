import React from "react";
import Logo from "../lllogo.svg";
import "../App.css";

const NavHeader = () => {
  return (
    <>
      <a href="https://www.facebook.com/search/top?q=little%20lemon" className="logo-hed">
        <img src={Logo} alt="Social Icon"/>
      </a>
      <nav>
          <ul className="header-nav">
              <li><a href="#placeholder">Home</a></li>
              <li><a href="#placeholder">About</a></li>
              <li><a href="#placeholder">Menu</a></li>
              <li><a href="#placeholder">Reservations</a></li>
              <li><a href="#placeholder">Order Online</a></li>
              <li><a href="#placeholder">Login</a></li>
          </ul>
      </nav>
    </>
  );
};

export default NavHeader;