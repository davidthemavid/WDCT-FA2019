import React, { Component } from "react";
const axios = require("axios");
import SearchResults from "../components/SearchResults";

const API_KEY = "10edf311-c0db-4303-a40c-1499475b4cad"; // guardian api
const url = `http://content.guardianapis.com/search?api-key=${API_KEY}`;

export default class App extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    axios.get(url).then(response =>
      this.setState({
        articles: response.data.response.results
      })
    );
  }
  render() {
    if (this.state.articles.length === 0) {
      return <div>Loading.....</div>;
    }
    return <SearchResults articles={this.state.articles} />;
  }
}
