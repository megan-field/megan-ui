import React from 'react';
import Navbar from './navbar2';
import Footer from './footer';

class About extends React.Component {
  componentDidMount() {
    console.log('About page mounted');
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container" id="aboutPage">
          <h4>About Us</h4>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
