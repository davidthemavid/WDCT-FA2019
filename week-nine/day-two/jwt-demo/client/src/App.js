import React, { Component } from "react";
const axios = require("axios");
export default class App extends Component {
  state = {
    loggedIn: false,
    data: {},
    loading: true
  };

  getPrivateData = event => {
    event.preventDefault();
    axios
      .get("/private", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken") + "123"}`
        }
      })
      .then(response => {
        this.setState({
          loggedIn: true,
          data: response.data,
          loading: false
        });
      });
  };
  onSubmit = event => {
    event.preventDefault();
    axios
      .post("/login", {
        email: event.target.email.value,
        password: event.target.password.value
      })
      .then(response => {
        console.log("Token: ", response.data);
        localStorage.authToken = response.data.token;
        this.setState({
          loggedIn: true
        });
      });
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Login</button>
          {this.state.loggedIn && (
            <button type="submit" onClick={this.getPrivateData}>
              Get Private Data
            </button>
          )}
        </form>
        {this.state.loggedIn &&
          Object.keys(this.state.data).length !== 0 &&
          this.state.data.constructor === Object && (
            <div>
              <p>{this.state.data.role}</p>
              <p>{this.state.data.project}</p>
              <p>{this.state.data.name}</p>
            </div>
          )}
      </div>
    );
  }
}
