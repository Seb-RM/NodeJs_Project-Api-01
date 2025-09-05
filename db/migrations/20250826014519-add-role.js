"use strict";

const { UserSchema, USER_TABLE } = require("../models/user.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // await queryInterface.addColumn(USER_TABLE, "role", UserSchema.role);
    const table = await queryInterface.describeTable("users");
    if (!table.role) {
      await queryInterface.addColumn("users", "role", {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "client",
      });
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn(USER_TABLE, "role", UserSchema.role);
  },
};
