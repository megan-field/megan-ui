import React from 'react';
import LandingPage from '../../../components/landingPage';
import Navbar from '../../../components/navbar';
import WhatWeDo from '../../../components/whatWeDo';
import HowItWorks from '../../../components/howItWorks';
import Questions from '../../../components/questions';
// import DoItNow from '../../../components/doItNow';
import Footer from '../../../components/footer';
import BouncePoint from '../../../components/bouncePoint';
import CallToAction from '../../../components/callToAction';

class page1 extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <body data-spy="scroll" data-target="#navbar-example">
          <LandingPage />
          <WhatWeDo />
          <HowItWorks />
          <Questions />
          <CallToAction />
          <BouncePoint />
          <Footer />
          <h5 hidden id="contact">contact</h5>
        </body>
      </div>
    );
  }
}

export default page1;
