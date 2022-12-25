const Products = require("../models/products");

const getProducts = async (req, res) => {
  const prod = await Products.find({});
  res.json(prod);
};

module.exports = getProducts;
