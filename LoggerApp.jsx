import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: true,
      appState: Math.random()
    };
    console.log("ParentComponent: Constructor");
  }

  toggleChild = () => {
    this.setState({ showChild: !this.state.showChild });
  };

  componentDidMount() {
    console.log("ParentComponent: Component Did Mount");
    this.interval = setInterval(() => {
      this.setState({ appState: Math.random() });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleChild}>Toggle Child Component</button>
        {this.state.showChild && <ChildComponent />}
      </div>
    );
  }
}

export default ParentComponent;
