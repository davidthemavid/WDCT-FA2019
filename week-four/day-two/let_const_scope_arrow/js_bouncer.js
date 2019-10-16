// var privateKey = '12345';

function falsyBouncer(inputArray) {
  var result = [];
  // loop through inputArray using for ... of
  for (value of inputArray) {
    // negate the value and if it is falsy,
    // push it to result
    if (!value) {
      result.push(value);
    }
  }
  return result;
}

// console.log(
//   falsyBouncer([[], {}, 1, 0, "", "NaN", "hello", NaN, undefined, false, 32])
// );

// function add(num1, num2) {
//   return num1 + num2;
// }

// In order to create arrow function,
// 1. remove function keyword
// 2. add => (fat arrow) between () and {
var add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(1, 3));
document.getElementById;
// setTimeout(console.log(add(1, 2)), 3000);
