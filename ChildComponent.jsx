import React, { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log("ChildComponent: Constructor");
  }

  componentDidMount() {
    console.log("ChildComponent: Component Did Mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ChildComponent: Should Component Update");
    return nextState.count !== this.state.count;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ChildComponent: Component Did Update");
  }

  componentWillUnmount() {
    console.log("ChildComponent: Component Will Unmount");
  }

  render() {
    console.log("render () method Called................");
    return (
      <div>
        <h1>React Lifecycle Demo</h1>
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default ChildComponent;
