import React, { Component } from 'react';

class StopWatch extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      running: false,
      timerId: undefined,
    }
  }

  increaseByOneMilSecond = () => {
    let { timer } = this.state;
    timer += 1;
    this.setState({
      timer,
    })
  }

  toggleTimer = (e) => {
    const { running } = this.state;
    if (running) {
      this.stop();
    } else {
      const timerId = setInterval(this.increaseByOneMilSecond, 10);
      this.setState({ timerId: timerId, running: true });
    }
  }

  stop = (e) => {
    console.log("Timer stop");
    this.setState({ running: false });
    const { timerId, running } = this.state;
    console.log("Running: " + running);
    clearInterval(timerId);
  }

  clear = (e) => {
    this.setState({
      timer: 0,
      running: false,
      timerId: undefined,
    })
  }

  pad = (d) => {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }

  render() {
    const { timer, running } = this.state;
    return (
      <React.Fragment>
        <div>Stop Watch</div>
        <h3 id="watch"> {(parseInt(timer / 100))} Minutes : {(this.pad(timer % 100))} Seconds</h3>
        <button onClick={this.toggleTimer}>{running ? "Stop" : "Start"}</button>
        <button onClick={!running?this.clear:null}>Clear</button>
      </React.Fragment>
    );
  }
}

export default StopWatch;
