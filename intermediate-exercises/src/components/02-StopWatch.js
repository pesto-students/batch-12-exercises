import React, { Component } from 'react';

class StopWatch extends Component {
  constructor() {
    super();
    this.state = {
      lapsedTime: {
        milliseconds: 0,
        seconds: 0
      },
      buttonState: 'Start'
    }
    this.timer;
  }

  
  addTimer = () => {
    let {milliseconds, seconds} = this.state.lapsedTime;
    milliseconds += 1;
    if (milliseconds >= 1000) {
      milliseconds = 0;
      seconds += 1;
    }

    this.setState({
      lapsedTime: {
        milliseconds: milliseconds,
        seconds: seconds
      }
    })
  }


  handleTimer = () => {
    const buttonState = this.state.buttonState;
    if (buttonState === 'Start') {
      this.timer = setInterval(this.addTimer, 1);
      this.setState({
        buttonState: 'Stop'
      })
    }
    if (buttonState === 'Stop') {
      clearInterval(this.timer);
      this.setState({
        buttonState: 'Start',
      })
    }
    
  }

  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({
      lapsedTime: {
        milliseconds: 0,
        seconds: 0
      },
      buttonState: 'Start'
    })
  }

  render() {
    const {milliseconds, seconds} = this.state.lapsedTime;
    return (
      <React.Fragment>
        <div>Stop Watch</div>
        <button onClick={this.handleTimer} className='btn'>{this.state.buttonState}</button>
        <button onClick={this.resetTimer} className='btn red'>Clear</button>
        <p>{seconds}s : {milliseconds}</p>
      </React.Fragment>
    );
  }
}

export default StopWatch;
