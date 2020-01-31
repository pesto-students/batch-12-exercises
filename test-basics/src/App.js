import React, { Component } from 'react';
import './styles/App.css';

const isTextOrEmpty = (value) => Boolean(value) ? value.toString() : '' 

export class Link extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.hide !== true) {
      return <a href={this.props.address}></a>;
    } else {
      return null;
    }
  
  }
}


/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      input: '',
      mainColor: 'blue',
      currentTarget : '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleStrings = this.handleStrings.bind(this);
  }

  handleInputChange(event) {
    const inputText = (event.target !== undefined) ? event.target.value : '';
    this.setState({ currentTarget: isTextOrEmpty(inputText) });
  }

  handleButtonClick() {
    this.setState({ on: !this.state.on });
  }

  handleStrings(inputString) {
    return Boolean(inputString);
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <h2 className={this.state.mainColor}>{this.state.currentTarget}</h2>
        <button className="button" onClick={this.handleButtonClick}>Change color</button>
        <p className="button-state">{this.state.on ? 'Yes!' : 'No!'}</p>
        <input type="text" onChange={this.handleInputChange}></input>
        <link></link>
      </div>
    );
  }
}

export default App;
