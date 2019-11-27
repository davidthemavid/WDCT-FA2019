"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Fruits", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      unitId: {
        type: Sequelize.UUID,
        references: {
          model: "Units",
          key: "id"
        }
      },
      name: {
        type: Sequelize.STRING
      },
      inventory: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Fruits");
  }
};
