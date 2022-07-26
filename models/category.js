const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Category = db.define("categories", {
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = Category;
