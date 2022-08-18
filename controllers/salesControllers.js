const salesServices = require('../services/salesServices');

const createSales = async (req, res) => {
  const sales = req.body;
  const newSale = await salesServices.createSale(sales);

  if (newSale === false) return res.status(404).json({ message: 'Product not found' });

  return res.status(201).json(newSale);
};

module.exports = {
  createSales,
};