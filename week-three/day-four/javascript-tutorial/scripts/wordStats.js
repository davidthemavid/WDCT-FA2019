/**
 * input:  array of words
 * output:  1 - number of words
 *          2 - count of # of words with less than 5 characters
 *          3 - count of # of words with more than 5 characters
 *          4 - count of # of words with exactly 5 characters
 */

function wordsStat(words) {
  // create some counters for storing intermediate count
  var wordsStat = {
    lengthOfArray: words.length,
    greaterThanFiveCount: 0,
    lessThanFiveCount: 0,
    equalToFiveCount: 0
  };
  // loop through words array
  for (i = 0; i < words.length; i++) {
    if (words[i].length < 5) {
      wordsStat.lessThanFiveCount++;
    } else if (words[i].length === 5) {
      wordsStat.equalToFiveCount++;
    } else if (words[i].length > 5) {
      wordsStat.greaterThanFiveCount++;
    }
  }
  return wordsStat;
}

console.log(
  wordsStat(["abc", "hello", "brainstation", "noor", "javascript", "css"])
);
