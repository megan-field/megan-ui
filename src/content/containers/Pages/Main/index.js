import React from 'react';
import Navbar from './Navbar';
import Home from './home';
import About from './about';
import Contact from './contact';
import './main.css';

class index extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container" id="pageContainer" data-spy="scroll" data-target="#navbar-example2" data-offset="0">
          <Home />
          <h4 id="about">About</h4>
          <About />
          <h4 id="contact">Get in touch</h4>
          <Contact />
        </div>
      </div>
    );
  }
}

export default index;
