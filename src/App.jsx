import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About.jsx";

import Contact from "./pages/Contact/Contact.jsx";

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
