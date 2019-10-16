var variable = 20; //  Global Scope // 40

// global scope can be exploited within functions
// use const instead

// var is always FUNCTION SCOPED
function one() {
  console.log("Inside One Before: ", variable); // 20
  variable = 40;
  console.log("Inside One After: ", variable); // 40
  two();
}

function two() {
  console.log("Inside Two Before: ", variable); // 40
  variable = 30;
  console.log("Inside Two After: ", variable); // 30
  if (true) {
    console.log("Inside If Before: ", variable); // 30
    variable = 40;
    console.log("Inside If After: ", variable); // 40
  }
}

one();
console.log("Final Value: ", variable); // 40
