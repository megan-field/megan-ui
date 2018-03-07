import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <img alt="logo" src={require('../../content/theme/custom/images/AB_white_300px_150ppi.png')} width="250" height="auto" />
            </div>
            <div id="navigation" className="col">
              <h5>Alumni Base</h5>
              <a href="/about">About Us</a><br />
              <a href="/benefits">Benefits</a><br />
              <a href="/data">Data Quality</a><br />
              <a href="/legal">Compliance & Legal</a>
            </div>
            <div id="legals" className="col">
              <h5>Legal</h5>
              <a>GDPR</a>
            </div>
            <div id="contact" className="col">
              <h5>Contact Us</h5>
              <i className="far fa-envelope" />
              <a href="mailto:hello@Sliips.com?Subject=Hello">hello@Sliips.com</a><br />
              <i className="fab fa-twitter" />
              <a href="https://www.twitter.com/paySliips">@paySliips</a>
            </div>
            <div id="copyright" className="col">
              <p>Copyright © 2014-2018, Sliips LTD.</p>
              <p>All rights reserved. Various trademarks held by their respective owners.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
