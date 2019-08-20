/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopNav from './TopNav'
import LeftNav from './LeftNav'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {

    return(
      <div className="wrapper">


          <div >

            <div>
                { this.props.children }
            </div>
          </div>

      </div>
    )
  }
}

export default App;

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
