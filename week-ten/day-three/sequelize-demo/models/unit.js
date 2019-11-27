"use strict";
module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define(
    "Unit",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [4, 15],
            msg: "Unit name should be between 4 to 15 characters long."
          }
        }
      }
    },
    {}
  );
  Unit.associate = function(models) {
    // associations can be defined here
    Unit.hasOne(models.Fruit, {
      foreignKey: "unitId",
      allowNull: false,
      targetKey: "id",
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
  };
  return Unit;
};
