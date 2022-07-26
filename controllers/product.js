const Category = require("../models/category");
const Product = require("../models/product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }],
    });
    res.json({ products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Consult with the administrator",
    });
  }
};

exports.createProduct = async (req, res) => {
  const { body } = req;
  try {
    const product = await Product.create(body);
    res.json({ product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Consult with the administrator",
    });
  }
};
