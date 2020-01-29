import React, { Component } from 'react';

/*
* Exercise 2:
*
*  Create a `StopWatch` component that has a Start/Stop button and a Clear
*  button.
*
*  Pressing Start will start a timer and the lapsed time in
*  milliseconds should be displayed above the buttons.
*
*  Once started the Start button should change to Stop. Clicking Stop
*  will stop the timer but lapsed time will be preserved.
*
*  Clicking Start again will resume the timer from where it left off.
*
*  Clicking Clear will stop the timer if it's running and reset the lapsed time to 0.
*/

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLapsed: 0,
      isOn: false,
      atStart: 0
    };
  }

  startTimer() {
    this.setState({
      isOn: true,
      timeLapsed: this.state.time,
      atStart: Date.now() - this.state.timeLapsed
    })
    this.timer = setInterval(() => this.setState({
      timeLapsed: Date.now() - this.state.atStart
    }), 1);
  }

  stopTimer() {
    this.setState({
      isOn: false
    })
    clearInterval(this.timer);
  }

  clearTimer() {
    clearInterval(this.timer);
    this.setState({
      timeLapsed: 0,
      isOn: false
    });
  }

  render() {
    const label = this.state.isOn ? 'Stop' : 'Start';
    return (
      <div>
        <h1>Timer: {this.state.timeLapsed} ms</h1>
        <button onClick={() => this.state.isOn ? this.stopTimer() : this.startTimer()}>{label}</button>
        <button onClick={() => this.clearTimer()}>Clear</button>
      </div>
    );
  }
}

export default StopWatch;
