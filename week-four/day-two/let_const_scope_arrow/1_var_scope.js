var variable = 20;

function one() {
  var variable = 30;
  console.log("Inside One: ", variable); // 30
  two();
}

function two() {
  console.log("Inside Two: ", variable); // 20
  if (true) {
    console.log("Inside If: ", variable); // 20
  }
}

one();
