import React, { Component } from "react";
import "../styles/App.css";

import HomePage from "../components/HomePage";
import UnitsPage from "../components/UnitsPage";
import FruitsPage from "../components/FruitsPage";
import UnitDetails from "../components/UnitDetails";
import FruitDetails from "../components/FruitDetails";

import { Route, Switch, Link, withRouter } from "react-router-dom";
import axios from "axios";

// API End Points for our BackEnd
const UNITS_URL = "http://localhost:5000/api/units";
const FRUITS_URL = "http://localhost:5000/api/fruits";
class App extends Component {
  state = {
    units: [],
    fruits: []
  };

  // fetch both units and fruits using our backend apis
  componentDidMount() {
    axios
      .get(UNITS_URL)
      .then(response => this.setState({ units: response.data }));
    axios
      .get(FRUITS_URL)
      .then(response => this.setState({ fruits: response.data }));
  }

  /**
   *    CREATE, UPDATE AND DELETE HANDLERS FOR UNIT
   */
  createUnit = event => {
    event.preventDefault();
    const newUnit = {
      name: event.target.name.value
    };
    axios.post(UNITS_URL, newUnit).then(response => {
      this.setState({
        units: [...this.state.units, response.data]
      });
    }, this.props.history.push("/units"));
  };

  saveUnit = (event, unitName, unitId) => {
    event.preventDefault();

    axios.put(`${UNITS_URL}/${unitId}`, { name: unitName }).then(response => {
      this.setState(prevState => ({
        units: prevState.units.map(unit =>
          unit.id === unitId ? { ...response.data.unitUpdated } : unit
        )
      }));
    });
  };

  deleteUnit = event => {
    event.preventDefault();
    const unitId = event.target.id;

    const filteredFruits = this.state.fruits.filter(
      fruit => String(fruit.unitId) === unitId
    );

    filteredFruits.forEach(fruit => {
      axios.delete(`${FRUITS_URL}/${fruit.id}`).then(response => {
        this.setState({
          fruits: response.data.fruitsAfterDeletion
        });
      });
    });
    axios.delete(`${UNITS_URL}/${unitId}`).then(response => {
      this.setState({
        units: response.data.unitsAfterDeletion
      });
    });
    this.props.history.push("/units");
  };

  /**
   *    CREATE, UPDATE AND DELETE HANDLERS FOR FRUIT
   */
  createFruit = event => {
    event.preventDefault();
    const newFruit = {
      name: event.target.name.value,
      inventory: event.target.inventory.value,
      unitId: event.target.unitSelection.value
    };
    axios.post(FRUITS_URL, newFruit).then(response => {
      this.setState({
        fruits: [...this.state.fruits, response.data]
      });
    }, this.props.history.push("/fruits"));
  };

  saveFruit = (event, fruitName, fruitInventory, fruitId) => {
    event.preventDefault();

    axios
      .patch(`${FRUITS_URL}/${fruitId}`, {
        name: fruitName,
        inventory: fruitInventory
      })
      .then(response => {
        this.setState(prevState => ({
          fruits: prevState.fruits.map(fruit =>
            fruit.id === fruitId ? { ...response.data.fruitUpdated } : fruit
          )
        }));
      });
  };

  deleteFruit = event => {
    event.preventDefault();
    const fruitId = event.target.id;
    axios.delete(`${FRUITS_URL}/${fruitId}`).then(response => {
      this.setState({
        fruits: response.data.fruitsAfterDeletion
      });
    });
    this.props.history.push("/fruits");
  };

  render() {
    return (
      <div className="App">
        <Link to="/">
          <h1>Fruit Shoppe</h1>
        </Link>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/units"
            exact
            render={props => <UnitsPage units={this.state.units} {...props} />}
          />
          <Route
            path="/units/:unitId"
            exact
            render={props => (
              <UnitDetails
                createUnit={this.createUnit}
                saveUnit={this.saveUnit}
                deleteUnit={this.deleteUnit}
                units={this.state.units}
                {...props}
              />
            )}
          />
          <Route
            path="/fruits"
            exact
            render={props => (
              <FruitsPage fruits={this.state.fruits} {...props} />
            )}
          />
          <Route
            path="/fruits/:fruitId"
            exact
            render={props => (
              <FruitDetails
                createFruit={this.createFruit}
                saveFruit={this.saveFruit}
                deleteFruit={this.deleteFruit}
                fruits={this.state.fruits}
                units={this.state.units}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

// withRouter injects all the router functionality
// into a Component that doesn't have a specific Route
// e.g. we can this.props.history.push in App.js by
// wrapping it around withRouter
export default withRouter(App);
