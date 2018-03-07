import React from 'react';
import Navbar from './navbar2';
import Footer from './footer';

class Benefits extends React.Component {
  componentDidMount() {
    console.log('Benefits page mounted');
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container" id="benefitPage">
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={require('../../content/theme/custom/images/FI.png')} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Fee Income</h5>
                <p className="card-text">The National Audit Office finds that, on average, a provider moving up five places in a legue table gains just 0.25% of additional fee income.</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../../content/theme/custom/images/VFM.png')} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Value for Money</h5>
                <p className="card-text">Just 32% of students believe that their course offers value for money, while graduating with an average £50,000 debt.</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../../content/theme/custom/images/NAO.png')} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">National Audit Office</h5>
                <p className="card-text">The NAO has suggested that universities may be mis-selling courses and is looking at taking actions to address this.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Benefits;
