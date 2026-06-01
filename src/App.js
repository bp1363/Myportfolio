import React, { useEffect } from 'react';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

function App() {
  useEffect(() => {
    // Scroll to top when the component mounts (on refresh)
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default App;
