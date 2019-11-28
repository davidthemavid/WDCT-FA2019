const express = require("express");
const helper = require("../../helper/helper");

const router = express.Router();
const { Unit } = require("../../models/index");

// GET all units
router.get("/", (req, res) => {
  try {
    Unit.findAll({}).then(units => res.status(200).json(units));
  } catch (e) {
    console.log("Error finding all the units: ", e);
    res.status(500).send(e);
  }
});

// GET Unit with id - unitId
router.get("/:unitId", (req, res) => {
  try {
    Unit.findOne({ where: { id: req.params.unitId } }).then(unit =>
      res.status(200).json(unit)
    );
  } catch (e) {
    console.log(`Error finding unit with id: ${req.params.unitId}`, e);
    res.status(500).send(e);
  }
});

// create new unit
router.post("/", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      errorMessage: "Please Provide name for the unit"
    });
  }
  Unit.create({
    id: helper.getNewId(),
    name: req.body.name
  }).then(newUnit => {
    res.status(201).json(newUnit);
  });
});

// update unit with :unitId
router.put("/:unitId", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      errorMessage: "Please provide unit name to be updated"
    });
  }
  Unit.update(
    { name: req.body.name },
    { where: { id: req.params.unitId } }
  ).then(totalUpdates => {
    Unit.findOne({ where: { id: req.params.unitId } }).then(unit => {
      res.status(200).json({
        unitUpdated: unit,
        totalUpdates: totalUpdates
      });
    });
  });
});

// delete unit with :unitId
router.delete("/:unitId", (req, res) => {
  Unit.destroy({
    where: {
      id: req.params.unitId
    }
  }).then(totalDeletes => {
    Unit.findAll({}).then(units => {
      res.status(200).json({
        totalDeletes: totalDeletes,
        unitsAfterDeletion: units
      });
    });
  });
});
module.exports = router;
