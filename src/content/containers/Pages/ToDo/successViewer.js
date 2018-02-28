import React from 'react';
// import PropTypes from 'prop-types';


class Viewer extends React.PureComponent {
  render() {
    console.log('The component did render');
    return (
      <h1>Well Done!</h1>
    );
  }
}

// Viewer.propTypes = {
//   reduxAction_doUpdate: PropTypes.func,
// };

// Viewer.defaultProps = {
// reduxAction_doUpdate: () => {},
// };


export default Viewer;
