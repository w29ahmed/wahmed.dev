import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./styles/Experience.scss";

const Experience = () => {
  const [index, setIndex] = useState(0);

  return (
    <section id="experience">
      <Container fluid>
        <h1>
          Experience <hr />
        </h1>

        <Carousel
          activeIndex={index}
          onSelect={(selectedIndex, e) => setIndex(selectedIndex)}
          prevIcon={<FaAngleLeft className="arrow" size={40}/>}
          nextIcon={<FaAngleRight className="arrow" size={40}/>}
        >
          <Carousel.Item>
              <h1>
               test
              </h1>
          </Carousel.Item>

          {/* <Carousel.Item>test2</Carousel.Item> */}
        </Carousel>
      </Container>
    </section>
  );
};

export default Experience;
