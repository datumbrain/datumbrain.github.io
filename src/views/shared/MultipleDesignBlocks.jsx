import React, { createRef, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MoreInfoButton from 'components/MoreInfoButton';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuoteLeft,
  faQuoteRight,
  faLongArrowAltLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faTimes, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import skyler from '../../assets/img/skylerReeves.jpg';
import shmuel from '../../assets/img/shmuel.png';
import eapen from '../../assets/img/Eapen.jpeg';
import alex from '../../assets/img/alexander_k.jpg';
import ibrahim from '../../assets/img/ibrahim.jpg';
import fotios from '../../assets/img/fotios.png';
import ayoub from '../../assets/img/Ayoub-Fakir-1.jpg';
import noUserImage from '../../assets/img/user_3.jpg';

function getCarouselItems() {
  return [
    {
      quote:
        "The team at Datum Brain was excellent to work with. They communicated clearly, understood my requirements, stayed within the budget for our project, and were extremely professional. I'd highly recommend them to anyone needing custom development work done.",
      customerName: 'Skyler Reeves',
      testimonialLink: 'https://www.youtube.com/embed/oQ-hwitAJ2w',
      designation: 'Ardent Growth',
      avatar: skyler,
    },
    {
      quote:
        'Having worked with several overseas teams in the past, I have to say that I struck gold finding Fahad and his team. They really became an extension to my team, are very disciplined about understanding what needs to happen, contributing at the highest levels. Fahad is an honest guy, smart, and always helpful in meeting deadlines and pleasing customers. I look forward to continuing to work with Fahad and his team as they are a true asset and highly productive development group.',
      customerName: 'Shmuel Cohen',
      designation: 'PSI Services LLC',
      avatar: shmuel,
    },
    {
      quote:
        'Fahad was amazing. He was quick to understand our project. He was able to recognize possible issues and resolve them quickly. He delivered on time every time. He also took on project management roles when needed and was able to better coordinate with other members of the team. For me and my team it was a wonderful experience working with Fahad.',
      customerName: 'Eapen Kalathil',
      designation: 'Parcelist',
      avatar: eapen,
    },

    {
      quote:
        "Fahad is a wonderful developer. He knew exactly how to manage and find the right solutions to our problem (which wasn't easy at all to manage) and proposed the appropriate options then succeeded in his work. I unreservedly recommend him! Keep up doing the that great work!",
      customerName: 'Ayoub Fakir',
      links: [
        {
          text: 'TEDx Speaker',
          link: 'https://www.youtube.com/watch?v=-jm5Fw0F-ug',
        },
        {
          text: 'ScalaIO FR Speaker',
          link: 'https://www.youtube.com/watch?v=IbLh8-8rsvo',
        },
      ],
      designation: 'Solution Designer, ReportBrain',
      avatar: ayoub,
    },

    {
      quote:
        "Fahad is a wonderful developer. He knew exactly how to manage and find the right solutions to our problem (which wasn't easy at all to manage) and proposed the appropriate options then succeeded in his work. I unreservedly recommend him! Keep up doing that great work!",

      customerName: 'Alexander Kostopoulos',
      designation: 'ReportBrain',
      avatar: alex,
    },
    {
      quote:
        'Fahad, is extremely talented and has excellent skills in scala. He is very accommodating and prompt in response. He has great communication skills that helped the project immensely. I will highly recommend Fahad to anyone who is looking for hiring a professional Scala developer.',
      customerName: 'Ron Vincelet',
      designation: 'funcrane.com, neoprintr.com',
    },

    {
      quote:
        'Fahad Siddiqui, is an honest man who is able to manage the project and identify the ideas and mechanisms that serve the outputs as he is courteous and knows how to deal with the customer in a very professional way. He is a smart, committed, and fully qualified young man in all his skills and expertise.',
      customerName: 'Ibrahim Alfayoumi',
      designation: 'Palestenian National Internet Naming Authority',
      avatar: ibrahim,
    },

    {
      quote:
        '500% professional. Did a miracle, in no time. Job was done with attention to detail and quality, while being in constant communication with me, with very fast replies and doing changes according to my instructions. Delivered results in no time. I am personally fully impressed and will choose him BLINDLY for any similar projects of mine that can be covered by his expertise.',
      customerName: 'Fotios Kitsantas',
      designation: 'Beasts Unleashed',
      avatar: fotios,
    },
  ];
}

const MultipleDesignBlocks = () => {
  let [currentCarouselItem, setCarouselItem] = useState(0);
  let ref = createRef();
  let [popupStatus, setPopupStatus] = useState(false);

  function respondBack() {
    let elm = ref.current;

    elm.style.opacity = 0;
    elm.style.fontSize = 0;

    setTimeout(() => {
      setCarouselItem(
        currentCarouselItem === 0
          ? getCarouselItems().length - 1
          : currentCarouselItem - 1
      );

      requestAnimationFrame(() => {
        elm.style.opacity = 1;
        elm.style.fontSize = '';
      });
    }, 500);
  }

  function respondNext() {
    let elm = ref.current;

    elm.style.opacity = 0;
    elm.style.fontSize = 0;

    setTimeout(() => {
      setCarouselItem(
        getCarouselItems().length - 1 === currentCarouselItem
          ? 0
          : currentCarouselItem + 1
      );

      requestAnimationFrame(() => {
        elm.style.opacity = 1;
        elm.style.fontSize = '';
      });
    }, 500);
  }

  return (
    <section id='reviews' className='section powered-design'>
      <div className='shapes-container'>
        <div className='shape shape-circle shape-circle-1'>
          <Fade bottom right duration={1500}>
            <div />
          </Fade>
        </div>
        <div className='shape shape-circle shape-circle-2'>
          <Fade bottom right duration={1200} delay={500}>
            <div />
          </Fade>
        </div>
        <div className='shape shape-ring animation--rotating-diagonal'>
          <div />
        </div>
        <div className='shape shape-triangle shape-animated'>
          <div className='animation--rotating' />
        </div>

        <div className='shape pattern-dots-1' />
      </div>

      <Container>
        <Row className='gap-y align-items-center'>
          <Col md='12'>
            <div className='section-heading mb-30'>
              <h2 className='heading-line'>What clients say</h2>
              <div className='d-flex justify-content-between'>
                <Col md='6' className='clients-info'>
                  <div className='carousel-card__avatar'>
                    <img
                      src={
                        getCarouselItems()[currentCarouselItem].avatar ||
                        noUserImage
                      }
                      alt='user'
                    />
                  </div>
                  <h5
                    className='bold mb-0'
                    style={{
                      fontSize: '18px',
                    }}
                  >
                    {getCarouselItems()[currentCarouselItem].customerName}{' '}
                    {getCarouselItems()[currentCarouselItem].links &&
                      getCarouselItems()[currentCarouselItem].links.map(
                        (item, index, links) => (
                          <a
                            href={item.link}
                            target={'blank'}
                            style={{
                              fontSize: 13,
                            }}
                          >
                            {item.text}
                            {links.length - 1 === index ? ' ' : ' | '}
                          </a>
                        )
                      )}
                  </h5>

                  <p
                    className='my-0'
                    style={{
                      fontSize: '14px',
                    }}
                  >
                    {getCarouselItems()[currentCarouselItem].designation}
                  </p>
                </Col>
                {getCarouselItems()[currentCarouselItem].testimonialLink && (
                  <Col md='6' className='client-testimonial-video'>
                    <div className='browser absolute shadow lg'>
                      <div className='screen shadow-box'>
                        <img
                          style={{ opacity: 0.9 }} // if you need to change opacity later
                          src={require('assets/img/screens/app/skyler-testimonial.jpg')}
                          alt='...'
                        />

                        <div
                          className='play-icon'
                          onClick={() => setPopupStatus(!popupStatus)}
                        >
                          <FontAwesomeIcon icon={faPlay} color='#6c757d' />
                        </div>
                      </div>
                      <div className='notch' />
                    </div>
                  </Col>
                )}
              </div>
              <div className='client-testimonial-text'>
                <p
                  className='lead text-muted mt-0'
                  style={{
                    width: '60%',
                    fontStyle: 'italic',
                  }}
                >
                  <span
                    className='py-3 '
                    style={{
                      marginLeft: '-30px',
                      transform: 'translateY(40px)',
                      display: 'inline-block',
                      opacity: 0.3,
                    }}
                  >
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </span>

                  <p
                    ref={ref}
                    style={{
                      transition: 'all 150ms ease',
                      overflow: 'hidden',
                    }}
                  >
                    {/*Our team has worked on some really awesome products and*/}
                    {/*delivered exceptional solutions.*/}
                    {getCarouselItems()[currentCarouselItem].quote}
                  </p>

                  <span
                    className='d-flex justify-content-end'
                    style={{
                      transform: 'translateY(-20px)',
                      opacity: 0.3,
                    }}
                  >
                    <FontAwesomeIcon icon={faQuoteRight} />
                  </span>
                </p>
              </div>
            </div>

            <Link
              className={
                'back-link btn btn-outline-alternate more-link mt-0 mr-3'
              }
              onClick={() => respondBack()}
            >
              <FontAwesomeIcon icon={faLongArrowAltLeft} className='icon' />
              Back
            </Link>

            <MoreInfoButton
              onClick={() => respondNext()}
              className='btn btn-outline-alternate more-link mt-0'
              text='Next'
            />
          </Col>
        </Row>
      </Container>
      <div className={`custom-modal ${popupStatus ? 'd-flex' : 'd-none'}`}>
        <div className='custom-modal__video'>
          <span
            className='cross-icon'
            onClick={() => setPopupStatus(!popupStatus)}
          >
            <FontAwesomeIcon icon={faTimes} color='white' />
          </span>
          {popupStatus && (
            <iframe
              title='testimonial'
              className='popup-youtube-link'
              src={getCarouselItems()[currentCarouselItem].testimonialLink}
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default MultipleDesignBlocks;
