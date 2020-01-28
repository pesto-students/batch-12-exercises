import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('I\'m mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated!');
    console.log({ prevProps, prevState });
  }

  componentWillUnmount() {
    console.log('Good Night, Pesto!');
  }

  handleClick() {
    this.setState({
      name: 'Tech',
    });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Update Name</button>
        <p>Good morning, {this.state.name}!</p>
      </React.Fragment>
    );
  }
}

export default LifeCycle;
