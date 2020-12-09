import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Typewriter from "./TypeWriter";
import BlinkingCursor from "./BlinkingCursor";
import "./About.scss";

const words = ["Robotics", "Embedded Systems", "Web Development"];

const About = () => {
  return (
    <section id="about">
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={6}>
            <Image className="me-img" src="/img/me.jpg" roundedCircle fluid />
          </Col>
          <Col className="intro" lg={6}>
            <h1 className="intro-name">
              Waleed <span className="secondary-color">Ahmed</span>
              <hr />
            </h1>

            <h2>
              Hello! I'm an aspiring Software Engineer passionate about
              <br className="intro-break" />
              <span className="secondary-color">
                <Typewriter words={words} />
              </span>
              <BlinkingCursor />
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
