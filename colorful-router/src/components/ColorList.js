import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';
import '../styles/ColorList.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const ColorList = (props) => {
  const colorLinks = props.colors.map(color => (
    <li key={color.hex}>
      <Link to={color.name}>
        {color.name}
      </Link>
    </li>
  ));
  const colorSwitch = props.colors.map(color => (
    <Route path={`/${color.name}`}>
      <Color name={color.name} hex={color.hex} />
    </Route>
  ));
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to the Colorful Router.</h1>
        <h1>Add a color</h1>
      </header>
      <div className="App-intro">
        <p>Please select a color.</p>
        <Router>
          <div>
            <ul>{colorLinks}</ul>
            <Switch>
              {colorSwitch}
            </Switch>
          </div>

        </Router>
      </div>
    </div>
  );
};

ColorList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default ColorList;
