const productsServices = require('../services/productsServices');
const { OK, CREATED, NO_CONTENT } = require('../errors/statusCodes');

const getProducts = async (_req, res) => { 
  const products = await productsServices.getProducts();
  return res.status(OK).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productsServices.getProductById(id);
  return res.status(OK).json(product);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const newProduct = await productsServices.createProduct(name);
  return res.status(CREATED).json(newProduct);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const updatedProduct = await productsServices.updateProduct(id, name);

  return res.status(OK).json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await productsServices.deleteProduct(id);

  return res.status(NO_CONTENT).end();
};

const getProductByName = async (req, res) => {
  const { q: name } = req.query;
  console.log(name);
  const products = await productsServices.getProductByName(name);
  return res.status(OK).json(products);
};

module.exports = {
  getProducts,
  getProductById,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
};