var arrayOne = [1, 2, "a", "b"];
var arrayTwo = [1, 2, "a", "b"];

//  true
// console.log("arrayOne == arrayTwo?", arrayOne == arrayTwo);
//  true
// console.log("arrayOne === arrayTwo?(strict)", arrayOne === arrayTwo);

var studentOne = {
  firstName: "Noor",
  course: "Web Dev"
};
var studentTwo = {
  firstName: "Noor",
  course: "Web Dev"
};

//  true
//console.log("studentOne == studentTwo?", studentOne == studentTwo);

//  false
//console.log("studentOne === studentTwo?(strict)", studentOne === studentTwo);

var arrayThree = arrayOne;
var studentThree = studentOne;

//  false
console.log("arrayOne == arrayThree?", arrayOne == arrayThree);
//  true
console.log("arrayOne === arrayThree?(strict)", arrayOne === arrayThree);

//  false
console.log("studentOne == studentThree?", studentOne == studentThree);

//  true
console.log(
  "studentOne === studentThree?(strict)",
  studentOne === studentThree
);
