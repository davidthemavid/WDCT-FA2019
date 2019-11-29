import React from "react";
import WeighScale from "../assets/icons/scale.svg";
import Strawberry from "../assets/icons/strawberry.svg";
import { Link } from "react-router-dom";

/**
 *  Basic HomePage with a Link to Individual UnitsPage and FruitsPage
 */
export default function HomePage() {
  return (
    <div className="icons">
      <div className="icon">
        <Link to="/units">
          <img className="icon__logo" src={WeighScale} alt="weighing scale" />
        </Link>
        <h4>Units</h4>
      </div>
      <div className="icon">
        <Link to="/fruits">
          <img className="icon__logo" src={Strawberry} alt="strawberry fruit" />
        </Link>
        <h4>Fruits</h4>
      </div>
    </div>
  );
}
