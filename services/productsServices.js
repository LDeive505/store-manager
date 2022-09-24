const productsModels = require('../models/productsModels');
const ApiError = require('../errors/ApiError');
const { NOT_FOUND } = require('../errors/statusCodes');

const getProducts = async () => {
  const products = await productsModels.getAll();
  return products;
};

const getProductById = async (id) => {
  const product = await productsModels.getById(id);
  if (!product) throw new ApiError('Product not found', NOT_FOUND);
  return product;
};

const getProductByName = async (name) => {
  const products = await productsModels.getByName(name);
  if (!products) throw new ApiError('Product not found', NOT_FOUND);
  return products;
};

const createProduct = async (name) => {
  const product = await productsModels.create(name);
  return product;
};

const updateProduct = async (id, name) => {
  const product = await productsModels.getById(id);
  if (!product) throw new ApiError('Product not found', NOT_FOUND);

  const updatedProduct = await productsModels.update(id, name);
  return updatedProduct;
};

const deleteProduct = async (id) => {
  const product = await productsModels.getById(id);
  if (!product) throw new ApiError('Product not found', NOT_FOUND);
  await productsModels.deleteById(id);
};

module.exports = {
  getProducts,
  getProductById,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
};