import React from "react";
import Header from "./Header";
import About from "./About";
import "./styles/App.scss";

const App = () => {
  return (
    <div className="theme-light">
      <Header />
      <About />
    </div>
  );
};

export default App;
