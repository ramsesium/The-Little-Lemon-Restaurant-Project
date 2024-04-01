import React from "react";
import "../App.css";

const Highlights = () => {
  return (
    <div className="highlight">
      <h2>Highlights</h2>
      {/* Добавьте здесь свой контент */}
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      {/* Добавьте здесь свой контент */}
    </div>
  );
};

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
    </div>
  );
};

const Main = () => {
  return (
    <main className="main">
      <h1>Main Content</h1>
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
};


export default Main;
