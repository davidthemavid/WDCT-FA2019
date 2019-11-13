const express = require("express");
const axios = require("axios");
// expressJS instance
const app = express();

const homePageTitle = "Home";
const aboutPageTitle = "About Us";

const page = title => `<html><body><h1>${title}</h1></body></html>`;

// first parameter -> route I am listening on for client request
// second parameter -> function that takes in request & response
app.get("/", (request, response) => {
  response.send(page(homePageTitle));
});

app.get("/about", (request, response) => {
  console.log(request.query);
  response.send(page(aboutPageTitle));
});

app.get("/user", (request, response) => {
  response.json({ user: "Noor" });
});

app.post("/user", (request, response) => {
  response.json({ success: "true" });
});

app.get("/pokemon/:type", (request, response) => {
  console.log(request.params);
  axios
    .get(`https://pokeapi.co/api/v2/type/${request.params.type}`)
    .then(axiosResponse => {
      response.json(axiosResponse.data);
    });
});
app.listen(5000, () => {
  console.log("Listening on port 5000.......");
});
