const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Category = require("./category");

const Product = db.define("products", {
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  src: {
    type: DataTypes.STRING,
  },
  idCategory: {
    type: DataTypes.INTEGER,
    references: {
      model: "Category",
      key: "id",
    },
  },
});

Product.belongsTo(Category, {
  foreignKey: "idCategory",
});

module.exports = Product;
