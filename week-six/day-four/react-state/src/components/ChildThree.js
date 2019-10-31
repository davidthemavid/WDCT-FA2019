import React from "react";

// functional components in react returns
// some html code
function ChildThree(props) {
  return (
    <form id="childThreeCount" onSubmit={props.onClick}>
      <h1>Child Three</h1>
      <input type="text" value={props.count} disabled />
      <button>Click Me</button>
    </form>
  );
}

export default ChildThree;
