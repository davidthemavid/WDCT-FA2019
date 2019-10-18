function pythagorean(sideOne, sideTwo) {
  return Math.sqrt(Math.pow(sideOne, 2) + Math.pow(sideTwo, 2));
}

// console.log(pythagorean(4, 3));

function avgOfNumbers(inputArray) {
  let sum = 0;
  let count = inputArray.length;

  for (let i = 0; i < inputArray.length; i++) {
    sum = sum + inputArray[i];
  }
  return sum / count;
}

// console.log(avgOfNumbers([1, 2, 3, 4, 5]));

// use for loop
// find item in inputArray
// if item is found, return the position of that item
// if not found, return 'not found'
function search(inputArray, item) {
  //   for (let i = 0; i < inputArray.length; i++) {
  if (inputArray.indexOf(item) === -1) {
    return "not found";
  } else {
    return inputArray.indexOf(item);
  }
  //   }
}
// let array = ["abc", 12, "hello", true, 45];
// console.log(search(array, true));
// console.log(search(array, "brainstation"));

let array = [2, 3, 4, 1, 2, 8, 1, 1, 2, 9, 3, 5, 3, 4, 8, 4];
function removeDuplicates(inputArray) {
  let output = [];
  for (value of array) {
    countObject[value] = (countObject[value] || 0) + 1;
  }
  for (key in countObject) {
    if (countObject[key] === 1) {
      output.push(key);
    }
  }
  return output;
}

// n * n = n^2 = 1000000
// 2 * n = 2n = 2000
console.log(removeDuplicates(array));
