import React, { Component } from "react";

export default class App extends Component {
  state = {
    currentPage: "home"
  };

  // const newString = "hello"
  // newString = "world"
  // const newArray = [1,2,3]
  // newArray.push(4)
  changePage = (event, page) => {
    event.preventDefault();
    this.setState({ currentPage: page });
  };

  render() {
    let component = <Home />;
    if (this.state.currentPage === "blog") {
      component = <Blog />;
    } else if (this.state.currentPage === "about") {
      component = <About />;
    } else if (this.state.currentPage === "contact") {
      component = <Contact />;
    }

    return (
      <div>
        <h1>My Website</h1>
        <nav>
          <a href="#home" onClick={event => this.changePage(event, "home")}>
            Home
          </a>{" "}
          |
          <a href="#blog" onClick={event => this.changePage(event, "blog")}>
            Blog
          </a>{" "}
          |
          <a href="#about" onClick={event => this.changePage(event, "about")}>
            About
          </a>{" "}
          |
          <a
            href="#contact"
            onClick={event => this.changePage(event, "contact")}
          >
            Contact Us
          </a>
        </nav>
        <div>{component}</div>
      </div>
    );
  }
}
function Home() {
  return (
    <>
      <h2>Home Page</h2>
      <p>This is my application's home page</p>
    </>
  );
}
function Blog() {
  return (
    <>
      <h2>Blog Page</h2>
      <p>This is my application's blog page</p>
    </>
  );
}

function About() {
  return (
    <>
      <h2>About Page</h2>
      <p>This is my application's about page</p>
    </>
  );
}

function Contact() {
  return (
    <>
      <h2>Contact Page</h2>
      <p>This is my application's contact page</p>
    </>
  );
}
