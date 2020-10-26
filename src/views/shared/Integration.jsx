import React from "react";
import { Container, Row, Col } from "reactstrap";
import MoreInfoButton from "components/MoreInfoButton.jsx";

const renderBubbles = () => {
  let bubbles = [];
  const items = [
    {icon: "language/python", name: "Python"},
    {icon: "language/scala", name: "Scala"},
    {icon: "testing_framework/junit", name: "Junit"},
    {icon: "web-framework/django", name: "Django"},
    {icon: "build_tools/maven", name: "Maven"},
    {icon: "web-framework/play", name: "play"},
    {icon: "language/java", name: "Java"},
    {icon: "web-framework/flask", name: "Flask"},
    {icon: "build_tools/sbt", name: "Sbt"},
    {icon: "deployment_automation/jenkins", name: "jenkins"},
    {icon: "deployment_automation/google-cloud", name: "Google Cloud"},
    {icon: "hadoop/spark-5", name: "Apache Spark 5"},
    {icon: "hadoop/mapreduce", name: "Mapreduce"},
    {icon: "database/sqlite", name: "Sqlite"},
    {icon: "data_stream/kafka1", name: "Kafka"},
    {icon: "deployment_automation/aws", name: "Amazon Web Services"},
    {icon: "deployment_automation/docker", name: "Docker"},
    {icon: "data_stream/kinesis", name: "AmazonKinesis"},
    {icon: "database/mariadb", name: "Mariadb"},
    {icon: "database/mongodb", name: "Mongodb"},
    {icon: "database/postgresql", name: "Postgres"},


  ];

  items.forEach((bubble, i) => {
    const iconSize =
        i % 4 === 0 ? "xl" : i % 3 === 0 ? "lg" : i % 2 === 0 ? "md" : "xxl";

    bubbles.push(
        <div
            key={i}
            className={`bubble bg-contrast rounded-circle p-2 shadow icon icon-${iconSize}`}
        >
          <img
              src={require(`assets/img/demo/header/icons/${bubble.icon}.svg`)}
              alt=""
              className="img-responsive"
          />
          <span className="badge badge-contrast shadow-box">{bubble.name}</span>
        </div>
    );
  });

  return bubbles;
};

const Integration = () => {
  return (
      <section className="section integration-bubbles">
        <Container className="overflow-hidden">
          <Row>
            <Col md="6">
              <div className="bubbles-wrapper">
                <div className="animations m-0">{renderBubbles()}</div>
              </div>
            </Col>

            <Col md="6">
              <div className="section-heading">
                <p className="text-alternate text-uppercase bold">
                  Latest Stacks
                </p>
                <h2 className="heading-line">Tech-stack</h2>
                <p className="lead text-muted">
                  Our extensive research and development along with hands on expereince on the latests
                  innovations grants you a solution that is perfectly fit for your
                  use case.
                </p>
              </div>

              <MoreInfoButton
                  text="Explore our Github"
                  to="https://github.com/datumbrain"
              />
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default Integration;
