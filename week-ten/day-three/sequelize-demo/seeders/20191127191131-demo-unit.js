"use strict";
const uuidv4 = require("uuid/v4");
const units = [
  { name: "Piece" },
  { name: "Kilogram" },
  { name: "Gram" },
  { name: "Pound" },
  { name: "Ounce" },
  { name: "Bunch" },
  { name: "Container" }
];
const unitsWithID = units.map(unit => {
  unit.id = uuidv4();
  return unit;
});
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Units", unitsWithID, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Units", null, {});
  }
};
