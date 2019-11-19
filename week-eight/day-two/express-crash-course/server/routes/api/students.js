const express = require("express");

const router = express.Router();
const fileName = __dirname + "/../../model/students.json";
let students = require(fileName);
const helper = require("../../helper/helper");

//  Get all students
router.get("/", (req, res) => {
  res.json(students);
});

//  Get student with :id
// req.params.id -> when url is /api/students/123
// req.params.id
// req.query.id -> when url has ? in it.
// e.g /students?sort=desc&color=blue -> req.query.sort, req.query.color
// req.body.id -> data is coming from post request
router.get("/:id", (req, res) => {
  // res.send(req.params.id);
  const found = students.some(student => student.id === req.params.id);
  if (found) {
    res.json(students.filter(student => student.id === req.params.id));
  } else {
    res
      .status(400)
      .json({ errorMessage: `Student with ID:${req.params.id} not found` });
  }
});

//  Create new Student
router.post("/", (req, res) => {
  const newStudent = {
    id: helper.getNewId(),
    name: req.body.name,
    email: req.body.email,
    course: req.body.course
  };
  if (!newStudent.name || !newStudent.email || !newStudent.course) {
    return res.status(400).json({
      errorMessage: "Please provide name, email and course for new student"
    });
  }
  students.push(newStudent);
  // console.log(JSON.stringify(students));
  helper.writeJSONFile(fileName, students);
  res.json(students);
});

// update student with :id
router.put("/:id", (req, res) => {
  const found = students.some(student => student.id === req.params.id);
  if (found) {
    students.forEach(student => {
      if (student.id === req.params.id) {
        student.name = req.body.name ? req.body.name : student.name;
        student.course = req.body.course ? req.body.course : student.course;
        student.email = req.body.email ? req.body.email : student.email;
      }
    });
    helper.writeJSONFile(fileName, students);
    res.json({ msg: "Student Updated", students: students });
  } else {
    res
      .status(404)
      .json({ errorMessage: `Student with ID: ${req.params.id} not found` });
  }
});

router.delete("/:id", (req, res) => {
  const found = students.some(student => student.id === req.params.id);
  if (found) {
    const studentsAfterDeletion = students.filter(
      student => student.id !== req.params.id
    );
    helper.writeJSONFile(fileName, studentsAfterDeletion);
    res.json({
      msg: `Student with ID: ${req.params.id} Deleted`,
      students: studentsAfterDeletion
    });
  } else {
    res
      .status(404)
      .json({ errorMessage: `Student with ID: ${req.params.id} not found` });
  }
});
module.exports = router;
