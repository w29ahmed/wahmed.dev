import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Typewriter from "./TypeWriter";
import BlinkingCursor from "./BlinkingCursor";
import WaleedImage from "./assets/img/me.jpg";
import "./styles/About.scss";

const words = ["Robotics", "Embedded Systems", "Web Development"];

const About = () => {
  return (
    <section id="about">
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={6}>
            <Image
              className="about-waleed-img"
              src={WaleedImage}
              roundedCircle
              fluid
            />
          </Col>
          <Col className="about-intro" lg={6}>
            <h1>
              Waleed <span className="about-secondary-color">Ahmed</span>
              <hr />
            </h1>

            <h2>
              Hello! I'm an aspiring Software Engineer passionate about
              <br />
              <span className="about-secondary-color">
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
