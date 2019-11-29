import React from "react";
import { NavLink, Link } from "react-router-dom";

/**
 *
 * @param {Props passed through App.js} props - expecting fruits Array
 */
export default function FruitsPage(props) {
  const { fruits } = props;
  const fruitsList = fruits.map(fruit => {
    return (
      <Link key={fruit.id} to={"/fruits/" + fruit.id}>
        <p className="tag">{fruit.name}</p>
      </Link>
    );
  });
  fruitsList.unshift(
    <Link key="add-fruit" to="/fruits/new">
      <p className="tag tag-plus">&oplus;</p>
    </Link>
  );
  return (
    <div className="tag-list">
      {fruitsList}
      <NavLink to="/">
        <button className="back-button">&larr;</button>
      </NavLink>
    </div>
  );
}
