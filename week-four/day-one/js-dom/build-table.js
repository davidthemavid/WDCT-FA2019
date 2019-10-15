var students = [
  { name: "Noor", id: 345, course: "Web Dev" },
  { name: "Anita", id: 245, course: "UX" },
  { name: "Parvaneh", id: 145, course: "Data Science" }
];

// function declaration
function createTable(table, students) {
  for (var student of students) {
    // console.log(student);
    var row = table.insertRow();
    for (key in student) {
      var cell = row.insertCell();
      var text = document.createTextNode(student[key]);
      cell.appendChild(text);
    }
  }
}

function createTableHead(table, students) {
  var tHead = table.createTHead();
  var row = tHead.insertRow();
  for (var student of students) {
    var th = document.createElement("th");
    var text = document.createTextNode(student);
    th.appendChild(text);
    row.appendChild(th);
  }
}
var table = document.querySelector("table");
console.log(table);
var studentKeys = Object.keys(students[0]);

// function invocation
createTable(table, students); // actually pass the students array
createTableHead(table, studentKeys);
