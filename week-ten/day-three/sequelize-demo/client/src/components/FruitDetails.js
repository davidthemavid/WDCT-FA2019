import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Edit from "../assets/icons/edit.svg";
import Delete from "../assets/icons/delete.svg";
import Save from "../assets/icons/save.svg";

export default class FruitDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      toggleToSave: false,
      currentFruit: { name: "", inventory: 0, id: "" },
      selectedUnit: "Kilogram"
    };
    this.fruitNameRef = React.createRef();
    this.fruitInventoryRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.match.params.fruitId !== "new") {
      if (this.props.fruits.length > 0) {
        let fruitFound = this.props.fruits.find(
          fruit => String(fruit.id) === this.props.match.params.fruitId
        );
        this.setState({
          currentFruit: fruitFound
        });
        localStorage.setItem("currentFruit", JSON.stringify(fruitFound));
      } else {
        this.setState({
          currentFruit: JSON.parse(localStorage.getItem("currentFruit"))
        });
      }
    }
  }
  editFruit = event => {
    event.preventDefault();
    this.setState({
      editMode: true,
      toggleToSave: !this.state.toggleToSave
    });
  };

  saveFruit = event => {
    this.setState(
      {
        editMode: false,
        toggleToSave: !this.state.toggleToSave
      },
      this.props.saveFruit(
        event,
        this.fruitNameRef.current.value,
        this.fruitInventoryRef.current.value,
        this.props.match.params.fruitId
      )
    );
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      currentFruit: {
        ...this.state.currentFruit,
        [event.target.name]: event.target.value
      }
    });
  };

  handleUnitSelection = event => {
    event.preventDefault();
    this.setState({ selectedUnit: event.target.value });
  };

  render() {
    const { match, units } = this.props;
    let fruitToRender = this.state.currentFruit;

    const selectOptions = units.map(unit => {
      return <option value={unit.id}>{unit.name}</option>;
    });
    return match.params.fruitId === "new" ? (
      <form onSubmit={e => this.props.createFruit(e)}>
        <label htmlFor="fruitName">Fruit Name:</label>
        <input className="textInput" type="text" name="name" id="name" />
        <label htmlFor="fruitInventory">Fruit Inventory:</label>
        <input
          className="textInput"
          type="text"
          name="inventory"
          id="inventory"
        />
        <label htmlFor="unitSelection">Select Unit:</label>
        <select
          value={this.state.selectedUnit}
          onChange={this.handleUnitSelection}
          name="unitSelection"
        >
          {selectOptions}
        </select>
        <button>Create New Fruit</button>
      </form>
    ) : (
      <div>
        <div>
          {this.state.editMode ? (
            <div>
              <input
                className="textInput"
                type="text"
                name="name"
                id="name"
                ref={this.fruitNameRef}
                onChange={this.handleChange}
                value={fruitToRender.name}
              />
              <input
                className="textInput"
                type="text"
                name="inventory"
                id="inventory"
                ref={this.fruitInventoryRef}
                onChange={this.handleChange}
                value={fruitToRender.inventory}
              />
            </div>
          ) : (
            <div>
              <input
                type="text"
                className="textInput textInput--dark"
                name="name"
                disabled
                value={fruitToRender.name}
              />
              <input
                type="text"
                className="textInput textInput--dark"
                name="inventory"
                disabled
                value={fruitToRender.inventory}
              />
            </div>
          )}
          {this.state.toggleToSave ? (
            <img
              className="img-button"
              src={Save}
              onClick={this.saveFruit}
              alt="save-button"
            />
          ) : (
            <img
              className="img-button"
              src={Edit}
              alt="edit-button"
              onClick={this.editFruit}
            />
          )}
          <img
            className="img-button"
            src={Delete}
            id={fruitToRender.id}
            onClick={this.props.deleteFruit}
            alt="delete-button"
          />
        </div>
        <NavLink to="/fruits">
          <button className="back-button">&larr;</button>
        </NavLink>
      </div>
    );
  }
}
