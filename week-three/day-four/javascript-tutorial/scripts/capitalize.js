/**
 * input is a string
 *
 * output should be a string with first character of
 * each word capitalized
 *
 * e.g. welcome to brainstation
 * output: Welcome To Brainstation
 *
 * HINT: split() -> "create an array"
 *       charAt(), toUpperCase() & slice() -> "use this methods"
 *       join() -> "change it back to string"
 */

function capitalize(inputStr) {
  var capitalizedStr = "";
  var tempArray = [];
  var arrayOfWords = inputStr.split(" ");
  //   console.log(arrayOfWords);
  for (var i = 0; i < arrayOfWords.length; i++) {
    tempArray.push(
      arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1)
    );
  }
  return tempArray.join(" ");
}
var capitalizedStr = capitalize("hello. welcome to brainstation");
console.log(capitalizedStr);
