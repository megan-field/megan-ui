import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Navbar from './Navbar';
import { dNc } from '../../../../content/scripts/custom/utilities';
import fetchDataBuilder from '../../../../foundation/redux/Factories/FetchData';

import * as storeAction from '../../../../foundation/redux/globals/DataStoreMulti/actions';

const dataStoreID = 'inputFormData';

class List extends React.Component {
  componentDidMount() {
    console.log('list componentDidMount');
  }


  handleDelete(e, i) {
    e.preventDefault();
    const clickedIndex = i + 1;
    const deletedOrder = this.props.reduxState_this[clickedIndex];

    this.props.reduxAction_doUpdate(clickedIndex, null);
  }

  render() {
    let orders = <p>No Orders yet</p>;
    if (dNc(this.props.reduxState_this)) {
      const values = Object.values(this.props.reduxState_this);
      orders = values.map((value, i) => {
        if (dNc(value.firstName)) {
          return (
            <div key={i}>
              <br />
              <h4>{value.firstName}</h4>
              <h4>{value.surName}</h4>
              <p>your order: {value.orderDetails}</p>
              <button onClick={(e) => { this.handleDelete(e, i); }}>delete</button>
              <br />
              <hr />
            </div>
          );
        }
        return (null);
      });
    }
    return (
      <div style={{ textAlign: 'center' }}>
        <Navbar />
        {orders}
      </div>
    );
  }
}

List.propTypes = {
  reduxState_this: PropTypes.object,
  reduxAction_doUpdate: PropTypes.func,
};

List.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(List);
