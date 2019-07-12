import React from "react";
import { Container, Row, Col, Nav, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Heading = () => {
  return (
    <header className="header alter3-header section gradient gradient-primary-auxiliary text-contrast">
      <div className="shapes-container">
        <div className="animation-shape shape-ring animation--rotating-diagonal">
          <div />
        </div>
        <div className="animation-shape shape-circle animation--clockwise">
          <div />
        </div>
        <div className="animation-shape shape-triangle animation--anti-clockwise">
          <div className="animation--rotating" />
        </div>
        <div className="animation-shape shape-diamond animation--anti-clockwise">
          <div className="animation--rotating" />
        </div>

        <div className="static-shape shape-ring-1" />
        <div className="static-shape shape-ring-2" />
        <div className="static-shape shape-circle-1" />

        <div className="static-shape pattern-dots-1" />
        <div className="static-shape pattern-dots-2" />

        <div className="static-shape ghost-shape ghost-shape-1" />
      </div>

      <Container className="bring-to-front">
        <Row>
          <Col md="6">
            <h1 className="extra-bold display-md-3 font-md">
              A new way
              <span className="d-block display-md-4 light">
                to showcase your app
              </span>
            </h1>
            <p className="lead">
              Your amazing product deserves an outstanding way to show it.
              Dashcore will provide you with a quality template no matter what
              your idea is about.
            </p>

            <Nav className="mt-5" tag="nav">
              <NavLink
                href="#!"
                className="mr-3 btn btn btn-rounded btn-contrast"
              >
                <FontAwesomeIcon icon={["fas", "tag"]} className="mr-3" />
                Plans &amp; pricing
              </NavLink>

              <NavLink
                href="#!"
                className="btn btn-rounded btn-outline-contrast"
              >
                Start now
              </NavLink>
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Heading;
