const productsServices = require('../services/productsServices');

const getProducts = async (_req, res) => { 
  const products = await productsServices.getProducts();
  return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productsServices.getProductById(id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  
  return res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const newProduct = await productsServices.createProduct(name);
  return res.status(201).json(newProduct);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const updatedProduct = await productsServices.updateProduct(id, name);
  if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await productsServices.deleteProduct(id);
  if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });

  return res.status(204).end();
};

const getProductByName = async (req, res) => {
  const { q: name } = req.query;
  console.log(name);
  const products = await productsServices.getProductByName(name);
  return res.status(200).json(products);
};

module.exports = {
  getProducts,
  getProductById,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
};