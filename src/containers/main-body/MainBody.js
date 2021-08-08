import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MainBody.scss";

import ScrollAnimation from "react-animate-on-scroll";
import MainBodyCarousel from "../../components/carousel/MainBodyCarousel";

import ConnectImage from "../../assets/connect_icon.png";
import OptimizeImage from "../../assets/optimize_icon.png";
import PersonalizeImage from "../../assets/personalize_icon.png";

import ConnectModal from "../../components/modal/ConnectModal";
import OptimizeModal from "../../components/modal/OptimizeModal";
import PersonalizeModal from "../../components/modal/PersonalizeModal";

const MainBody = () => {
  const [connectModalShow, setConnectModalShow] = useState(false);
  const [optimizeModalShow, setOptimizeModalShow] = useState(false);
  const [personalizeModalShow, setPersonalizeModalShow] = useState(false);

  return (
    <div className="main-body">
      <div className="main-body-bg-wrapper">
        <Container>
          <Row className="card-container justify-content-center">
            <ConnectModal
              show={connectModalShow}
              onHide={() => setConnectModalShow(false)}
            />
            <Col
              className="connect"
              md="3"
              onClick={() => setConnectModalShow(true)}
            >
              <ScrollAnimation
                delay={1000}
                animateIn="fadeInUp"
                animateOut="fadeOutDown"
              >
                <div className="card">
                  <div className="image">
                    <img src={ConnectImage} alt="icon" />
                  </div>
                  <div className="content">
                    <h5>Connect</h5>
                    <p>
                      Sunt in culpa qui officia deserunt mollit anim id est
                      laborum
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </Col>

            <OptimizeModal
              show={optimizeModalShow}
              onHide={() => setOptimizeModalShow(false)}
            />
            <Col
              className="optimize"
              md="3"
              onClick={() => setOptimizeModalShow(true)}
            >
              <ScrollAnimation
                delay={1500}
                animateIn="fadeInUp"
                animateOut="fadeOutDown"
              >
                <div className="card">
                  <div className="image">
                    <img src={OptimizeImage} alt="icon" />
                  </div>
                  <div className="content">
                    <h5>Optimize</h5>
                    <p>
                      Sunt in culpa qui officia deserunt mollit anim id est
                      laborum
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </Col>

            <PersonalizeModal
              show={personalizeModalShow}
              onHide={() => setPersonalizeModalShow(false)}
            />
            <Col
              className="personalize"
              md="3"
              onClick={() => setPersonalizeModalShow(true)}
            >
              <ScrollAnimation
                delay={2000}
                animateIn="fadeInUp"
                animateOut="fadeOutDown"
              >
                <div className="card">
                  <div className="image">
                    <img src={PersonalizeImage} alt="icon" />
                  </div>
                  <div className="content">
                    <h5>Personalize</h5>
                    <p>
                      Sunt in culpa qui officia deserunt mollit anim id est
                      laborum
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </Col>
          </Row>

          <Row className="main-content justify-content-md-evenly align-items-center mx-1">
            <Col className="content-container my-4" md="5">
              <ScrollAnimation
                delay={2000}
                animateIn="fadeIn"
                animateOnce={true}
                animateOut="fadeOut"
              >
                <div className="heading">
                  <h3>Trusted by the world’s most successful brands</h3>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                delay={3000}
                animateIn="fadeIn"
                animateOnce={true}
                animateOut="fadeOut"
              >
                <div className="content">
                  <p>
                    Commodo nulla facilisi nullam vehicula ipsum a. Amet
                    volutpat consequat mauris nunc congue nisi. Ipsum dolor sit
                    amet consectetur.
                  </p>
                </div>
              </ScrollAnimation>
            </Col>
            <Col className="carousel-container" md="5">
              <MainBodyCarousel />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        <Row className="bottom-content justify-content-center align-items-md-center pt-5 pb-2">
          <Col>
            <div className="heading my-5">
              <p>Ready for a personal walkthrough?</p>
            </div>
            <div className="button-container">
              <a href="#">Request a Demo</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainBody;
