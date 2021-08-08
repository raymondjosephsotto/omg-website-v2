import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      {/* TOP NAVBAR - Light Green */}

      <Navbar className="top-navbar" bg="light">
        <Container>
          <Nav className="ms-auto">
            <Nav.Link
              className="mx-md-4"
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtu.be/EUrUfJW1JGk"
            >
              LINK 1
            </Nav.Link>
            <Nav.Link
              className="mx-md-4"
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtu.be/QsZlY0Vz4-o"
            >
              LINK 2
            </Nav.Link>
            <Nav.Link
              className="mx-md-4"
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtu.be/07Y0cy-nvAg"
            >
              Pricing
            </Nav.Link>
            <Nav.Link className="mx-md-4" href="tel:+123-456-7890">
              123-456-7890
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* BOTTOM NAVBAR - White */}
      <Navbar
        className="bottom-navbar"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand
            className="nav-brand"
            href="https://www.linkedin.com/in/raymondjsotto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="nav-item demo-button mx-md-4">
              Request a Demo
            </button>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="nav-item mx-md-4" href="#">
                Products
              </Nav.Link>
              <Nav.Link className="nav-item mx-md-4" href="#">
                Solutions
              </Nav.Link>
              <Nav.Link className="nav-item mx-md-4" href="#">
                Company
              </Nav.Link>

              <NavDropdown
                className="nav-item mx-md-4"
                title="Resources"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Sublink 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Sublink 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Sublink 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Sublink 4 Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                className="nav-item demo-button mx-md-4"
                href="https://www.linkedin.com/in/raymondjsotto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a Demo
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
