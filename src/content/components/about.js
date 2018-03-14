import React from 'react';
import Navbar from './navbar2';
import Footer from './footer';

class About extends React.Component {
  componentDidMount() {
    console.log('About page mounted');
  }

  render() {
    // <img alt="logo" src={require('../../content/theme/custom/images/aboutPrinciples.png')} style={{ height: '20vh', width: '40vw' }} /><br />
    return (
      <div>
        <Navbar />
        <div className="container" id="aboutPage">
          <h3 id="title">About Us</h3>
          <h5>We have 3 core principles that guide our product and service</h5>
          <div className="row justify-content-center">
            <div id="principles" className="card border-info mb-3" style={{ maxWidth: '18rem', marginRight: '15px' }}>
              <div className="card-header">1.</div>
              <div className="card-body text-info">
                <p className="card-text">Deliver high quality insights and data to universities to help them communicate their value.</p>
              </div>
            </div>
            <div id="principles" className="card border-info mb-3" style={{ maxWidth: '18rem', marginRight: '15px' }}>
              <div className="card-header">2.</div>
              <div className="card-body text-info">
                <p className="card-text">Deliver value to alumni that can help them progress their career, thereby continuing to benefit from their university..</p>
              </div>
            </div>
            <div className="card border-info mb-3" style={{ maxWidth: '18rem' }}>
              <div className="card-header">3.</div>
              <div className="card-body text-info">
                <p className="card-text">Deliver comprehensive careers data to students to help them realise their potential.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
