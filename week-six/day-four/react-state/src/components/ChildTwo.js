import React from "react";

// functional components in react returns
// some html code
function ChildTwo(props) {
  const { count, onClick } = props; // object destructuring
  return (
    <form id="childTwoCount" onSubmit={onClick}>
      <h1>Child Two</h1>
      <input type="text" value={count} disabled />
      <button>Click Me</button>
    </form>
  );
}

export default ChildTwo;
