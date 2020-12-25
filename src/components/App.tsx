import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Footer from "./Footer";
import "./styles/App.scss";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <div className="base">
        <Header
          darkTheme={darkTheme}
          toggleTheme={() => setDarkTheme((prev) => !prev)}
        />
        <About />
        <Skills darkTheme={darkTheme}/>
        <Experience />
        <Projects darkTheme={darkTheme}/>
        <Education />
        <Footer />
      </div>
    </div>
  );
};

export default App;
