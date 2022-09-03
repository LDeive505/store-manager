const salesServices = require('../services/salesServices');

const getSales = async (req, res) => {
  const sales = await salesServices.getSales();
  return res.status(200).json(sales);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesServices.getSaleById(Number(id));
  if (!sale) return res.status(404).json({ message: 'Sale not found' });

  return res.status(200).json(sale);
};

const createSale = async (req, res) => {
  const sales = req.body;
  const newSale = await salesServices.createSale(sales);

  if (newSale === false) return res.status(404).json({ message: 'Product not found' });

  return res.status(201).json(newSale);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const sale = await salesServices.deleteSale(Number(id));
  if (!sale) return res.status(404).json({ message: 'Sale not found' });

  return res.status(204).end();
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const sale = req.body;
  const updatedSale = await salesServices.updateSale(Number(id), sale);

  if (!updatedSale) return res.status(404).json({ message: 'Sale not found' });

  if (updatedSale.message) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(updatedSale);
};

module.exports = {
  createSale,
  getSales,
  getSaleById,
  updateSale,
  deleteSale,
};