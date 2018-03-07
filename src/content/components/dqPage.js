import React from 'react';
import Navbar from './navbar2';
import Footer from './footer';

class DataQualityPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container" id="dqPage">
          <h4>Data Quality</h4>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DataQualityPage;
