/**
 *
 * @param {the number to test for odd/even} num
 */
function oddOrEven(num) {
  if (num === 0) {
    console.log(num, ":Neither Even Nor Odd");
  } else if (num % 2 === 0) {
    console.log(num, ":Even Number");
  } else if (num % 2 !== 0) {
    console.log(num, ":Odd Number");
  }
}

var testData = [4, 3, 7, 8, 9, 10, 0, 1];
for (var i = 0; i < testData.length; i++) {
  oddOrEven(testData[i]);
}
