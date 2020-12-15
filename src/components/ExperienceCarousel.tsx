import React, { useState, useEffect } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./styles/ExperienceCarousel.scss";

const words = ["index 0", "index 1", "index 2", "index 3", "index 4"];

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
    const timeout = setTimeout(
      () => setAnimate(""), 300
    );
    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    // "fade-left" = right button clicked, so go an index forward in the content array
    if (animate === "fade-left") {
      setIndex(
        (prev) =>
          (prev + 1 % words.length + words.length) % words.length
      );
    }
    // "fade-right" = left button clicked, so go an index back in the content array
    else if (animate === "fade-right") {
      setIndex(
        (prev) =>
          (prev - 1 % words.length + words.length) % words.length
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
          className="left-col"
          onClick={() => setAnimate("fade-right")}
        >
          <FaAngleLeft className="left-arrow" size={40} />
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
              <div>
                <h1>{words[index]}</h1>
                <h2>{words[index]}</h2>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </Col>
        <Col
          xs={{ order: 3, span: 6 }}
          sm={{ order: 3, span: 6 }}
          md={{ order: 3, span: 1 }}
          lg={{ order: 3, span: 2 }}
          className="right-col"
          onClick={() => setAnimate("fade-left")}
        >
          <FaAngleRight className="right-arrow" size={40} />
        </Col>
      </Row>
    </Container>
  );
};

export default ExperienceCarousel;
