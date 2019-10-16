//  using the function even before defining it - hoisting magic
//  hoisted because it is a function declaration

// let hoistedGreet = function() {
//   console.log("I will be printed if function is hoisted successfully");
// };
// function invocation

// only declarations gets hoisted for both
// variables and functions and not the assignment
// var hoistedGreet;
// hoistedGreet();

//FUNCTION DECLARATION
// function hoistedGreet() {
//   console.log("I will be printed if function is hoisted successfully");
// }

//  not hoisted because it's a function expression
// var unhoistedGreet_v1;
// unhoistedGreet_v1();

//  FUNCTION EXPRESSION
// var unhoistedGreet_v1 = function() {
//   console.log("I will be printed if function is hoisted successfully");
// };

// //  maybe if I name my function, it will get hoisted?
// //  not hoisted because it's a function expression
unhoistedGreet_v2();
// unhoistedFunc();
var unhoistedGreet_v2 = function unhoistedFunc() {
  console.log("I will be printed if function is hoisted successfully");
};
