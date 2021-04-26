import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'reactstrap';

const DefaultFooter = () => {
  return (
    <footer className='site-footer section bg-dark text-contrast edge top-left'>
      <Container className='py-3'>
        <Row className='row gap-y text-center text-md-left'>
          <Col md='4' className='mr-auto'>
            <img
              src={require('assets/img/logo-light.png')}
              alt=''
              className='logo'
            />

            <p>
              A Lahore-based technology start-up, pioneering data engineering,
              web {'&'} custom software development.
            </p>
          </Col>

          <Col md='2'></Col>

          <Col md='2'></Col>

          <Col md='2'></Col>

          <Col md='2'>
            <h6 className='py-2 small'>Follow us</h6>

            <nav className='nav justify-content-around'>
              <a
                href='https://www.facebook.com/datumbrain'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-circle btn-sm brand-facebook'
              >
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </a>
              <a
                href='https://www.twitter.com/datumbrain'
                className='btn btn-circle btn-sm brand-twitter'
              >
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a
                href='https://www.linkedin.com/company/datum-brain/'
                className='btn btn-circle btn-sm brand-linkedin'
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
            </nav>
          </Col>
        </Row>

        <hr className='mt-5 op-5' />

        <Row className='small'>
          <Col md='4'>
            <p className='mt-2 mb-0 text-center text-md-left'>
              © {new Date().getFullYear()}
              <a
                href='https://datumbrain.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                &nbsp; Datum Brain
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default DefaultFooter;
