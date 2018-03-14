import React from 'react';
import Navbar from './navbar2';
import Footer from './footer';

class DataQualityPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container" id="dqPage">
          <div className="card">
            <div className="card-header">
    Single View of a Student
            </div>
            <div className="card-body">
              <p className="card-text">
Generating a full view of students enables understanding the full cycle of a student studying at a HE institution, from application to life long employment outcomes
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Lifetime outcomes used with LEO and DLHE Data to supplement regulatory submissions</li>
              </ul>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-header">
            Analytics
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Fully GDPR Compliant Solution means aggregate results are returned in a web portal that splits relevant information up for appropriate departments/ activities.</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DataQualityPage;
