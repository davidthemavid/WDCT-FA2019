function fifty(numberOne, numberTwo) {
  if (numberOne === 50 || numberTwo === 50 || numberOne + numberTwo === 50) {
    return true;
  } else {
    return false;
  }
}

console.log("50, 30: ", fifty(50, 30)); // true
console.log("40, 20: ", fifty(40, 20)); // false
console.log("40, 10: ", fifty(40, 10)); // true
console.log("20, 20: ", fifty(20, 20)); // false
