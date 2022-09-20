const express = require('express');
const salesControllers = require('../controllers/salesControllers');
const saleValidation = require('../middlewares/saleValidation');

const salesRouter = express.Router();

salesRouter.route('/')
  .get(salesControllers.getSales)
  .post(saleValidation, salesControllers.createSale);

salesRouter.route('/:id')
  .get(salesControllers.getSaleById)
  .delete(salesControllers.deleteSale)
  .put(saleValidation, salesControllers.updateSale);

module.exports = salesRouter;