import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import * as storeAction from '../../../../foundation/redux/globals/DataStoreMulti/actions';

const dataStoreID = 'inputData';

class Viewer extends React.PureComponent {
  componentDidMount() {
    console.log('The component did mount');
  }

  handleClick(event) {
    event.preventDefault();
    console.log('Clicked!');
    console.log(this.element.value);
    this.props.reduxAction_doUpdate(_.uniqueId(), { value: this.element.value });
  }

  render() {
    console.log('The component did render');
    console.log(this.props);
    return (
      <div>
        <div>
          <form>
            <input type="text" ref={(element) => { this.element = element; }} />
            <button onClick={(e) => { this.handleClick(e); }}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

Viewer.propTypes = {
  reduxAction_doUpdate: PropTypes.func,
};

Viewer.defaultProps = {
  reduxAction_doUpdate: () => {},
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  reduxAction_doUpdate: (subID, data) =>
    dispatch(storeAction.doUpdate(dataStoreID, subID, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);

