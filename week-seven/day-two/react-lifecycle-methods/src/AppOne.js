import React, { Component } from "react";
import MaxStudents from "./MaxStudents";
import ErrorBoundary from "./ErrorBoundary";

export default class AppOne extends Component {
  render() {
    return (
      <div>
        <h3>
          MaxStudents component is wrapped around ErrorBoundary. If error
          occurs, I should see some friendly message
        </h3>
        <ErrorBoundary>
          <MaxStudents />
        </ErrorBoundary>
      </div>
    );
  }
}
