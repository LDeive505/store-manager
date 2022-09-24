const express = require('express');
const productsControllers = require('../controllers/productsControllers');
const productValidation = require('../middlewares/productValidation');

const productsRouter = express.Router();

productsRouter.get('/search', productsControllers.getProductByName);

productsRouter.route('/')
  .get(productsControllers.getProducts)
  .post(productValidation, productsControllers.createProduct);

productsRouter.route('/:id')
  .get(productsControllers.getProductById)
  .put(productValidation, productsControllers.updateProduct)
  .delete(productsControllers.deleteProduct);

module.exports = productsRouter;