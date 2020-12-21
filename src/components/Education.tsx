import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { FaCalendar } from "react-icons/fa";
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
            <img
              src={process.env.PUBLIC_URL + education.logo}
              className="uw-logo"
              alt="UW logo"
            />
          </Col>

          <Col lg="12">
            <h4>Relevant Coursework:</h4>
            <ul>
              {education.courses.map((course) => (
                <Badge pill variant="primary">
                  {course}
                </Badge>
              ))}
            </ul>
          </Col>

          <Col lg="12">
            <h4>Online Coursework:</h4>
            <ul>
              {education.onlineCourses.map((course) => (
                <Badge pill variant="primary">
                  {course}
                </Badge>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
