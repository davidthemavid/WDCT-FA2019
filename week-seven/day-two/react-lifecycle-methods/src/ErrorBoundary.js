import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    error: false,
    errorMessage: null
  };
  componentDidCatch(error, info) {
    this.setState({
      error: error,
      errorMessage: info
    });
  }
  render() {
    if (this.state.error) {
      return (
        <div>
          <h1
            style={{
              color: "red",
              border: "1px solid black",
              textAlign: "center"
            }}
          >
            Sorry. You cannot provide More than five characters for student's
            name!
          </h1>
          {/* <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.info.componentStack}
          </details> */}
        </div>
      );
    }
    return this.props.children;
  }
}
