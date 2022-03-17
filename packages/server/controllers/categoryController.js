const Category = require('../models/Category');

const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.status(200).send({
    categories,
  });
};

module.exports = {
  getCategories,
};
