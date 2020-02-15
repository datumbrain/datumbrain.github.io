import React, {useState} from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "reactstrap";
import MoreInfoButton from "components/MoreInfoButton";
import Tilt from "react-tilt";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faQuoteLeft, faQuoteRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
// import firstVideo from "../../assets/img/carousel_video.mp4";


import firstUser from "../../assets/img/Ayoub-Fakir-1.jpg";
import secondUser from "../../assets/img/YasirAli.jpeg";
import thirdUser from "../../assets/img/Eipen.jpeg";
// import secondVideo from "../../assets/img/second_video.mp4";
// import thirdVideo from "../../assets/img/third_video.mp4";
import noUserImage from "../../assets/img/user_3.png";

const renderItems = () => {
    let items = [];

    for (let i = 1; i < 4; i++) {
        items.push(
            <Tilt options={{ max: 20, glare: true, maxGlare: 0.4 }} key={i}>
                <div
                    className={classNames(
                        "rounded tilt overflow-hidden shadow-box shadow-hover bg-contrast",
                        { "mt-5": i > 1 }
                    )}
                >
                    <figure>
                        <img
                            src={require(`assets/img/screens/app/pieces/${i}.png`)}
                            className="img-responsive"
                            alt=""
                        />
                    </figure>
                </div>
            </Tilt>
        );
    }

    return items;
};

function getCarouselItems() {
    return [
        {quote: "Fahad is a wonderful developer. He knew exactly how to manage and find the right solutions to our problem (which wasn't easy at all to manage) and proposed the appropriate options then succeeded in his work. I unreservedly recommend him! Keep up doing the that great work!", customerName: "Ayoub Fakir", links: [{text: "TEDx Speaker", link: "https://www.youtube.com/watch?v=-jm5Fw0F-ug"}, {text: "ScalaIO FR Speaker", link: "https://www.youtube.com/watch?v=IbLh8-8rsvo"} ], designation: "Solution Designer, ReportBrain", avatar: firstUser},
        {quote: "Very knowledgeable, easy to work with, transparent about personal strengths and weaknesses, very sound on the subject matter, proposes alternative solutions where applicable, highly recommended team!", customerName: "Yasir Ali", designation: "Predict Data, Inc.", avatar: secondUser},

        {quote: "Amazing! Quick to understand our project. Able to recognize possible issues and resolve them quickly. Delivered on time every time. Also took on project management roles when we need and was able to better coordinate with other members of the team. For me and my team it was a wonderful experience working with them.", customerName: "Eapen Kalathil", designation: "CEO, Parcelist", avatar: thirdUser},
        {quote: "Honest and able to manage the project and identify the ideas and mechanisms that serve the outputs and are courteous and knows how to deal with the customer in a very professional way. They are smart, committed, and fully qualified young professionals in all their skills and expertise.", customerName: "Ibrahim Alfayoumi", designation: "Confidential"},
        {quote: "Fahad, is extremely talented and has excellent skills in Scala. He is very accommodating and prompt in response. He has great communication skills that helped the project immensely. I will highly recommend Fahad to anyone who is looking for hiring a professional Scala developer.", customerName: "Rameez Vora", designation: "Confidential" },
        {quote: "Excellent experience!", customerName: "Mohammad Wahid", designation: "CEO, Mecku"},
        {quote: "Very helpful and helped me in some of my smallest needs. Quick in responding to questions which you might be stuck on for hours", customerName: "Omkar Kulkarni", designation: "Confidential"},
        {quote: "Very good developers, cooperative and adherent to deadlines", customerName: "Michael Arnaldi", designation: "CTO, CreditScript"}
    ]
}


const MultipleDesignBlocks = () => {
    let [currentCarouselItem, setCarouselItem] = useState(0);

    return (
        <section id="portfolio" className="section powered-design">
            <div className="shapes-container">
                <div className="shape shape-circle shape-circle-1">
                    <Fade bottom right duration={1500}>
                        <div />
                    </Fade>
                </div>
                <div className="shape shape-circle shape-circle-2">
                    <Fade bottom right duration={1200} delay={500}>
                        <div />
                    </Fade>
                </div>
                <div className="shape shape-ring animation--rotating-diagonal">
                    <div />
                </div>
                <div className="shape shape-triangle shape-animated">
                    <div className="animation--rotating" />
                </div>

                <div className="shape pattern-dots-1" />
            </div>

            <Container>
                <Row className="gap-y align-items-center">
                    <Col md="12">
                        <div className="section-heading mb-30">
                            <h2 className="heading-line">Featured Work</h2>

                            <div className="carousel-card__avatar">
                                <img src={getCarouselItems()[currentCarouselItem].avatar || noUserImage} alt="user image"/>
                            </div>

                            <h5 className="bold mb-0" style={{
                                fontSize: "18px"
                            }}>{getCarouselItems()[currentCarouselItem].customerName} {getCarouselItems()[currentCarouselItem].links && getCarouselItems()[currentCarouselItem].links.map((item, index, links) => (
                                <a href={item.link} target={"blank"} style={{
                                    fontSize: 13
                                }}>{item.text}{links.length - 1 === index ? " " : " | "}</a>
                            ))}</h5>
                            <p className="my-0" style={{
                                fontSize: "14px"
                            }}>
                                {getCarouselItems()[currentCarouselItem].designation}
                            </p>


                            <p className="lead text-muted mt-0">
                            <span className="py-3 " style={{
                                marginLeft: "-30px",
                                transform: "translateY(30px)",
                                display: "inline-block",
                                opacity: .3
                            }}><FontAwesomeIcon icon={faQuoteLeft} /></span>


                                <p>
                                    {/*Our team has worked on some really awesome products and*/}
                                    {/*delivered exceptional solutions.*/}
                                    {  getCarouselItems()[currentCarouselItem].quote  }

                                </p>
                                <span className="d-flex justify-content-end" style={{
                                    paddingRight: "40px",
                                    transform: "translateY(-20px)",
                                    opacity: .3
                                }}><FontAwesomeIcon icon={faQuoteRight} /></span>
                            </p>
                        </div>


                        <Link className={"back-link btn btn-outline-alternate more-link mt-0 mr-3"} onClick={() => setCarouselItem(currentCarouselItem === 0 ? getCarouselItems().length - 1 : currentCarouselItem - 1 )}>
                            <FontAwesomeIcon
                                icon={faLongArrowAltLeft}
                                className="icon"
                            />
                            Back
                        </Link>

                        <MoreInfoButton onClick={() => setCarouselItem(getCarouselItems().length - 1 === currentCarouselItem ? 0 : currentCarouselItem + 1)}
                                        className="btn btn-outline-alternate more-link mt-0"
                                        text="Next" />

                        {/*<a href="mailto:contact@predictdata.io">Get Started Now!</a>*/}

                    </Col>

                    {/*<Col md="6">*/}
                    {/*  /!*{renderItems()}*!/*/}

                    {/*  <div className="carousel-card">*/}

                    {/*    <div className="carousel-card__video">*/}
                    {/*      <video autoPlay src={getCarouselItems()[currentCarouselItem].video}>*/}
                    {/*        Your browser does not support the HTML5 Video element.*/}
                    {/*      </video>*/}
                    {/*    </div>*/}

                    {/*    <div className="customer-details w-100" style={{*/}
                    {/*      paddingLeft: "60px",*/}
                    {/*      paddingTop: 30*/}
                    {/*    }}>*/}
                    {/*      <ul className="list-unstyled">*/}
                    {/*        <li className="list-item">*/}
                    {/*          <div className="media">*/}
                    {/*            <div className="media-body">*/}
                    {/*              <h5 className="bold">{getCarouselItems()[currentCarouselItem].customerName}</h5>*/}
                    {/*              <p className="my-0">*/}
                    {/*                {getCarouselItems()[currentCarouselItem].customerReview}*/}
                    {/*              </p>*/}
                    {/*            </div>*/}
                    {/*          </div>*/}
                    {/*        </li>*/}

                    {/*      </ul>*/}
                    {/*    </div>*/}
                    {/*  </div>*/}

                    {/*</Col>*/}


                </Row>
            </Container>
        </section>
    );
};

export default MultipleDesignBlocks;
