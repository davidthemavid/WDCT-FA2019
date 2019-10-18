const students = [
  { name: "Noor", course: "Web Dev", startYear: "2019" },
  { name: "ABC", course: "UX", startYear: "1990" },
  { name: "xyz", course: "Web Dev", startYear: "2009" },
  { name: "mnop", course: "DS", startYear: "2001" },
  { name: "xwlos", course: "UX", startYear: "2006" },
  { name: "ouweorw", course: "DS", startYear: "2019" }
];

for (let i = 0; i < students.length; i++) {
  //   console.log(students[i]);
}

// forEach
// students.forEach(student => {
//   console.log(student);
// });

// let webDevStudents = [];
// for (let i = 0; i < students.length; i++) {
//   if (students[i].course === "Web Dev") {
//     webDevStudents.push(students[i]);
//   }
// }

// filter
// let webDevStudents = students.filter(function(student) {
//   return student.course === "Web Dev";
// });
// console.log(webDevStudents);

// let formattedNames = [];
// for (let i = 0; i < students.length; i++) {
//   formattedNames.push("Name of the Student: " + students[i].name);
// }
// console.log(formattedNames);

// map
// "Name of the Student:" + student.name; -> normal string
// `Name of the Student: ${student.name}`-> templated string
let formattedNames = students.map(function(student) {
  return `Name of the Student: ${student.name}`;
});
// console.log(formattedNames);

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum = sum + ages[i];
  // sum += ages[i]
}
console.log(sum);

// reduce
let sumReduce = ages.reduce(function(sum, age) {
  return sum + age;
});

let sumReduce = ages.reduce((sum, age) => {
  return sum + age;
});
console.log(sumReduce);
