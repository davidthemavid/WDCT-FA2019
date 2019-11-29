import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Edit from "../assets/icons/edit.svg";
import Delete from "../assets/icons/delete.svg";
import Save from "../assets/icons/save.svg";

export default class UnitDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false, // for Edit flow
      toggleToSave: false, // to Save flow
      currentUnit: { name: "", id: "" } // placeholder for unit currently viewed
    };
    // this ref will allow to edit and save the unit
    // without leaving the component
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // if not creating a new unit
    if (this.props.match.params.unitId !== "new") {
      // need to check as props won't persist on page refresh
      if (this.props.units.length > 0) {
        // find the unit using the unit id from url
        let unitFound = this.props.units.find(
          unit => String(unit.id) === this.props.match.params.unitId
        );
        this.setState({
          currentUnit: unitFound
        });
        // save the unit found to localStorage so that it can be used
        // when props are not passed on page refresh
        localStorage.setItem("currentUnit", JSON.stringify(unitFound));
      } else {
        // get the current unit being viewed from localStorage
        // this.props.units will be empty if we refresh the page
        this.setState({
          currentUnit: JSON.parse(localStorage.getItem("currentUnit"))
        });
      }
    }
  }
  editUnit = event => {
    event.preventDefault();
    this.setState({
      editMode: true,
      toggleToSave: !this.state.toggleToSave
    });
  };

  saveUnit = event => {
    this.setState(
      {
        editMode: false,
        toggleToSave: !this.state.toggleToSave
      },
      this.props.saveUnit(
        event,
        this.inputRef.current.value,
        this.props.match.params.unitId
      )
    );
  };

  handleChange = event => {
    event.preventDefault();

    // using same event handler for handling
    // changes to all inputs within the view
    this.setState({
      currentUnit: {
        ...this.state.currentUnit,
        [event.target.name]: event.target.value
      }
    });
  };
  render() {
    const { units, match } = this.props;
    // state will have currentUnit either fetched by
    // using unit id from url or by fetching it from localStorage
    let unitToRender = this.state.currentUnit;

    return match.params.unitId === "new" ? (
      <form onSubmit={e => this.props.createUnit(e)}>
        <label htmlFor="name">Unit Name: </label>
        <input className="textInput" type="text" name="name" id="name" />
        <button>Create New Unit</button>
      </form>
    ) : (
      <div>
        <div>
          {this.state.editMode ? (
            <input
              className="textInput"
              type="text"
              name="name"
              id="name"
              ref={this.inputRef}
              onChange={this.handleChange}
              value={unitToRender.name}
            />
          ) : (
            <input
              type="text"
              className="textInput textInput--dark"
              name="name"
              disabled
              value={unitToRender.name}
            />
          )}
          {this.state.toggleToSave ? (
            <img
              className="img-button"
              src={Save}
              onClick={this.saveUnit}
              alt="save-button"
            />
          ) : (
            <img
              className="img-button"
              src={Edit}
              alt="edit-button"
              onClick={this.editUnit}
            />
          )}
          <img
            className="img-button"
            src={Delete}
            id={unitToRender.id}
            onClick={this.props.deleteUnit}
            alt="delete-button"
          />
        </div>
        <NavLink to="/units">
          <button className="back-button">&larr;</button>
        </NavLink>
      </div>
    );
  }
}
