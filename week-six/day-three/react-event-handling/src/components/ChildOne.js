import React from "react";

// functional components in react returns
// some html code
function ChildOne(props) {
  return (
    <form onSubmit={props.onClick}>
      <h1>Child One</h1>
      <input type="text" name="totalClicks" value="0" disabled />
      <button>Click Me</button>
    </form>
  );
}

export default ChildOne;
