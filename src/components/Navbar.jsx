import React from "react";
import * as ReactBootStrap from "react-bootstrap";

import { BrowserRouter as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="NavApp">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        bg="dark"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand>
          <h4>
            <strike>
              <kbd>NG</kbd>
            </strike>
          </h4>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link to="/home">
              <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/about">
              <ReactBootStrap.Nav.Link href="/about">
                About Me
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <Link to="/skills">
              <ReactBootStrap.Nav.Link href="/skills">
                Skills
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/projects">
              <ReactBootStrap.Nav.Link href="/projects">
                Projects
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/contact">
              <ReactBootStrap.Nav.Link href="/contact">
                Contact
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default Navbar;
