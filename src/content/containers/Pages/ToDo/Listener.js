import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { dataStoreID } from './List';
import Viewer from './successViewer';


import fetchDataBuilder from '../../../../foundation/redux/Factories/FetchData';

const fetchDataTransactionStateMainID = 'meganAPICall';
const FetchData = fetchDataBuilder(fetchDataTransactionStateMainID);

class Listener extends React.Component {
  componentDidMount() {
    console.log('Listener componentDidMount');
  }

  success() {
    console.log('success');
  }

  error() {
    console.log('error');
  }

  render() {
    const count = Object.keys(this.props.reduxState_this).length;
    let active = false;

    if (count >= 10) active = true;

    return (
      <div>
        <h3>Fetch Stuff</h3>
        <FetchData
          active={active}
          fetchURL="api/megan"
          sendData={this.props.reduxState_this}
          viewer={Viewer}
          noRender={!active}
        />
      </div>
    );
  }
}

Listener.propTypes = {
  reduxState_fetchDataTransaction: PropTypes.object,
  reduxState_this: PropTypes.object,
};

Listener.defaultProps = {
  reduxState_fetchDataTransaction: {},
  reduxState_this: {},

};

const mapStateToProps = state => ({
  reduxState_fetchDataTransaction: state.dataTransactions[fetchDataTransactionStateMainID],
  reduxState_this: state.dataStoreMulti[dataStoreID],

});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Listener);

