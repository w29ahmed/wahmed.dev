import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Link from "./Link";
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
          <Button className="resume-button">Resume</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
