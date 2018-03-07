import React from 'react';
import Navbar from './navbar2';
import Footer from './footer';

class Legal extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container" id="legalPage">
          <div id="wrapper">
            <div className="row justify-content-center">
              <div className="col-4">
                <div className="card" style={{ width: '18rem' }}>
                  <div className="card-body">
                    <h5 className="card-title">Terms</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Terms & Conditions</h6>
                    <p className="card-text">The T's & C's details what you can, and cannot do with the data within our platform, among other things.</p>
                    <a href="/terms">T's & C's</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{ width: '18rem' }}>
                  <div className="card-body">
                    <h5 className="card-title">Privacy</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Privacy</h6>
                    <p className="card-text">Our privacy policy explains what data we collect, who we share it with and your rights and controls.</p>
                    <a href="/privacy">Privacy Statement</a>
                  </div>
                </div>
              </div>
            </div><br /><br />
            <div className="row justify-content-center">
              <div className="col-4">
                <div className="card" style={{ width: '36rem' }}>
                  <div className="card-body">
                    <h5 className="card-title">GDPR</h5>
                    <h6 className="card-subtitle mb-2 text-muted">GDPR Compliant</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/GDPR">GDPR</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Legal;
