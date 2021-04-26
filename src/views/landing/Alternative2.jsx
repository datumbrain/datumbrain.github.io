import React from 'react';

// shared page components
import MultipleDesignBlocks from '../shared/MultipleDesignBlocks.jsx';
import Integration from '../shared/Integration.jsx';
import WhyUs from '../shared/WhyUs.jsx';
import Subscribe from '../shared/Subscribe.jsx';

// core components
import DefaultNavbar from 'components/Navbars/DefaultNavbar.jsx';
import DefaultFooter from 'components/Footers/DefaultFooter.jsx';

// alternative 2 page components
import Heading from '../alter2/Heading.jsx';
import Partners from '../alter2/Partners.jsx';
import Features from '../alter2/Features.jsx';

class Alternative2 extends React.Component {
  render() {
    return (
      <>
        <DefaultNavbar useOnlyDarkLogo={true} />
        <main ref='main'>
          <Heading />
          <Partners />
          <Features />

          <MultipleDesignBlocks />
          <Integration />
          <WhyUs />
          <Subscribe />
        </main>
        <DefaultFooter />
      </>
    );
  }
}

export default Alternative2;
