const productsModels = require('../models/productsModels');

const getProducts = async () => {
  const products = await productsModels.getAll();
  return products;
};

const getProductById = async (id) => {
  const product = await productsModels.getById(id);
  return product;
};

const getProductByName = async (name) => {
  const products = await productsModels.getByName(name);
  return products;
};

const createProduct = async (name) => {
  const product = await productsModels.create(name);
  return product;
};

const updateProduct = async (id, name) => {
  const product = await productsModels.getById(id);
  if (!product) return null;

  const updatedProduct = await productsModels.update(id, name);
  return updatedProduct;
};

const deleteProduct = async (id) => {
  const product = await productsModels.getById(id);
  if (!product) return null;

  const deletedProduct = await productsModels.deleteById(id);
  return deletedProduct;
};

module.exports = {
  getProducts,
  getProductById,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
};