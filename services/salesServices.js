const salesModels = require('../models/salesModels');
const productsModels = require('../models/productsModels');

const getSales = async () => {
  const sales = await salesModels.getAll();
  return sales;
};

const getSaleById = async (id) => {
  const salesIds = await salesModels.getSalesIds();
  const inexistentId = !salesIds.some(({ id: pId }) => pId === id);
  if (inexistentId) return null;

  const sale = await salesModels.getById(id);
  return sale;
};

const createSale = async (sale) => {
  const productsIds = await productsModels.getIds();
  const dontExist = sale.some((product) => !productsIds.some(({ id }) => id === product.productId));
  if (dontExist) return false;

  const id = await salesModels.create(sale);
  return { id, itemsSold: sale };
};

const deleteSale = async (id) => {
  const sale = salesModels.getById(id);
  if (!sale) return null;
  const deletedSale = await salesModels.deleteById(id);
  return deletedSale;
};

module.exports = {
  getSales,
  getSaleById,
  createSale,
  deleteSale,
};