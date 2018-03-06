import React from 'react';
import Navbar from './navbar2';

class Benefits extends React.Component {
  componentDidMount() {
    console.log('Benefits page mounted');
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container" id="benefitPage">
          <h4>Benefits Page</h4>
        </div>
      </div>
    );
  }
}

export default Benefits;
