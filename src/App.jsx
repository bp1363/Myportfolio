import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Home from './pages/Home/Home';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <Home />
      <Experience />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;