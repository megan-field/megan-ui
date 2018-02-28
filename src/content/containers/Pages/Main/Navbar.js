import React from 'react';
import { Link } from 'react-router-dom';
// import { Route, BrowserRouter } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Link to="/input">Input</Link>
        |
        <Link to="/list">List</Link>
      </div>
    );
  }
}

export default Navbar;
