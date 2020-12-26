import React from "react";
import Container from "react-bootstrap/esm/Container";
import ExperienceCarousel from "./ExperienceCarousel";
import "./styles/Experience.scss";

interface ExperienceProps {
  darkTheme: boolean;
}

const Experience = (props: ExperienceProps) => {
  return (
    <section id="experience">
      <Container fluid>
        <h1>
          Experience <hr />
        </h1>

        <ExperienceCarousel darkTheme={props.darkTheme}/>
      </Container>
    </section>
  );
};

export default Experience;
