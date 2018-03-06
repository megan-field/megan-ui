import React from 'react';

class DoItNow extends React.Component {
  componentDidMount() {
    console.log('DoItNow mounted');
  }

  render() {
    return (
      <div id="doItNow">
        <div className="container">
          <h5 id="title">Our easy to use service</h5>
          <div className="row justify-content-center">
            <div className="col-4">
              <div className="card" style={{ width: '20rem' }}>
                <div className="card-header">
    Standard Service
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="fal fa-check" />Responsive Survey</li>
                    <li className="list-group-item"><i className="fal fa-check" />Analyse the Data</li>
                    <li className="list-group-item"><i className="fal fa-check" />Clear Outcomes</li>
                    <li className="list-group-item"><i className="fal fa-check" />GDPR compliant</li>
                    <li className="list-group-item"><i className="fal fa-times" />Email Alumni</li>
                    <li className="list-group-item"><i className="fal fa-times" />Advertise</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card" style={{ width: '20rem' }}>
                <div className="card-header" id="card-header2">
    Fully Managed Service
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="fal fa-check" />Responsive Survey</li>
                    <li className="list-group-item"><i className="fal fa-check" />Analyse the Data</li>
                    <li className="list-group-item"><i className="fal fa-check" />Clear Outcomes</li>
                    <li className="list-group-item"><i className="fal fa-check" />GDPR compliant</li>
                    <li className="list-group-item"><i className="fal fa-check" />Email Alumni</li>
                    <li className="list-group-item"><i className="fal fa-check" />Advertise</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default DoItNow;
