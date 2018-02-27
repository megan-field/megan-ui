
import React from 'react';
import Viewer from './Viewer';
import List from './List';
import Listener from './Listener';

class Page extends React.Component {
  componentDidMount() {
    console.log('Page component loaded');
  }

  render() {
    console.log('Page render');
    return (
      <div>
        <h1>Hello World</h1>
        <Viewer />
        <List />
        <Listener />
      </div>
    );
  }
}

export default Page;
