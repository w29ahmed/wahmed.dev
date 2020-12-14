import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./styles/ExperienceCarousel.scss";

const ExperienceCarousel = () => {
  return (
    <Container className="experience-carousel" fluid>
      <Row>
        <Col
          xs={{ order: 2, span: 6 }}
          sm={{ order: 2, span: 6 }}
          md={{ order: 1, span: 1 }}
          lg={{ order: 1, span: 2 }}
          className="left-col"
        >
          <FaAngleLeft className="left-arrow" size={40} />
        </Col>
        <Col
          xs={{ order: 1, span: 12 }}
          sm={{ order: 1, span: 12 }}
          md={{ order: 2, span: 10 }}
          lg={{ order: 2, span: 8 }}
        >
          <h2>Content</h2>
        </Col>
        <Col
          xs={{ order: 3, span: 6 }}
          sm={{ order: 3, span: 6 }}
          md={{ order: 3, span: 1 }}
          lg={{ order: 3, span: 2 }}
          className="right-col"
          onClick={() => console.log("clicked")}
        >
          <FaAngleRight className="right-arrow" size={40} />
        </Col>
      </Row>
    </Container>
  );
};

export default ExperienceCarousel;
