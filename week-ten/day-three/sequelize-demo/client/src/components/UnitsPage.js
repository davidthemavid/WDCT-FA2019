import React from "react";
import { NavLink, Link } from "react-router-dom";

/**
 *
 * @param {Props passed through App.js} props - expecting units Array
 */
export default function UnitsPage(props) {
  const { units } = props;
  const unitsList = units.map(unit => {
    return (
      <Link key={unit.id} to={"/units/" + unit.id}>
        <p className="tag">{unit.name}</p>
      </Link>
    );
  });
  unitsList.unshift(
    <Link key="add-unit" to="/units/new">
      <p className="tag tag-plus">&oplus;</p>
    </Link>
  );
  return (
    <div className="tag-list">
      {unitsList}
      <NavLink to="/">
        <button className="back-button">&larr;</button>
      </NavLink>
    </div>
  );
}
