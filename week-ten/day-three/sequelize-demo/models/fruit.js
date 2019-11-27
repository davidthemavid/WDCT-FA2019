"use strict";
module.exports = (sequelize, DataTypes) => {
  const Fruit = sequelize.define(
    "Fruit",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [5, 25],
            msg: "Fruit name should be between 5 to 25 characters long."
          }
        }
      },
      inventory: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: true }
    },
    {}
  );
  Fruit.associate = function(models) {
    // associations can be defined here
  };
  return Fruit;
};
