import React from "react";

import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <HeroBanner />
      <About />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
