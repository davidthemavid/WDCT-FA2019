//  zero args function expression
// var greet = function() {
//   console.log("hello world");
// };
// greet();

// //  zero args arrow function
var greet = () => {
  console.log("hello world from arrow function");
};
greet();

//  two args function expression
var sum = function(num1, num2) {
  console.log("Sum: ", num1 + num2);
};
sum(2, 3);

//  two args arrow function
var sum = (num1, num2) => {
  console.log("Sum(Arrow Fn): ", num1 + num2);
};
sum(2, 3);
