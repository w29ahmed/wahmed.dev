import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./styles/Header.scss";

const Header = () => {
  return (
    <Navbar expand="md" variant="light" bg="light" className="header">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Button className="resume-button">Resume</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
