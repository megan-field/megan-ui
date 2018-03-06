import React from 'react';

class Navbar extends React.Component {
  navbarColor() {
    console.log('scrolling');
  }

  render() {
    return (
      <nav id="navbar-example" className="navbar fixed-top navbar-inverse">
        <a className="navbar-brand" href="#home"><img alt="logo" src={require('../../content/theme/custom/images/AB_White_Blue.png')} style={{ height: '90px', paddingTop: '2vh' }} /></a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#benefits">Benefits</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#data">Data Quality</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#legal">Compliance & Legal</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
