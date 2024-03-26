import './App.css';
import Navigation from './Component/Navigation.js';
import Hero from './Component/Hero.js';
import Highlights from './Component/Highlights.js';
import Testimonials from './Component/Testimonials.js';
import About from './Component/About.js';
import Footer from './Component/Footer'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
