const events = require("events");
const util = require("util");

// // function declaration
// function Student(name) {
//     this.name = name;
// }

// function expression
let Student = function(name) {
  this.name = name;
};
// Student has all capabilities of EventEmitter
util.inherits(Student, events.EventEmitter);

let alex = new Student("alex");
let dave = new Student("dave");

let Students = [alex, dave];

// binding event "presents" to each student
// listening for an event
Students.forEach(function(Student) {
  Student.on("presents", function(project) {
    console.log(Student.name + " is presenting project: " + project);
  });
});

// emitting/calling the actual event
alex.emit("presents", "IEX Trading");
dave.emit("presents", "SpaceX Explorer");
