import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './input.css';

import Navbar from './Navbar';
import { dNc } from '../../../../content/scripts/custom/utilities';
import * as storeAction from '../../../../foundation/redux/globals/DataStoreMulti/actions';


const dataStoreID = 'inputFormData';

class Input extends React.Component {
  componentDidMount() {
    console.log('Input componentDidMount');
  }

  getList() {
    const values = Object.values(this.props.reduxState_this);
    const index = values.length - 1;

    return (
      <div className="container">
        <h3>Your most recent order</h3>
        <div className="row justify-content-center">
          <div className="col-1" id="first">
            <h4>{values[index].firstName}</h4>
          </div>
          <div className="col-1" id="second">
            <h4> {values[index].surName}</h4>
          </div>
        </div>
        <div className="row">
          <div clasName="col-7">
            <p>{values[index].orderDetails}</p>
          </div>
        </div>
        <br />
        <hr />
      </div>
    );
  }


  handleInput(e) {
    e.preventDefault();

    const firstName = this.firstName.value;
    const surName = this.surName.value;
    const orderDetails = this.orderDetails.value;
    const value = { firstName, surName, orderDetails };

    if (dNc(firstName) && dNc(surName) && dNc(orderDetails)) {
      this.props.reduxAction_doUpdate(_.uniqueId(), value);
    } else {
      $(this.firstName).attr('placeholder', 'Please enter your first name');
      $(this.surName).attr('placeholder', 'Please enter your last name');
      $(this.orderDetails).attr('placeholder', 'Make sure to let us know your order details!');
    }
  }

  render() {
    console.log('Input rendered');

    let orders = 'You don\'t have any orders yet';
    if (dNc(this.props.reduxState_this[1])) orders = this.getList();

    return (
      <div style={{ textAlign: 'center' }}>
        <Navbar />
        <br />
        <br />
        <form className="container" id="formContainer">
          <label>Your name</label>
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="First name" ref={(element) => { this.firstName = element; }} />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Last name" ref={(element) => { this.surName = element; }} />
            </div>
          </div>
          <br />
          <div className="form-group">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your order details" ref={(element) => { this.orderDetails = element; }} />
          </div>
          <button type="button" className="btn btn-outline-secondary" onClick={(e) => { this.handleInput(e); }}>Submit</button>
        </form>
        <br />
        <br />
        <h4>{orders}</h4>
      </div>
    );
  }
}

Input.propTypes = {
  reduxAction_doUpdate: PropTypes.func,
  reduxState_this: PropTypes.object,
};

Input.defaultProps = {
  reduxState_this: {},
  reduxAction_doUpdate: () => {},
};

const mapStateToProps = state => ({
  reduxState_this: state.dataStoreMulti[dataStoreID],
});

const mapDispatchToProps = dispatch => ({
  reduxAction_doUpdate: (subID, data) =>
    dispatch(storeAction.doUpdate(dataStoreID, subID, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
