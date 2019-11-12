const calc = require("./calc");
const axios = require("axios");
const fs = require("fs");

// console.log(calc.add(2, 3));
// console.log(calc.multiply(calc.PI, 3));

// gives access to all command line arguments

const url = `https://pokeapi.co/api/v2/type/${process.argv[2]}`;
console.log(process.argv);

axios.get(url).then(response => {
  fs.writeFile(
    `${process.argv[2]}-pokemon.json`,
    JSON.stringify(response.data),
    err => {
      if (err) console.log(err);
      console.log("file has been saved");
    }
  );
});
