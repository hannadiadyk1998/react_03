import React, { Component, Fragment } from 'react';
import List from './components/List';

class App extends Component {
  state = {
    animals: [
      { type: `turtle`, icon: `🐢` },
      { type: `octopus`, icon: `🐙` },
      { type: `fish`, icon: `🐠` },
      { type: `flamingo`, icon: `🦩` },
      { type: `penguin`, icon: `🐧` }
    ]
  }


  render() {
    const { animals } = this.state;
    return (
      <Fragment>
        <List List={animals} />
      </Fragment>
    );
  }
}

export default App;
