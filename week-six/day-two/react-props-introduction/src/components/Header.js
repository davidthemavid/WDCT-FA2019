import React from "react";

export default function Header(props) {
  const links = props.headerInfo.links.map((link, index) => {
    return (
      <li key={index} className="header__menu-item">
        <a className="header__menu-item-link" href={"#" + link.toLowerCase()}>
          {link}
        </a>
      </li>
    );
  });
  function alertSomething(event) {
    props.onClick(event);
  }
  return (
    <header className="header">
      <span
        onClick={event => alertSomething(event)}
        className="header__company-name"
      >
        {props.headerInfo.companyName}
      </span>
      <nav className="header__navigation">
        <ul className="header__menu">{links}</ul>
      </nav>
    </header>
  );
}
