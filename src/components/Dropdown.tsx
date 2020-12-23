import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Container from "react-bootstrap/esm/Container";
import Badge from "react-bootstrap/Badge";
import { FaAngleDown } from "react-icons/fa";
import "./styles/Dropdown.scss";

interface DropdownProps {
  title: string;
  content: string[];
}

const Dropdown = (props: DropdownProps) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <Container fluid id="dropdown">
      <h4>{props.title}</h4>
      <FaAngleDown
        className={showContent ? "arrow-up" : "arrow-down"}
        onClick={() => setShowContent((prev) => !prev)}
        size={40}
      />

      <CSSTransition
        in={showContent}
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
        unmountOnExit
        classNames="dropdown-content"
      >
        <ul>
          {props.content.map((c) => (
            <Badge pill variant="primary">
              {c}
            </Badge>
          ))}
        </ul>
      </CSSTransition>
    </Container>
  );
};

export default Dropdown;
