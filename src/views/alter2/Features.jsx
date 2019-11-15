import React from "react";
import { Container, Row, Col } from "reactstrap";

const renderFeatures = () => {
  let features = [];
  const elements = [
    {
      icon: "pe-7s-diamond",
      title: "Big Data",
      description:
        "Over 17+ Businesses empowered using the latest Big Data technologies. "
    },
    {
      icon: "pe-7s-tools",
      title: "Machine Learning",
      description:
        "Data never lies! Predict results to enable informed decision making. "
    },
    {
      icon: "pe-7s-light",
      title: "Artificial Intelligence",
      description:
        "Experience AI in its true definition and utilize the maximum benefits of this wonderful technology."
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
          <h2 className="heading-line">Who we are?</h2>
          <p className="lead text-muted">
            Datum Brain is a cutting edge endeavor that specifically caters to
            the latest technologies. We have centered our skills and done
            extensive work in the following three disciplines:
          </p>
        </div>

        <Row className="gap-y text-center text-md-left">{renderFeatures()}</Row>
      </Container>
    </section>
  );
};

export default Features;
