const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.use(express.json());

// secret key
const JWTSecretKey = "BrainStation";
// mimic user that could be fetched from a database
const user = {
  email: "nkhorasi@brainstation.io",
  name: "Noor",
  password: bcrypt.hashSync("123456", 10)
};

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (user.email === email && bcrypt.compareSync(password, user.password)) {
    // this user is a valid user
    jwt.sign(
      {
        role: "Project Lead",
        project: "VAN-CollabProject",
        name: user.name
      },
      JWTSecretKey,
      (err, token) => {
        console.log(token);
        res.json({ token: token });
      }
    );
  } else {
    console.log("Invalid User");
    res.status(403).send("Invalid User");
  }
});

app.get("/private", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, JWTSecretKey, (err, decoded) => {
    if (err) {
      res.send("Invalid Token");
    } else {
      res.send(decoded);
    }
  });
});
app.listen(8081, () => console.log("Listening on port 8081"));
