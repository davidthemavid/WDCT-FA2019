import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("I am inside of a constructor()");
    this.state = {
      photos: [],
      counter: 0
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    console.log("I am inside of render()");
    // console.log(this.state);
    return (
      <div>
        <h1>Component Lifecycle methods</h1>
        {this.state.photos.length > 0 ? (
          <h4>Total photos: {this.state.photos.length}</h4>
        ) : (
          <div>Loading......</div>
        )}
        <button onClick={this.increment}>Increment Counter</button>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
  componentDidMount() {
    console.log("I am inside of componentDidMount()");
    axios.get("http://jsonplaceholder.typicode.com/photos").then(response =>
      this.setState({
        photos: response.data
      })
    );
  }
  componentDidUpdate() {
    // check for props.match being changed to something else
    console.log("I am inside of componentDidUpdate()");
    this.setState({
      counter: 123
    });
  }
}
