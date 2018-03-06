import React from 'react';

class HowItWorks extends React.Component {
  componentDidMount() {
    console.log('HowItWorks mounted');
  }

  render() {
    return (
      <div id="howItWorks">
        <div className="container" id="innerWrapper">
          <h2 id="title">How it works</h2>
          <div className="row" id="howItWorksRow">
            <div className="col-sm">
              <i id="icon" className="fal fa-pencil-alt" />
              <h5>Surveys Alumni</h5>
              <p>managed and analysed</p>
              <p>Beautiful survey for all generations</p>
            </div>
            <div className="col-sm">
              <i id="icon" className="fal fa-database" />
              <h5>Analyse the Data</h5>
              <p>in our tool or via expert to tableu etc.</p>
            </div>
            <div className="col-sm">
              <i id="icon" className="fal fa-chart-line" />
              <h5>Use in TEF, widening access etc.</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
