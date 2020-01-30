import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";

import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink exact to="/about" activeClassName="active">About Us</NavLink></li>
        <li><NavLink exact to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    );
  }
}
