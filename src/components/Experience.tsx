import React from "react";
import Container from "react-bootstrap/esm/Container";
import ExperienceCarousel from "./ExperienceCarousel";
import "./styles/Experience.scss";

const Experience = () => {
  return (
    <section id="experience">
      <Container fluid>
        <h1>
          Experience <hr />
        </h1>

        <ExperienceCarousel />
      </Container>
    </section>
  );
};

export default Experience;
