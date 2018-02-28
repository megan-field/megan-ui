import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as storeAction from '../../../../foundation/redux/globals/DataStoreMulti/actions';

const dataStoreID = 'inputFormData';

class Input extends React.Component {
  handleInput(e) {
    e.preventDefault();
    console.log(this.props.reduxAction_doUpdate);
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <label>First Name</label><br />
        <input type="text" /><br />
        <label>Surname</label><br />
        <input type="text" /><br />
        <label>Order Details</label><br />
        <input type="text" /><br />
        <button onClick={(e) => { this.handleInput(e); }}>Submit</button>
      </div>
    );
  }
}

Input.propTypes = {
  reduxAction_doUpdate: PropTypes.func,
};

Input.defaultProps = {
  reduxAction_doUpdate: () => {},
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  reduxAction_doUpdate: (subID, data) =>
    dispatch(storeAction.doUpdate(dataStoreID, subID, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
// export default Input;
