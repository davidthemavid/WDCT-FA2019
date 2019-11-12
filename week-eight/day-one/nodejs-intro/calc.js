let add = (numOne, numTwo) => {
  return `Addition is: ${numOne + numTwo}`;
};

let subtract = (numOne, numTwo) => {
  return `Subtraction is: ${numOne - numTwo}`;
};

let multiply = (numOne, numTwo) => {
  return `Multiplication is: ${numOne * numTwo}`;
};

let divide = (numOne, numTwo) => {
  return `Division is: ${numOne / numTwo}`;
};

const PI = 3.14;
const EXPONENT = 2.718;

// module.exports.add = add;
// module.exports.subtract = subtract;
// module.exports.multiply = multiply;
// module.exports.divide = divide;
// module.exports.PI = PI;
// module.exports.EXPONENT = EXPONENT;

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  PI,
  EXPONENT
};
