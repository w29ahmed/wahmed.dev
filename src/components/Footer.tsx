import React from "react";
import {
  FaRegCopyright,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import contact from "./content/contact.json";
import "./styles/Footer.scss";

const Footer = () => {
  return (
    <footer id="contact">
      <FaRegCopyright className="copyright" />
      <p>{new Date().getFullYear()} Waleed Ahmed</p>
      <a href={"mailto:" + contact.email}>
        <FaEnvelope className="icon mail" />
      </a>
      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
      </a>
      <a href={contact.github} target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
      </a>
    </footer>
  );
};

export default Footer;
