import React from "react";

import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "bootstrap-icons/font/bootstrap-icons.css";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <HeroBanner />
      <About />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
