const express = require("express");

const router = express.Router();
const helper = require("../../helper/helper");
const { Unit, Fruit } = require("../../models/index");

//  Get all fruits
router.get("/", (req, res) => {
  try {
    Fruit.findAll({}).then(fruits => res.status(200).json(fruits));
  } catch (e) {
    console.log("Error finding all fruits: ", e);
    res.status(500).send(e);
  }
});

// Get one fruit
router.get("/:fruitId", (req, res) => {
  try {
    Fruit.findOne({ where: { id: req.params.fruitId } }).then(fruit =>
      res.status(200).json(fruit)
    );
  } catch (e) {
    console.log(`Error finding fruit with id: ${req.params.fruitId} `, e);
    res.status(500).send(e);
  }
});

//  Create new Fruit
router.post("/", (req, res) => {
  if (!req.body.name || !req.body.inventory || !req.body.unitId) {
    return res.status(400).json({
      errorMessage: "Please provide name, inventory and unit name for new fruit"
    });
  }

  Fruit.create({
    id: helper.getNewId(),
    name: req.body.name,
    inventory: req.body.inventory,
    unitId: req.body.unitId
  }).then(newFruit => {
    res.status(201).json(newFruit);
  });
});

// update fruit with :fruitId
router.patch("/:fruitId", (req, res) => {
  if (!req.body.name && !req.body.inventory) {
    return res.status(400).json({
      errorMessage: "Please provide name or inventory for fruit to be updated"
    });
  }
  Fruit.findOne({ where: { id: req.params.fruitId } })
    .then(fruit => {
      return fruit;
    })
    .then(fruit => {
      Fruit.update(
        {
          name: req.body.name ? req.body.name : fruit.name,
          inventory: req.body.inventory ? req.body.inventory : fruit.inventory
        },
        {
          where: {
            id: req.params.fruitId
          }
        }
      ).then(totalUpdates => {
        Fruit.findOne({ where: { id: req.params.fruitId } }).then(fruit => {
          res.status(200).json({
            fruitUpdated: fruit,
            totalUpdates: totalUpdates
          });
        });
      });
    });
});

// delete fruit with :fruitId
router.delete("/:fruitId", (req, res) => {
  Fruit.destroy({
    where: {
      id: req.params.fruitId
    }
  }).then(totalDeletes => {
    Fruit.findAll({}).then(fruits => {
      res.status(200).json({
        "Total units deleted: ": totalDeletes,
        fruitsAfterDeletion: fruits
      });
    });
  });
});

module.exports = router;
