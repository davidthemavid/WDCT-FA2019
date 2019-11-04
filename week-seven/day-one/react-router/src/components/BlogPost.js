import React from "react";

export default function BlogPost(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}
