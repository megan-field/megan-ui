import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav id="navbar-example2" className="navbar fixed-top navbar-light bg-light">
        <a className="navbar-brand" href="#">Home</a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Get in touch</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
