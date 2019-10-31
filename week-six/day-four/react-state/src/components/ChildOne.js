import React from "react";

// functional components in react returns
// some html code
function ChildOne({ count, onClick }) {
  return (
    <form id="childOneCount" onSubmit={onClick}>
      <h1>Child One</h1>
      <input type="text" value={count} disabled />
      <button>Click Me</button>
    </form>
  );
}

function ChildOne_V1({ count, onClick }) {
  return (
    <form id="childOneCount" onSubmit={onClick}>
      <h1>Child One</h1>
      <input type="text" value={count} disabled />
      <button>Click Me</button>
    </form>
  );
}

//named exports
export { ChildOne, ChildOne_V1 };
