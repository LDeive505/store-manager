const productsModels = require('../models/productsModels');

const getProducts = async () => {
  const products = await productsModels.getAll();
  return products;
};

const getProductById = async (id) => {
  const product = await productsModels.getById(id);
  return product;
};

module.exports = {
  getProducts,
  getProductById,
};