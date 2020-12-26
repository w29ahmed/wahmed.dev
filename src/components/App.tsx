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
  // 8am - 6pm: light theme, otherwise use dark theme
  const useDarkTheme = () => {
    const t = new Date().getHours();
    return !(t >= 8 && t < 18);
  }

  const [darkTheme, setDarkTheme] = useState(useDarkTheme());

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <div className="base">
        <Header
          darkTheme={darkTheme}
          toggleTheme={() => setDarkTheme((prev) => !prev)}
        />
        <About />
        <Skills darkTheme={darkTheme}/>
        <Experience darkTheme={darkTheme}/>
        <Projects darkTheme={darkTheme}/>
        <Education />
        <Footer />
      </div>
    </div>
  );
};

export default App;
