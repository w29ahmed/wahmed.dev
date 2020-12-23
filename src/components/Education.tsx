import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCalendar } from "react-icons/fa";
import Dropdown from "./Dropdown";
import education from "./content/education.json";
import "./styles/Education.scss";

const Education = () => {
  return (
    <section id="education">
      <Container fluid>
        <h1>
          Education <hr />
        </h1>

        <Row className="education-row">
          <Col lg="8">
            <h2>{education.degree}</h2>
            <h3 className="school-name">{education.school}</h3>
            <FaCalendar className="map-marker" />
            <p className="icon-text">{education.date}</p>
          </Col>

          <Col lg="4" className="uw-logo-col">
            <a href={education.link} target="_blank" rel="noopener noreferrer">
              <img
                src={process.env.PUBLIC_URL + education.logo}
                className="uw-logo"
                alt="UW logo"
              />
            </a>
          </Col>
        </Row>

        <Row className="courses">
          <Col lg="6">
            <Dropdown title="Relevant Coursework" content={education.courses} />
          </Col>

          <Col lg="6">
            <Dropdown
              title="Online Coursework"
              content={education.onlineCourses}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
