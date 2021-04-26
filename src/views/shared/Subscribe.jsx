import React from 'react';
import { Container } from 'reactstrap';

const Subscribe = () => {
  return (
    <section id='contact' className='section stay-tunned'>
      <Container className='bring-to-front'>
        <div className='shadow rounded p-5 bg-contrast overflow-hidden'>
          <div className='section-heading text-center'>
            <h2 className='heading-line'>Connect with us</h2>
            <p className='lead text-alternate'>
              Reach out to us with any query, we will get back to you almost
              immediately.
            </p>
          </div>

          <div className='mx-auto position-relative form-wrapper'>
            <form
              className='form text-center'
              data-response-message-animation='slide-in-left'
            >
              <div className='form-group input--group'>
                <b>Email: &nbsp;</b>
                <a
                  href='mailto:contact@datumbrain.com?Subject=Contact%20Us'
                  target='_top'
                >
                  contact@datumbrain.com
                </a>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
