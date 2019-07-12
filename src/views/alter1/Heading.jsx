import React from "react";
import { Container, Row, Col, Nav } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

const animations = [
  { duration: 1500, delay: 100 },
  { duration: 1000, delay: 100 },
  { duration: 1000, delay: 200 },
  { duration: 1000, delay: 200 },
  { duration: 1000, delay: 100 },
  { duration: 1000, delay: 100 },
  { duration: 1000, delay: 300 },
  { duration: 500, delay: 200 },
  { duration: 500, delay: 100 },
  { duration: 2000, delay: 500 },
  { duration: 500, delay: 200 },
  { duration: 500, delay: 100 },
  { duration: 500, delay: 0 },
  { duration: 500, delay: 0 },
  { duration: 500, delay: 100 },
  { duration: 500, delay: 0 }
];

const Heading = () => {
  return (
    <header className="header alter1-header section text-contrast">
      <div className="shapes-container">
        {animations.map((el, i) => (
          <Fade bottom duration={el.duration} delay={el.delay} key={i}>
            <div className="shape shape-animated shape-diagonal" key={i} />
          </Fade>
        ))}
      </div>

      <Container className="container">
        <Row>
          <Col md="6">
            <span className="rounded-pill shadow-box bg-contrast text-dark bold py-2 px-4">
              <FontAwesomeIcon
                icon={["far", "lightbulb"]}
                className="text-primary mr-2"
              />
              <span className="text-primary">Awesome</span> Landing Page
            </span>

            <h1 className="text-contrast display-4 display-md-3">
              <span className="bold">Laapp</span>
            </h1>
            <p className="lead bold">Premium Startup &amp; App Landing Page</p>

            <p className="lead">
              Besides its beautiful design. Laapp is an incredibly rich core
              framework for you to showcase your App.
            </p>

            <Nav className="my-5" tag="nav">
              <a
                href="#!"
                className="btn btn-rounded btn-alternate mr-2 mr-md-5"
              >
                Buy now
                <FontAwesomeIcon
                  icon={["fas", "long-arrow-alt-right"]}
                  className="ml-2"
                />
              </a>
              <a
                href="#demos"
                className="btn btn-rounded btn-contrast scrollto"
              >
                Explore demos
              </a>
            </Nav>
          </Col>

          <Col md="6">
            <div className="iphone front mx-auto">
              <div className="screen shadow-box">
                <img src={require("assets/img/screens/app/9.png")} alt="..." />
              </div>

              <div className="notch" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Heading;
