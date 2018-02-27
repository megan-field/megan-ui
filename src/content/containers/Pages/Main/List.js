import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as storeAction from '../../../../foundation/redux/globals/DataStoreSingle/actions';

const dataStoreID = 'inputData';

class List extends React.Component {
  componentDidMount() {
    console.log('List componentDidMount');
  }

  render() {
    console.log('List render');

    console.log('!!!!!!!');
    let myString = 'HELLO THERE!!';

    console.log(myString);

    const obj = {
      myString,
    };

    console.log(obj);

    myString = 'another value';

    console.log(obj);


    return (
      <div >
        <h1>todo</h1>
      </div>
    );
  }
}

List.propTypes = {
  reduxState_this: PropTypes.object,
};

List.defaultProps = {
  reduxState_this: {},
};

const mapStateToProps = state => ({
  reduxState_this: state.dataStoreSingle[dataStoreID],
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(List);
