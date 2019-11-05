import React, { Component } from "react";

const inputStyle = {
  border: "2px solid gray"
};

export default class MaxStudents extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  render() {
    if (this.state.value.length > 5) {
      throw new Error("You cannot have more than five chars for name");
    }
    return (
      <div>
        <label htmlFor="">Type student name here:</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          style={inputStyle}
        />
      </div>
    );
  }
}
