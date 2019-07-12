import React from "react";
import { Container, Row, Col } from "reactstrap";

const renderFeatures = () => {
  let features = [];
  const elements = [
    {
      icon: "pe-7s-diamond",
      title: "Powerful Design",
      description:
        "Ab ad aliquam assumenda beatae commodi distinctio dolore dolorum earum error et, exercitationem"
    },
    {
      icon: "pe-7s-tools",
      title: "Professional Tools",
      description:
        "Blanditiis cumque, eius error est et exercitationem, explicabo hic natus nobis odit porro quia"
    },
    {
      icon: "pe-7s-light",
      title: "Creative Content",
      description:
        "A animi aperiam cupiditate eum incidunt, magni mollitia nam nemo non officia omnis, quasi quisquam"
    }
  ];

  elements.forEach((element, i) => {
    features.push(
      <Col md="4" className="py-4 rounded shadow-hover">
        <i className={`pe ${element.icon} pe-3x mb-3 text-primary`} />
        <h5 className="bold">{element.title}</h5>
        <p>{element.description}</p>
      </Col>
    );
  });

  return features;
};

const Features = () => {
  return (
    <section id="features" className="section features">
      <Container>
        <div className="section-heading text-center">
          <h2 className="heading-line">Premium features</h2>
          <p className="lead text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, nulla,
            voluptates. Architecto eum minima necessitatibus quo reiciendis!
            Aliquam culpa doloremque eaque esse illo, nemo nesciunt nobis quia
            sapiente tenetur veniam.
          </p>
        </div>

        <Row className="gap-y text-center text-md-left">{renderFeatures()}</Row>
      </Container>
    </section>
  );
};

export default Features;
