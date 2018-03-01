import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingArea from '../../../../content/components/Loading';
import Navbar from './Navbar';
import Input from './Input';

import fetchDataBuilder from '../../../../foundation/redux/Factories/FetchData';
import { dNc } from '../../../../content/scripts/custom/utilities';

import * as fetchActions from '../../../../foundation/redux/globals/DataTransactions/actions';

const fetchDataTransactionStateMainID = 'meganAPICall';
const FetchData = fetchDataBuilder(fetchDataTransactionStateMainID);

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    console.log('LoginPage mounted');
  }

  getErrorMessages() {
    let generalStatus = null;
    let payload = null;

    if (dNc(this.props.reduxState_fetchDataTransaction.default)) {
      ({ generalStatus, payload } = this.props.reduxState_fetchDataTransaction.default);
    }

    if (generalStatus === 'error') {
      return (
        <div>
          <h3 style={{ color: 'red' }}>{payload}</h3>
        </div>
      );
    }

    return null;
  }

  handleForm(e) {
    e.preventDefault();
    const username = this.username.value;
    const password = this.password.value;

    if (dNc(username) && dNc(password)) {
      this.setState({
        username,
        password,
      });
    } else {
      $(this.username).attr('placeholder', 'Please enter a valid username');
      $(this.password).attr('placeholder', 'please enter a valid password');
    }
  }

  render() {
    const { username, password } = this.state;
    const sendData = { username, password };
    let generalStatus = null;
    let payload = null;
    let started = null;
    let finished = null;

    if (dNc(this.props.reduxState_fetchDataTransaction.default)) {
      ({
        generalStatus, payload, started, finished,
      } = this.props.reduxState_fetchDataTransaction.default);
    }

    let active = false;

    if (dNc(username) && dNc(password)) active = true;

    if (started === true && finished === false) {
      return (
        <LoadingArea />
      );
    }

    if (generalStatus === 'success') {
      this.context.router.history.push('/input');
    }

    return (
      <div style={{ textAlign: 'center' }}>
        <br />
        {this.getErrorMessages()}
        <br />
        <label>Username</label>
        <input type="text" ref={(element) => { this.username = element; }} />
        <br />
        <label>Password</label>
        <input type="text" ref={(element) => { this.password = element; }} />
        <br />
        <button className="btn btn-primary" onClick={(e) => { this.handleForm(e); }}>Log in</button>
        <FetchData
          active={active}
          fetchURL="api/meganLogin"
          sendData={sendData}
          noRender
        />
      </div>
    );
  }
}

Login.propTypes = {
  reduxState_fetchDataTransaction: PropTypes.object,
  reduxAction_doReset: PropTypes.func,
};

Login.defaultProps = {
  reduxState_fetchDataTransaction: {},
  reduxAction_doReset: () => {},
};

Login.contextTypes = {
  router: PropTypes.object,
};

const mapStateToProps = state => ({
  reduxState_fetchDataTransaction: state.dataTransactions[fetchDataTransactionStateMainID],
});

const mapDispatchToProps = dispatch => ({
  reduxAction_doReset: (stateMainID, stateSubID) => dispatch(fetchActions.doReset(stateMainID, stateSubID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
