import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

import HeroCarousel from "../../components/carousel/HeroCarousel";

import "./Hero.scss";
import iPhoneImg from "../../assets/iPhone.png";

const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <Row className="banner justify-content-md-center align-items-center py-5">
          <Col className="image" md="4">
            <ScrollAnimation
              delay={2000}
              animateIn="fadeIn"
              animateOut="fadeOut"
              animateOnce={true}
            >
              <img src={iPhoneImg} alt="iphone-img" />
            </ScrollAnimation>
          </Col>
          <Col className="content pb-md-5" md="6">
            <ScrollAnimation
              delay={2500}
              animateIn="fadeIn"
              animateOut="fadeOut"
              animateOnce={true}
            >
              <HeroCarousel />
            </ScrollAnimation>
          </Col>
        </Row>
        <Row className="call-to-action justify-content-md-center pb-5">
          <Col xs md="10">
            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut">
              <div className="heading">
                <h2>
                  Sed risus pretium quam vitae tortor <br /> condimentum lacinia
                  quis duis at tellus at{" "}
                </h2>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut">
              <div className="paragraph py-4">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat
                  non in reprehenderit in voluptate velit esse
                </p>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
