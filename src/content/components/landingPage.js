import React from 'react';

class Landingpage extends React.Component {
  componentDidMount() {
    console.log('LandingPage mounted');
  }

  render() {
    return (
      <div className="wrapper">
        <div className="textBox">
          <h3>Beautiful Responsive Surveys</h3>
          <i className="far fa-plus" style={{ padding: '2vh' }} />
          <h3>Big Data and Joined Up Reporting</h3>
          <h3 style={{ fontSize: '40px' }}>=</h3>
          <h2>Alumni Outcomes Data</h2>
          <h2>that is easy to collect and use</h2>

        </div>
      </div>
    );
  }
}

export default Landingpage;
