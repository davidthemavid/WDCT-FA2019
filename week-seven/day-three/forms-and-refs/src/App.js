//refs
import React, { Component } from "react";
import "bulma/css/bulma.css";
import Video from "./Video";

export default class App extends Component {
  constructor(props) {
    super(props);
    // brand new ref
    this.textInput = React.createRef();
  }
  focusInput = () => {
    console.log(this.textInput);
    this.textInput.current.focus();
  };
  render() {
    return (
      <div className="field">
        <div className="control">
          <h1 className="title is-1">Introduction to Refs</h1>
          <input
            type="text"
            className="input is-primary"
            placeholder="Type some text here"
            ref={this.textInput}
          />
          <button className="button is-danger" onClick={this.focusInput}>
            Click me to Focus
          </button>
          <Video />
        </div>
      </div>
    );
  }
}
