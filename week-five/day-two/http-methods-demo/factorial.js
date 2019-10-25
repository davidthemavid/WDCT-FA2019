// 5! = 5 * 4 * 3 * 2 * 1
// 0! = 1 -> Precondition
// 1! = 1

function factorialUsingForLoop(num) {
  let factorial = 1;
  if (num === 0 || num === 1) {
    return 1;
  }
  for (let i = num; i >= 1; i--) {
    factorial *= i; // factorial = factorial * i
  }
  return factorial;
}
console.log(factorialUsingForLoop(5));

function functionUsingWhileLoop(num) {
  let result = num;
  if (num === 0 || num === 1) {
    return 1;
  }
  while (num > 1) {
    result = result * (num - 1);
    num--;
  }
  console.log(result);
  return result;
}

functionUsingWhileLoop(5);

// recursion - function calling itself within function definition
function factorialUsingRecursion(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorialUsingRecursion(num - 1);
  }
}
console.log(factorialUsingRecursion(5));
