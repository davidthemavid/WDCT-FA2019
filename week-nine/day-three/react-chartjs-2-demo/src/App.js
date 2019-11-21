import React, { Component } from 'react';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import ScatterPlot from './components/ScatterPlot';
import WeatherGraph from './components/WeatherGraph';
import PineapplePie from './components/PineapplePie';
import MovieRatings from './components/MovieRatings';
import './App.css';

import basicBarData from './data/basic-bar';
import basicPieData from './data/basic-pie';
import basicScatter from './data/basic-scatter';
import weatherData from './data/weather-data';
import pineappleData from './data/pineapple-on-pizza';
import movieRatings from './data/movie-ratings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BarChart data={basicBarData} height={400} width={50} />
        <PieChart title="Commuting to work in Toronto" data={basicPieData} height={20} width={20} />
        <ScatterPlot title="Scatter plot" data={basicScatter} height={100} width={100} />
        <div className="big-space"></div>
        <WeatherGraph title="Temperatures Jan - Jun" data={weatherData} />
        <PineapplePie title="Pineapple Controversy" data={pineappleData} />
        <MovieRatings title="Movie Ratings" data={movieRatings} />
      </div>
    );
  }
}

export default App;
