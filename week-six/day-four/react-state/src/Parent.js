import React, { Component } from "react";
import { ChildOne as ChildOneRenamed } from "./components/ChildOne";
import ChildTwo from "./components/ChildTwo";
import ChildThree from "./components/ChildThree";

class Parent extends Component {
  state = {
    childOneCount: 0,
    childTwoCount: 0,
    childThreeCount: 0
  };

  // handleClick = event => {
  //   event.preventDefault();
  //   this.setState({
  //     ...this.state,
  //     [event.target.id]: this.state[event.target.id] + 1
  //   });
  // };
  handleClick = event => {
    event.preventDefault();
    const formId = event.target.id;
    this.setState(prevState => ({
      [formId]: prevState[formId] + 1
    }));
  };

  render() {
    return (
      // fragment
      <>
        <h1>React Event Handling</h1>
        <ChildOneRenamed
          count={this.state.childOneCount}
          onClick={this.handleClick}
        />
        <ChildTwo count={this.state.childTwoCount} onClick={this.handleClick} />
        <ChildThree
          count={this.state.childThreeCount}
          onClick={this.handleClick}
        />
      </>
    );
  }
}
export default Parent;
