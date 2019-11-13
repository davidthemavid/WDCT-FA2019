import React from "react";
import { Line } from "react-chartjs-2";

let sampleData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 50, 81, 56, 55, 40]
    }
  ]
};

var divStyle = {
  height: "800px",
  width: "800px"
};

class App extends React.Component {
  state = { sampleData: sampleData };

  sliderHandle = event => {
    let newData = this.state.sampleData;
    newData.datasets[0].data[2] = event.target.value;
    this.setState({ sampleData: newData });
  };

  clickHandle = () => {
    let datasets = [...this.state.sampleData.datasets];
    let data = [...datasets[0].data];
    data[2]++;
    datasets[0].data = data;
    this.setState({
      sampleData: {
        ...this.state.sampleData,
        datasets: [...datasets]
      }
    });
  };

  render() {
    console.log(this.state.sampleData);
    return (
      <div style={divStyle}>
        <h2>Line Example</h2>
        <Line data={this.state.sampleData} />
        <button onClick={this.clickHandle} />
      </div>
    );
  }
}

export default App;
