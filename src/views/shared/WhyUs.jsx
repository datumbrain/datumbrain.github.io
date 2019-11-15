import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const renderFeatures = () => {
  let features = [];
  const items = [
    {
      name: "Scalable",
      icon: "plug",
      description: "Scale your solution with absolutely no hassle"
    },
    {
      name: "Custom Analytics",
      icon: "heart",
      description: "Get the stats that matter to you most"
    },
    {
      name: "Cloud Deployment",
      icon: "headphones",
      description: "Deploy on secure and fast cloud servers"
    }
  ];

  items.forEach((f, i) => {
    features.push(
      <li className="list-item" key={i}>
        <div className="media align-items-center">
          <div className="icon-shape mr-3">
            <div className="shape shape-pipes" />
            <FontAwesomeIcon
              icon={["fas", f.icon]}
              className="icon fa-3x text-alternate"
            />
          </div>

          <div className="media-body">
            <h5 className="bold">{f.name}</h5>
            <p className="my-0">{f.description}</p>
          </div>
        </div>
      </li>
    );
  });

  return features;
};

const WhyUs = () => {
  return (
    <section className="section why-choose-us">
      <div className="shapes-container">
        <div className="pattern pattern-dots" />
      </div>

      <div className="container pb-8 bring-to-front">
        <div className="section-heading text-center">
          <h2 className="heading-line">Why choose Datum Brain?</h2>
          <p className="text-muted lead mx-auto">
            Years of experience in technologies like Scala and Play Framework,
            enable us to provide solutions to problems that are considered too
            complex to solve by others.{" "}
          </p>
          <p className="text-muted lead mx-auto">
            No matter how unique your requirements may be, we can work on
            extracting the ideal solution and deliver it in a robust and
            extremely user friendly way. You are surely in for a surprise!
          </p>
        </div>

        <div className="row gap-y">
          <div className="col-md-6">
            <h4 className="bold text-alternate">
              We understand your data better than anyone!
            </h4>
            <p className="text-muted lead mb-5">
              Our mission is to empower businesses by providing quality products
              and solutions to tame data.
            </p>

            <ul className="list-unstyled why-icon-list">{renderFeatures()}</ul>

            {/* <hr className="my-5" />
            <div className="text-center text-md-left">
              <Link to="#!" className="btn btn-primary text-contrast">
                Know More
              </Link>
            </div> */}
          </div>

          <div className="col-md-6">
            <div className="rotated-mockups device-twin">
              <div className="browser absolute shadow-lg">
                <img
                  src={require("assets/img/screens/app/scalable.png")}
                  alt="..."
                />
              </div>

              {/* <div className="front iphone light">
                <div className="screen">
                  <img
                    src={require("assets/img/screens/app/1.png")}
                    alt="..."
                  />
                </div>

                <div className="notch" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
