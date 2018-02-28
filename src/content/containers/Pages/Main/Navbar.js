import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  // logOut(e) {
  //   e.preventDefault();
  //   console.log(this.props);
  // }

  render() {
    return (
      <div style={{ textAlign: 'center' }} >
        <Link to="/input">Input</Link>
        |
        <Link to="/list">List</Link>
        |
        <Link to="/">Log Out</Link>
      </div>
    );
  }
}

export default Navbar;
