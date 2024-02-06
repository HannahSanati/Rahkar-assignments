const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    Name: {
      type: Sequelize.STRING,
    },
    mobile: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;
