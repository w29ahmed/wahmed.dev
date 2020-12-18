import React, { useState, useEffect } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import {
  FaAngleRight,
  FaAngleLeft,
  FaCalendar,
  FaMapMarkerAlt,
} from "react-icons/fa";
import experience from "./content/experience.json";
import "./styles/ExperienceCarousel.scss";

const ExperienceCarousel = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState("");

  // After index changes I need to set animate back to blank so that
  // on the next button click it'll trigger the animate useEffect. If I
  // don't clear it, it can't handle consecutive clicks of the same button.
  // The timeout is to ensure there is enough time for the animation to run.
  // If the timeout is too short, animate will change to blank before the
  // animation finishes running, which is gonna look like the animation stopped abruptly.
  // There's gotta be a better way to do this because this feels like a hack
  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(""), 300);
    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    // "fade-left" = right button clicked, so go an index forward in the content array
    if (animate === "fade-left") {
      setIndex(
        (prev) =>
          (prev + (1 % experience.jobs.length) + experience.jobs.length) %
          experience.jobs.length
      );
    }
    // "fade-right" = left button clicked, so go an index back in the content array
    else if (animate === "fade-right") {
      setIndex(
        (prev) =>
          (prev - (1 % experience.jobs.length) + experience.jobs.length) %
          experience.jobs.length
      );
    }
  }, [animate]);

  return (
    <Container className="experience-carousel" fluid>
      <Row>
        <Col
          xs={{ order: 2, span: 6 }}
          sm={{ order: 2, span: 6 }}
          md={{ order: 1, span: 1 }}
          lg={{ order: 1, span: 2 }}
          className="arrow-col"
          onClick={() => setAnimate("fade-right")}
        >
          <FaAngleLeft className="arrow" size={40} />
        </Col>
        <Col
          xs={{ order: 1, span: 12 }}
          sm={{ order: 1, span: 12 }}
          md={{ order: 2, span: 10 }}
          lg={{ order: 2, span: 8 }}
        >
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={index}
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
              classNames={animate}
            >
              <Container fluid>
                <Row>
                  <Col lg="8">
                    <h2 className="position-title">
                      {experience.jobs[index].title}
                    </h2>
                    <h3 className="company-name">
                      {experience.jobs[index].company}
                    </h3>
                  </Col>

                  <Col className="company-logo-col">
                    <a
                      href={experience.jobs[index].website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + experience.jobs[index].logo
                        }
                        className={experience.jobs[index].css}
                        alt="company logo"
                      />
                    </a>
                  </Col>

                  <Col lg="12">
                    <FaCalendar className="calendar" />
                    <p className="icon-text">{experience.jobs[index].date}</p>
                    <FaMapMarkerAlt className="map-marker" />
                    <p className="icon-text">{experience.jobs[index].location}</p>
                  </Col>
                </Row>

                {experience.jobs[index].skills.map((skill) => (
                  <Badge pill variant="primary">
                    {skill}
                  </Badge>
                ))}

                <ul className="experience-bullets">
                  {experience.jobs[index].bullets.map((bullet) => (
                    <li dangerouslySetInnerHTML={{ __html: bullet }}></li>
                  ))}
                </ul>
              </Container>
            </CSSTransition>
          </SwitchTransition>
        </Col>
        <Col
          xs={{ order: 3, span: 6 }}
          sm={{ order: 3, span: 6 }}
          md={{ order: 3, span: 1 }}
          lg={{ order: 3, span: 2 }}
          className="arrow-col"
          onClick={() => setAnimate("fade-left")}
        >
          <FaAngleRight className="arrow" size={40} />
        </Col>
      </Row>
    </Container>
  );
};

export default ExperienceCarousel;
