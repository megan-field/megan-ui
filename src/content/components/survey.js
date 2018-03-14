import React from 'react';

class Survey extends React.Component {
  render() {
    return (
      <div className="survey">
        <div className="row justify-content-center">
          <div className="col-4">
            <img id="image" alt="survey" src={require('../theme/custom/images/survey.png')} />
          </div>
          <div className="col-1" id="textBox">
            <img alt="survey" src={require('../theme/custom/images/surveyResults.png')} style={{ height: '80px', marginBottom: '20px' }} />
            <img alt="survey" src={require('../theme/custom/images/seedSurvey.png')} style={{ height: '80px', marginBottom: '20px' }} />
            <img alt="survey" src={require('../theme/custom/images/surveyOnly.png')} style={{ height: '80px' }} />
          </div>
          <div className="col-4" id="textBox">
            <div style={{ color: '#fff', marginBottom: '30px' }}>
              <h5>21st Century Surveying</h5>
              <h6>means surveys look good, results are returned immediately to respondents and the survey is customisable.</h6>
            </div>
            <div style={{ color: '#fff', marginBottom: '30px' }}>
              <h5>Seed Survey with HE Data</h5>
              <h6>Sharing some of your data with us can help optimise the survey or allow us to conduct the outreach for survey completion for you.</h6>
            </div>
            <div style={{ color: '#fff' }}>
              <h5>Survey Only</h5>
              <h6>It is possible to run the survey without increasing your GDPR responsibilities, as we form individual consenting relationships with survey respondents and pass the anonymised aggregate data back to you.</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Survey;
