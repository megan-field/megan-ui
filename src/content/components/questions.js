import React from 'react';

class Questions extends React.Component {
  render() {
    return (
      <div className="questions">
        <div className="container">
          <div id="border">
            <h4>Still more questions?</h4>
            <br />
            <h5>Find out about:</h5>
            <br />
            <div className="row justify-content-center">
              <div className="col-1">
                <a href="GDPR">GDPR</a>
              </div>
              <div className="col-1">
                <a href="dq">Data Quality</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Questions;
