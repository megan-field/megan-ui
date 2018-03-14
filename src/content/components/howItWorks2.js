import React from 'react';

class HowItWorks extends React.Component {
  componentDidMount() {
    console.log('HowItWorks mounted');
  }

  render() {
    return (
      <div id="howItWorks2">
        <h2 id="title">How it works</h2>
        <div className="container" id="innerWrapper">
          <div className="row justify-content-around" id="howItWorksRow">
            <div className="col-sm">
              <i id="icon" className="fal fa-pencil-alt" />
              <h5>Survey Alumni</h5>
            </div>
            <i id="icon" className="far fa-long-arrow-right" style={{ paddingTop: '8vh' }} />
            <div className="col-sm">
              <i id="icon" className="fal fa-database" />
              <h5>Analyse the Data</h5>
            </div>
            <i id="icon" className="far fa-long-arrow-right" style={{ paddingTop: '8vh' }} />
            <div className="col-sm">
              <i id="icon" className="fal fa-chart-line" />
              <h5>Use in TEF</h5>
              <h5>widening access etc.</h5>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-sm" style={{ paddingLeft: '9vw' }}>
              <p>managed and analysed</p>
              <p>Beautiful survey</p>
              <p>for all generations</p>
            </div>
            <div className="col-sm" style={{ paddingRight: '10vw' }}>
              <p>in our tool or</p>
              <p>via expert to tableu etc.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
