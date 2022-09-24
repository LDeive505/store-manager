const salesServices = require('../services/salesServices');
const { OK, CREATED, NO_CONTENT } = require('../errors/statusCodes');

const getSales = async (req, res) => {
  const sales = await salesServices.getSales();
  return res.status(OK).json(sales);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesServices.getSaleById(Number(id));

  return res.status(OK).json(sale);
};

const createSale = async (req, res) => {
  const sales = req.body;
  const newSale = await salesServices.createSale(sales);
  return res.status(CREATED).json(newSale);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  await salesServices.deleteSale(Number(id));
  return res.status(NO_CONTENT).end();
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const sale = req.body;
  const updatedSale = await salesServices.updateSale(Number(id), sale);
  return res.status(OK).json(updatedSale);
};

module.exports = {
  createSale,
  getSales,
  getSaleById,
  updateSale,
  deleteSale,
};