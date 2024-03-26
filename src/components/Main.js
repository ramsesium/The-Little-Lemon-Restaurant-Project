import React from "react";
import "../App.css"; // Подключаем CSS файл для стилей

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

const Main = () => {
  return (
    <main>
      <h1>Main Content</h1>
      <Highlights />
      <Testimonials />
    </main>
  );
};


export default Main;
