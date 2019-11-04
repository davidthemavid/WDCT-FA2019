import React from "react";
import { Link } from "react-router-dom";

export default function Blogs(props) {
  const blogList = props.blogs.map(blogPost => (
    <div>
      <Link to={`/blogs/${blogPost.id}`}>
        <h3>{blogPost.title}</h3>
      </Link>
    </div>
  ));
  return <div>{blogList}</div>;
}
