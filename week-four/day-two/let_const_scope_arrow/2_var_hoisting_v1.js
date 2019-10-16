var variable = 20;
function one() {
  // var variable;
  // whenever you try to access a variable before DECLARATION, hoisting happens.
  // if no DECLARATION found, use global scope
  console.log("Inside One Before: ", variable); // 20
  var variable = 40;
  console.log("Inside One After: ", variable); // 40
  two();
}

function two() {
  // var variable;
  console.log("Inside Two Before: ", variable); // 20
  var variable = 30;

  console.log("Inside Two After: ", variable); // 30
  if (true) {
    console.log("Inside If Before: ", variable); // 30
    var variable = 40;

    console.log("Inside If After: ", variable); // 40
  }
}

one();
