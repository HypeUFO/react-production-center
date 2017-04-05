import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../public/styles/App.css';
import Header from './header.component';
import SignUpModal from './signup-modal.component';
import RPC from './rpc.component.js';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Meter</h2>
        </div>*/}
        <Header />
        <div className="container" style={{backgroundColor: "white"}}>
          <RPC />
        </div>
      </div>
    );
  }
}

export default App;
