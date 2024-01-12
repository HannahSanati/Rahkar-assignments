const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/database");
const Image =require("../models/image")

const Image = sequelize.define(
  "Image",
  {
    // Model attributes are defined here
    image: {
      type: DataTypes.BLOB
    },
    img_name: {
      type: DataTypes.STRING
    },
    description:{
      type:DataTypes.STRING
    }
  },
  {
    timestamps: true,
  }
);

console.log(Image === sequelize.models.Image); 
module.exports = Image;
