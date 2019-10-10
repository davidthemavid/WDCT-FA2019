/**
 *              *
 *              **
 *              ***
 *              ****
 *              *****
 */

/**
 * creates a pattern using '*' symbol for x numOfLines
 * @param {*} numOfLines  - number of lines to be printed
 */
function createPattern(numOfLines) {
  for (i = 1; i <= numOfLines; i++) {
    console.log("*".repeat(i));
  }
}

createPattern(5);
