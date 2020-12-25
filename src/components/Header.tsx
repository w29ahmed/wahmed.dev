import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Link from "./Link";
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
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="md"
      variant="light"
      bg="light"
      className="header"
    >
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
