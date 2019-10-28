import React from "react";

export default function Header() {
  return (
    <header className="header">
      <span className="header__company-name">BrainStation 2.0</span>
      <nav className="header__navigation">
        <ul className="header__menu">
          <li className="header__menu-item">
            <a className="header__menu-item-link" href="#">
              Home
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-item-link" href="#">
              About
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-item-link" href="#">
              Courses
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-item-link" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
