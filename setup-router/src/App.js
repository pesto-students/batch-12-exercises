import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="*">
              <h5>Error 404</h5>
            </Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
