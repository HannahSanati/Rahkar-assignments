const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/database");
const Image =require("../models/image")

const Image = sequelize.define(
  "Image",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

console.log(Image === sequelize.models.Image); 
module.exports = Image;
