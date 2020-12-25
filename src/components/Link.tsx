import React from "react";
import Nav from "react-bootstrap/Nav";
import Scroll from "react-scroll";

interface LinkProps {
  section: string
}

const Link = (props : LinkProps) => {
  return (
    <Nav.Link
      onSelect={() =>
        Scroll.scroller.scrollTo(props.section, {
          smooth: true,
          offset: window.matchMedia("(min-width: 768px)").matches ? -70 : -350,
          duration: 500,
        })
      }
      href={"#" + props.section}
    >
      {props.section.charAt(0).toUpperCase() + props.section.slice(1)}
    </Nav.Link>
  );
};

export default Link;
