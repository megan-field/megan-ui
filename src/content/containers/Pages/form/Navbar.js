import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fetchDataBuilder from '../../../../foundation/redux/Factories/FetchData';
import * as fetchActions from '../../../../foundation/redux/globals/DataTransactions/actions';

const fetchDataTransactionStateMainID = 'meganAPICall';
const FetchData = fetchDataBuilder(fetchDataTransactionStateMainID);

class Navbar extends React.Component {
  logOut(e) {
    e.preventDefault();
    this.props.reduxAction_doReset(fetchDataTransactionStateMainID, 'default');
    this.context.router.history.push('/login');
  }

  render() {
    console.log(this);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/input">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/list">Your Orders</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => { this.logOut(e); }}>Log Out</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}


Navbar.propTypes = {
  reduxAction_doReset: PropTypes.func,
};

Navbar.defaultProps = {
  reduxAction_doReset: () => {},
};

Navbar.contextTypes = {
  router: PropTypes.object,
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  reduxAction_doReset: (stateMainID, stateSubID) => dispatch(fetchActions.doReset(stateMainID, stateSubID)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
