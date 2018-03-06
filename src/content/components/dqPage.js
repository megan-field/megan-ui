import React from 'react';
import Navbar from './navbar2';

class DataQualityPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container" id="dqPage">
          <h4>Data Quality</h4>
        </div>
      </div>
    );
  }
}

export default DataQualityPage;
