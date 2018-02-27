import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import * as storeAction from '../../../../foundation/redux/globals/DataStoreMulti/actions';

export const dataStoreID = 'inputData';

class List extends React.Component {
  componentDidMount() {
    console.log('List componentDidMount');
  }

  getList() {
    const results = [];

    const values = Object.values(this.props.reduxState_this);

    values.forEach((value, i) => {
      // eslint-disable-next-line
      const obj = <li key={i}>{value.value}</li>;

      results.push(obj);
    });

    return results;
  }

  render() {
    console.log('List render');
    // console.log(this.props);
    const items = this.getList();
    return (
      <div >
        <h3>list items</h3>
        <ul>
          {items}
        </ul>
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
  reduxState_this: state.dataStoreMulti[dataStoreID],
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(List);
