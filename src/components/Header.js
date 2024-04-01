import React from "react";
import Logo from "../lllogo.svg";
import "../App.css";

const NavigationBar = () => {
  return (
    <header>
      <div>
          <img src={Logo} alt="Social Icon" className="logo" />
      </div>
      <nav>
          <ul>
              <li><a href="#placeholder">Home</a></li>
              <li><a href="#placeholder">About</a></li>
              <li><a href="#placeholder">Menu</a></li>
              <li><a href="#placeholder">Reservations</a></li>
              <li><a href="#placeholder">Order Online</a></li>
              <li><a href="#placeholder">Login</a></li>
          </ul>
      </nav>
</header>
  );
};

const Header = () => {
  return (
    <NavigationBar />
    // <Hero />
  )
}
export default Header;
