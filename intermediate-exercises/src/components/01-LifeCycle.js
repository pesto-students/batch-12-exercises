import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
  }

  componentDidMount() {
    console.log("I'm mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Updating !");
    console.log({ prevProps, prevState });
  }

  componentWillUnmount() {
    console.log("Good night, Pesto!")
  }

  updateComponent = ({ target }) => {
    const { name } = this.state;
    this.setState({ name: name + " Remote " });
  }

  render() {
    return (
      <React.Fragment>
        <p>Good morning, {this.state.name}!</p>
        <button onClick={this.updateComponent}>Update the component</button>
      </React.Fragment>
    );
  }
}

export default LifeCycle;
