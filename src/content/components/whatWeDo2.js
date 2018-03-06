import React from 'react';

class WhatWeDo extends React.Component {
  componentDidMount() {
    console.log('WhatWeDo mounted');
  }

  render() {
    return (
      <div className="whatWeDo2">
        <h2 id="title">What we do</h2>
        <div className="container">


          <div className="card-deck" style={{ paddingTop: '5vh' }}>
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-header">
                <img className="card-img-top" alt="logo" src={require('../../content/theme/custom/images/TEF.png')} style={{ width: '5vw' }} /><br />
              </div>
              <div className="card-body">
                <h5 className="card-title">Teaching Excellence Framework</h5>
                <p className="card-text">Our survey is designed to give you lifelong employment outcomes to use in your written TEF Response.</p>
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-header2">
                <img className="card-img-top" alt="logo" src={require('../../content/theme/custom/images/alumni.png')} style={{ width: '5vw' }} /><br />
              </div>
              <div className="card-body">
                <h5 className="card-title">Understanding Alumni</h5>
                <p className="card-text">Give something of value to build relationships with alumni while also developing smarter ways to fundraise.</p>
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-header3">
                <img alt="logo" src={require('../../content/theme/custom/images/lifelong.png')} style={{ width: '5vw', paddingBottom: '1vh' }} /><br />
              </div>
              <div className="card-body">
                <h5 className="card-title">Lifelong Value of a Degree</h5>
                <p className="card-text">Understand the monetary and non financial value of a degree. Important to know as policy review is ongoing.</p>
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-header4">
                <img alt="logo" src={require('../../content/theme/custom/images/recruitment.png')} style={{ width: '5vw', paddingBottom: '1vh' }} />
              </div>
              <div className="card-body">
                <h5 className="card-title">Student Recruitment</h5>
                <p className="card-text">Get specific marketing messages that will resonate with students, no matter where they come from.</p>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ width: '40vw' }} />
      </div>
    );
  }
}

export default WhatWeDo;
