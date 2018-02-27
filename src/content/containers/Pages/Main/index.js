
import React from 'react';

import List from './List';
import Viewer from './Viewer';

class Page extends React.Component {
  componentDidMount() {
    console.log('Page component loaded');
  }

  render() {
    console.log('Page render');
    return (
      <div>
        <Viewer />
        <List />
      </div>
    );
  }
}

export default Page;
