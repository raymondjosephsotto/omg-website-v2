import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Footer.scss";

import FbIcon from "../../assets/fb_icon.png";
import TwIcon from "../../assets/tw_icon.png";
import LiIcon from "../../assets/li_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="justify-content-center align-items-center  pt-5 pb-4">
          <Col className="social-icons">
            <a
              href="https://www.facebook.com/iloveny/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FbIcon} alt="social-icon" />
            </a>
            <a
              href="https://twitter.com/nyc_loveletters"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TwIcon} alt="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/raymondjsotto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LiIcon} alt="social-icon" />
            </a>
          </Col>
        </Row>

        <Row className="justify-content-md-center pb-4 mx-auto">
          <Col className="disclaimer">
            <p>©{new Date().getFullYear()} Lorem Ipsum. All Rights Reserved.</p>
          </Col>
        </Row>

        <Row className="bottom-links justify-content-md-center pb-3">
          <Col className="left-links" md={3}>
            <ul>
              <li>
                <a
                  href="https://youtu.be/EUrUfJW1JGk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link 1
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/QsZlY0Vz4-o"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link 2
                </a>
              </li>
            </ul>
          </Col>
          <Col className="middle-links" md={2}>
            <ul>
              <li>
                <a
                  href="https://youtu.be/07Y0cy-nvAg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link 3
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/iM4LzEcaTK0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link 4
                </a>
              </li>
            </ul>
          </Col>
          <Col className="right-links" md={3}>
            <ul>
              <li>
                <a
                  href="https://youtu.be/6hz8fuw5adc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link 5
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/Ufi3xwtrZKk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link 6
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
