import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const Proposal = () => {
  return (
    <section className="section our-proposal">
      <div className="shapes-container">
        <Fade bottom delay={300}>
          <div className="shape shape-circle pattern-dots" />
        </Fade>

        <Fade bottom>
          <div className="shape shape-circle shape-circle-fill" />
        </Fade>

        <div className="pattern pattern-dots" />
      </div>

      <Container className="bring-to-front">
        <Row className="align-items-center">
          <Col md="6" className="order-md-last">
            <figure
              className="mockup"
              style={{ width: "920px", maxWidth: "100%" }}
            >
              <img
                src={require("assets/img/screens/wmockup/1.png")}
                className="img-responsive"
                alt="..."
              />
            </figure>
          </Col>

          <Col md="6">
            <h2 className="heading-line">Our Landing Page proposal</h2>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              exercitationem impedit perspiciatis quis voluptas. Accusamus
              eligendi iusto laborum mollitia nostrum nulla optio perferendis,
              repellendus rerum similique suscipit temporibus vero voluptatibus!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Proposal;
