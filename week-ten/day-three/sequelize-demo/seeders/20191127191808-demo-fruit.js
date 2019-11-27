"use strict";
const uuidv4 = require("uuid/v4");
const fruitUnitMapping = [
  { unit: "Piece", fruits: ["Apple", "Watermelon"] },
  { unit: "Kilogram", fruits: ["Orange"] },
  { unit: "Gram", fruits: [] },
  { unit: "Pound", fruits: [] },
  { unit: "Ounce", fruits: [] },
  { unit: "Bunch", fruits: ["Banana", "Grapes"] },
  { unit: "Container", fruits: ["Strawberry"] }
];
const { Unit, Fruit } = require("../models/index");
const fruitsInventory = [
  {
    name: "Apple",
    inventory: 10
  },
  {
    name: "Orange",
    inventory: 5
  },
  {
    name: "Banana",
    inventory: 20
  },
  {
    name: "Watermelon",
    inventory: 10
  },
  {
    name: "Grapes",
    inventory: 15
  },
  {
    name: "Strawberry",
    inventory: 12
  }
];
const fruitsWithID = fruitsInventory.map(fruit => {
  fruit.id = uuidv4();
  return fruit;
});
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert("Fruits", fruitsInventory).then(() => {
        fruitUnitMapping.forEach(mapping => {
          if (mapping.fruits.length > 0) {
            Unit.findOne({
              where: {
                name: mapping.unit
              }
            }).then(unitModel => {
              mapping.fruits.forEach(fruit => {
                Fruit.findOne({
                  where: {
                    name: fruit
                  }
                }).then(fruitModel => {
                  // magic methods in sequelize
                  unitModel.setFruit(fruitModel);
                });
              });
            });
          }
        });
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Seeding & Migration finished......");
        }, 100);
      }).then(value => {
        console.log(value);
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Fruits", null, {});
  }
};
