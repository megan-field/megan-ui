import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light justify-content-between" id="navbar2">
        <a className="navbar-brand" href="/2"><img alt="logo" src={require('../../content/theme/custom/images/AB_150px_150ppi.png')} style={{ height: '5vh' }} /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/benefits">Benefits</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/data">Data Quality</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/legal">Compliance & Legal</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" style={{ color: '#0050bd' }}>Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
