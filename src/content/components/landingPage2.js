import React from 'react';

class Landingpage extends React.Component {
  componentDidMount() {
    console.log('LandingPage mounted');
  }

  render() {
    return (
      <div className="landingPage2">
        <div className="container">
          <h2 id="text">Alumni Outcomes Data</h2>
          <h2 id="text">that is easy to collect and use</h2>
          <br />
          <h3 className="btn btn-light disabled">Beautiful Responsive Surveys</h3>
          <br />
          <h3 className="btn btn-light disabled">Big Data and Joined Up Reporting</h3>
          <hr style={{ width: '40vw' }} />
        </div>
      </div>
    );
  }
}

export default Landingpage;
