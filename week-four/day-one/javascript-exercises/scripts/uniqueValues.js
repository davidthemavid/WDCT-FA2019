function unique(inputArray) {
  var tempArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    if (tempArray.indexOf(inputArray[i]) === -1) {
      tempArray.push(inputArray[i]);
    }
  }
  return tempArray;
}

console.log(unique([1, 3, 4, 6, 7, 2, 1, 5, 7, 10, 3]));
