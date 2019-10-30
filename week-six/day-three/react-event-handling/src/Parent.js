import React, { Component } from "react";
import ChildOne from "./components/ChildOne";
import ChildTwo from "./components/ChildTwo";
import ChildThree from "./components/ChildThree";

class Parent extends Component {
  constructor() {
    super();
    // can you create a Parent object of type React Component

    // use this to bind methods to 'this' keyword or change your functions
    // to arrow functions
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    event.target.totalClicks.value = Number(event.target.totalClicks.value) + 1;
  }
  render() {
    return (
      // fragment
      <>
        <h1>React Event Handling</h1>
        <ChildOne onClick={this.handleClick} />
        <ChildTwo onClick={this.handleClick} />
        <ChildThree onClick={this.handleClick} />
      </>
    );
  }
}
export default Parent;
