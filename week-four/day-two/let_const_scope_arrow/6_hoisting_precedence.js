//  if you declare a variable and assign it a value, it takes
// precedence over the function declaration

// var double = 22;

// function double(num) {
//   return num * 2;
// }

// console.log(typeof double);

//  if you declare a variable with no assignment, it has less precedence
//  over function declaration
var double;

function double(num) {
  return num * 2;
}

console.log(typeof double);
