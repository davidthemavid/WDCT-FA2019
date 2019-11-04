import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Courses from "./components/Courses";
import BlogPost from "./components/BlogPost";
import Blogs from "./components/Blogs";

function App() {
  const blogs = [
    {
      id: "blogpost-1",
      title: "Blog Post One",
      author: "Noor",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, numquam a doloremque animi illo est pariatur? Neque natus itaque, architecto impedit magnam omnis molestias dignissimos, temporibus quaerat asperiores iusto vel."
    },
    {
      id: "blogpost-2",
      title: "Blog Post Two",
      author: "Anita",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, numquam a doloremque animi illo est pariatur? Neque natus itaque, architecto impedit magnam omnis molestias dignissimos, temporibus quaerat asperiores iusto vel."
    },
    {
      id: "blogpost-3",
      title: "Blog Post Three",
      author: "Parvaneh",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, numquam a doloremque animi illo est pariatur? Neque natus itaque, architecto impedit magnam omnis molestias dignissimos, temporibus quaerat asperiores iusto vel."
    }
  ];
  // routes using component prop and using render Props
  return (
    <div className="App">
      <h1>React Router Demo</h1>
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/courses" component={Courses} />
        <Route
          path="/blogs"
          exact
          render={() => (
            <div>
              <h2>Blogs</h2>
              <Blogs blogs={blogs} />
            </div>
          )}
        />
        <Route
          path="/blogs/:blogId"
          render={props => {
            console.log(props);
            const blogPost = blogs.find(
              blog => blog.id === props.match.params.blogId
            );
            console.log(blogPost);
            return (
              <BlogPost title={blogPost.title} content={blogPost.content} />
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
