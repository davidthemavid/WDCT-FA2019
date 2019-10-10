/**
 * this function will count vowels in a string
 * and returns count of vowels.
 * ASSUMPTION: string of lowercase characters
 * @param {string of characters} inputString
 */
function countVowels(inputString) {
  // variable for storing intermediate counts
  var vowelsCount = 0;

  for (var i = 0; i < inputString.length; i++) {
    if (
      inputString.charAt(i) === "a" ||
      inputString.charAt(i) === "e" ||
      inputString.charAt(i) === "i" ||
      inputString.charAt(i) === "o" ||
      inputString.charAt(i) === "u"
    ) {
      vowelsCount = vowelsCount + 1;
    }
  }
  return vowelsCount;
}

console.log("Test 1: ", countVowels("helloworld"));
console.log("Test 2: ", countVowels("xyzmnp"));
console.log("Test 3: ", countVowels("abc123effgoie"));
