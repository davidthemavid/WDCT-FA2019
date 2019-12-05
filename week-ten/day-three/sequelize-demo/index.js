//  import express
const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const cors = require("cors");
const mysql = require("mysql2");
const config = require("./config/config.json");

let connection;

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

//make connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(config.development);
}

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
connection.connect();
// Export connection for our ORM to use.
module.exports = connection;
