import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './styles/App.css';

class App extends Component {
  render() {
    return (

      <Fragment>
        <Navbar />
        <Router>
          <Switch>
            <Route component={Home} exact pattern="/"></Route>
            <Route component={About} pattern="/about"></Route>
            <Route component={Contact} pattern="/contact"></Route>
          </Switch>
        </Router>
      </Fragment>


    );
  }
}

export default App;
