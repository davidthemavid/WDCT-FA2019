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
    id: helper.getNewId(students),
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

//  Update student with :id
router.put("/:id", (req, res) => {
  //   res.send(req.params.id);
  const found = students.some(student => student.id === req.params.id);
  if (found) {
    students.forEach(student => {
      if (student.id === req.params.id) {
        student.name = req.body.name ? req.body.name : student.name;
        student.email = req.body.email ? req.body.email : student.email;
      }
    });
    helper.writeJSONFile(fileName, students);
    res.json({ msg: "Student updated", students: students });
  } else {
    res
      .status(400)
      .json({ errorMessage: `Student with ID: ${req.params.id} not found` });
  }
});

//  Delete student with :id
router.delete("/:id", (req, res) => {
  //   res.send(req.params.id);
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
      .status(400)
      .json({ errorMessage: `Student with ID: ${req.params.id} not found` });
  }
});

module.exports = router;
