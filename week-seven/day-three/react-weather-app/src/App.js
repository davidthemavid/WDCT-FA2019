import React, { Component } from "react";
import axios from "axios";

// ? -> before query parameters
// & -> to give more than one query parameter
// query parameter: key=value
const locationUrl = city =>
  `https://api.opencagedata.com/geocode/v1/json?key=e86222355af7460b9e753283326cfbb7&q=${city}&pretty=1`;

// proxy url -> append this before your API call
const corsUrl = "https://cors-anywhere.herokuapp.com/";

const weatherUrl = (lat, lng) =>
  `${corsUrl}https://api.darksky.net/forecast/82317ee0c43e86070fe114fabe7b32b7/${lat},${lng}`;

export default class App extends Component {
  state = {
    weatherData: {},
    loading: true
  };
  componentDidMount() {
    axios.get(locationUrl("Vancouver")).then(response => {
      const geometry = response.data.results[0].geometry;
      axios.get(weatherUrl(geometry.lat, geometry.lng)).then(response => {
        this.setState({
          weatherData: response.data,
          loading: false
        });
      });
    });
  }
  render() {
    if (this.state.loading) return <div>Loading.....</div>;
    return (
      <>
        <p>Timezone: {this.state.weatherData.timezone}</p>
        <p>Summary: {this.state.weatherData.currently.summary}</p>
        <p>Temperature: {this.state.weatherData.currently.temperature}</p>
      </>
    );
  }
}
