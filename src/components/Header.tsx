import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Link from "./Link";
import Switch from "react-switch";
import { FaSun, FaMoon} from "react-icons/fa";
import resume from "./content/Waleed_Ahmed_Resume.pdf";
import "./styles/Header.scss";

const sections = [
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "contact",
];

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="md"
      variant={darkTheme ? "dark" : "light"}
      bg={darkTheme ? "dark" : "light"}
      className="header"
    >
      <label htmlFor="theme-switch">
        <Switch
          checked={darkTheme}
          onChange={() => setDarkTheme((prev) => !prev)}
          onColor="#814ad8"
          handleDiameter={30}
          uncheckedIcon={<FaSun className="sun"/>}
          checkedIcon={<FaMoon className="moon"/>}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={25}
          width={50}
          className="theme-switch"
          id="theme-switch"
        />
      </label>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          {sections.map((section) => (
            <Link section={section} />
          ))}
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <Button className="resume-button">Resume</Button>
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
