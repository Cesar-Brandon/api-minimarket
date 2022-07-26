const Category = require("../models/category");

exports.getCategories = async (req, res) => {
  const categories = await Category.findAll();
  res.json({ categories });
};

exports.createCategory = async (req, res) => {
  const { body } = req;
  try {
    const categoryExists = await Category.findOne({
      where: {
        name: body.name,
      },
    });

    if (categoryExists) {
      return res.status(400).json({
        message: `Category ${body.name} alredy exists`,
      });
    }

    const category = await Category.create(body);
    res.json({ category });
  } catch (error) {
    return res.status(500).json({
      message: "Consult with the administrator",
    });
  }
};
