import React from 'react';

class VirtuousCircle extends React.Component {
  render() {
    return (
      <div id="virtuousCircle">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4">
              <h5>AlumniBase Survey</h5>
              <h6>Understanding of Alumni Outcomes, data delivered back across the student life cycle.</h6>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-4">
              <h5>Better Alumni Outcomes</h5>
              <h6>More students, better equipped for employment will improve graduate outcomes and improve your next survey.</h6>
            </div>
            <div className="col-4">
              <img alt="logo" src={require('../../content/theme/custom/images/virtuousCircle.png')} style={{ height: '250px', width: '300px' }} /><br />
            </div>
            <div className="col-4">
              <h5>Better Student Recruitment</h5>
              <h6>More tailored marketing messages that resonate with individuals can increase student recruitment</h6>
            </div>
          </div>
          <br />
          <br />
          <div className="row justify-content-center">
            <div className="col-4">
              <h5>Better Careers Service</h5>
              <h6>Show students the full range of career options and how they can fit in to improve employment outcomes</h6>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default VirtuousCircle;
