//  import express
const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
var cors = require("cors");

//  initialize express for use
const app = express();

//  cors support
app.use(cors());

//  init middleware
app.use(logger);

//  body parser
app.use(express.json());

//  for form submission
app.use(express.urlencoded({ extended: false }));
//  routes for units
app.use("/api/units", require("./routes/api/unitsController"));
//  routes for fruits
app.use("/api/fruits", require("./routes/api/fruitsController"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
