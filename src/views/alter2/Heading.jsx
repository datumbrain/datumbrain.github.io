import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

import { faTimes, faPlay } from "@fortawesome/free-solid-svg-icons";
const shapes = [
  { duration: 1500, delay: 100 },
  { duration: 1000, delay: 100 },

  { duration: 500, delay: 200 },
  { duration: 500, delay: 200 },

  { duration: 1000, delay: 200 },
  { duration: 1000, delay: 200 },
  { duration: 1000, delay: 100 },

  { duration: 1000, delay: 100 },
  { duration: 1000, delay: 300 },
];

const Heading = () => {
  let [popupStatus, setPopupStatus] = useState(false);

  return (
    <header id="home" className="header alter2-header section">
      <div className="shapes-container">
        {/* diagonal shapes */}
        {shapes.map((shape, i) => (
          <Fade bottom>
            <div
              className="shape shape-animated shape-diagonal"
              duration={shape.duration}
              delay={shape.delay}
            />
          </Fade>
        ))}

        {/* animated shapes */}
        {/* <div className="animation-shape shape-ring animation--clockwise" />
          <div className="animation-shape shape-circle shape-circle-1 animation--anti-clockwise" />
          <div className="animation-shape shape-circle shape-circle-2 animation--clockwise" />
          <div className="animation-shape shape-heart animation--clockwise">
            <div className="animation--rotating" />
          </div>

          <div className="animation-shape shape-triangle animation--rotating-diagonal">
            <div className="animation--rotating" />
          </div>
          <div className="animation-shape shape-diamond animation--anti-clockwise">
            <div className="animation--rotating" />
          </div> */}

        {/* static shapes */}
        <div className="static-shape shape-ring-1" />
        <div className="static-shape shape-ring-2" />

        <div className="static-shape shape-circle shape-circle-1">
          <Fade top right>
            <div />
          </Fade>
        </div>

        <div className="static-shape shape-circle shape-circle-2">
          <Fade top right delay={500}>
            <div />
          </Fade>
        </div>

        <div className="static-shape pattern-dots-1" />
        <div className="static-shape pattern-dots-2" />

        {/*  main shape */}
        <div className="static-shape background-shape-main" />

        {/*  ghost shapes */}
        <div className="static-shape ghost-shape ghost-shape-1" />
      </div>

      <Container>
        <Row>
          <Col md="6">
            <span className="rounded-pill shadow-box bg-contrast text-dark bold py-2 px-4">
              <FontAwesomeIcon
                icon={["far", "lightbulb"]}
                className="text-primary mr-2"
              />
              <span className="text-primary">Innovative&nbsp;</span>
              <FontAwesomeIcon
                icon={["far", "hammer"]}
                className="text-primary-go mr-2"
              />
              <span className="text-primary-go">Build&nbsp;</span>

              <FontAwesomeIcon
                icon={["far", "redo-alt"]}
                className="text-primary-scala mr-2"
              />
              <span className="text-primary-scala">Repeat&nbsp;</span>
            </span>

            <h3 className="display-4 mt-3">
              <span className="bold">Datum Brain</span>
            </h3>
            <p className="lead bold text-primary">
              Data Engineering / Big Data / Data Science
            </p>

            <p className="lead">
              We have specialized in most widely used {"&"} horizontally
              scalable frameworks.
            </p>

            <nav className="nav my-3">
              <a
                href="#features"
                className="btn btn-rounded btn-alternate mr-5 mr-md-5"
              >
                About Us
                <FontAwesomeIcon
                  icon={["fas", "long-arrow-alt-right"]}
                  className="ml-2"
                />
              </a>
            </nav>
          </Col>

          <Col md="6">
            {/* <div className="iphone front mx-auto"> */}
            <div className="browser absolute shadow lg">
              <div className="screen shadow-box">
                <img
                  style={{ opacity: 0.9 }} // if you need to change opacity later
                  src={require("assets/img/screens/app/shot-neo4j.png")}
                  alt="..."
                />

                <div
                  className="play-icon"
                  onClick={() => setPopupStatus(!popupStatus)}
                >
                  <FontAwesomeIcon icon={faPlay} color="#6c757d" />
                </div>
              </div>
              <div className="notch" />
            </div>
          </Col>
        </Row>
      </Container>

      <div className={`custom-modal ${popupStatus ? "d-flex" : "d-none"}`}>
        <div className="custom-modal__video">
          <span
            className="cross-icon"
            onClick={() => setPopupStatus(!popupStatus)}
          >
            <FontAwesomeIcon icon={faTimes} color="white" />
          </span>
          {popupStatus && (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Sbcx2dLcXkM"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Heading;
