import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

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
      <div>
        <h3>Your most recent order</h3>
        <h4>{values[index].firstName}</h4>
        <h4>{values[index].surName}</h4>
        <p>{values[index].orderDetails}</p>
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
    console.log(this.props.reduxState_this);
    let orders = 'You have no orders yet...';

    if (dNc(this.props.reduxState_this.firstName)) orders = this.getList();

    return (
      <div style={{ textAlign: 'center' }}>
        <Navbar />
        <label>First Name</label><br />
        <input type="text" ref={(element) => { this.firstName = element; }} /><br />
        <label>Surname</label><br />
        <input type="text" ref={(element) => { this.surName = element; }} /><br />
        <label>Order Details</label><br />
        <input type="text" ref={(element) => { this.orderDetails = element; }} /><br />
        <button onClick={(e) => { this.handleInput(e); }}>Submit</button>
        <h3>{orders}</h3>
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
