import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
    pText:'No!'
  }

  handleClick = (e)=>{
    this.setState({pText:'Yes!'})
  }

  handleChange = (e) =>{
    this.setState({input : e.target.value})
  }

  handleStrings = (string) =>{
    if(string.length > 0){
      return true;
    }
    return false;
  }

  render() {
    const {mainColor, pText, input} = this.state;
    return (
      <div className="App">
        <h1 className={mainColor}>Welcome to React</h1>
        <p className="button-state">{pText}</p>
        <button onClick={this.handleClick}>Change!</button>
        <Link address="www.google.com">Google!</Link>
        <h2>{input}</h2>
        <input value={input} onChange={this.handleChange}/>
      </div>
    );
  }
}

export class Link extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const {address, children, hide} = this.props;
    return (hide)?null:<a href={address} >{children}</a>;
  }
}

export default App;
