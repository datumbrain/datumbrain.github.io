import React from "react";
import { Container, Row, Col } from "reactstrap";

class FeaturesCard extends React.Component {
  createCards = () => {
    let features = [];
    let cards = [
      {
        icon: "paint-bucket",
        title: "themes made easy",
        description:
          "Our astonishing style structure makes your customization process a breeze"
      },
      {
        icon: "diamond",
        title: "powerful design",
        description:
          "With ready-to-use content you'll deploy your implementation in no time"
      },
      {
        icon: "light",
        title: "creative content",
        description:
          "Repetitive styles all across the web? Nevermind that! Shine with unique styles"
      }
    ];

    cards.forEach((el, i) => {
      features.push(
        <Col md="4" key={i}>
          <div className="icon-box rounded gradient gradient-primary-light text-contrast shadow icon-xl">
            <i className={`icon m-0 pe pe-7s-${el.icon} pe-3x`} />
          </div>
          <h4 className="semi-bold mt-4 text-capitalize">{el.title}</h4>

          <hr className="w-25 bw-2 border-alternate mt-3 mb-4" />
          <p className="regular text-muted">{el.description}</p>
        </Col>
      );
    });

    return features;
  };

  render() {
    return (
      <section className="section mt-6n" id="features">
        <Container className="pt-0">
          <div className="bg-contrast shadow rounded p-5">
            <Row className="gap-y">{this.createCards()}</Row>
          </div>
        </Container>
      </section>
    );
  }
}

export default FeaturesCard;
