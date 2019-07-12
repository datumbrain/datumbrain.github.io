import React from "react";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MoreInfoButton from "components/MoreInfoButton";

const renderPartners = () => {
  let partners = [];

  for (let i = 1; i <= 6; ++i) {
    partners.push(
      <NavItem className="mr-3 py-2 op-5" key={i}>
        <img
          src={require(`assets/img/logos/${i}.png`)}
          className="icon"
          alt=""
        />
      </NavItem>
    );
  }

  return partners;
};

const Partners = () => {
  return (
    <section className="section alter3-partners bg-contrast edge top-left">
      <Container className="bring-to-front pb-md-9">
        <Row>
          <Col md="6">
            <div className="section-heading">
              <FontAwesomeIcon
                icon={["fas", "handshake"]}
                className="fa-3x accent mb-3"
              />

              <h3 className="text-alternate heading-line">
                We've partnered with awesome folks
              </h3>

              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                atque eaque eius esse et harum inventore ipsam laboriosam modi
                nam necessitatibus nemo pariatur provident.
              </p>
            </div>

            <Nav>{renderPartners()}</Nav>

            <MoreInfoButton
              className="btn btn-outline-primary bold"
              text="Learn more"
              to="#!"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partners;
