import React from 'react';
import Navbar from './navbar2';

class Legal extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container" id="legalPage">
          <h4>Legal & Compliance</h4>
          <h5>GDPR</h5>
        </div>
      </div>
    );
  }
}

export default Legal;
