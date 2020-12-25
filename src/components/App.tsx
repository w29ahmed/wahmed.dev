import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Footer from "./Footer";
import "./styles/App.scss";

const App = () => {
  return (
    <div className="theme-light">
      <div className="base">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Footer />
      </div>
    </div>
  );
};

export default App;
