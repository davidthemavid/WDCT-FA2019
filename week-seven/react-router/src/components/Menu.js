import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <header>
      <Link to="/">Home</Link> |<Link to="/about">About</Link> |
      <Link to="/contact">Contact</Link> |<Link to="/courses">Courses</Link> |
      <Link to="/blogs">Blogs</Link>
    </header>
  );
}
