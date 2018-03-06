import React from 'react';
import LandingPage from '../../../components/landingPage2';
import Navbar from '../../../components/navbar2';
import WhatWeDo from '../../../components/whatWeDo2';
import HowItWorks from '../../../components/howItWorks2';
import BouncePoint from '../../../components/bouncePoint2';
import Questions from '../../../components/questions2';
import Footer from '../../../components/footer';

class page1 extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <LandingPage />
        <WhatWeDo />
        <HowItWorks />
        <BouncePoint />
        <Questions />
        <h5 id="contact">contact</h5>
        <Footer />
      </div>
    );
  }
}

export default page1;
