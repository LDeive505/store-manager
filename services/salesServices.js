const salesModels = require('../models/salesModels');
const productsModels = require('../models/productsModels');
const { NOT_FOUND } = require('../errors/statusCodes');
const ApiError = require('../errors/ApiError');

const getSales = async () => {
  const sales = await salesModels.getAll();
  return sales;
};

const getSaleById = async (id) => {
  const salesIds = await salesModels.getSalesIds();
  const inexistentId = !salesIds.some(({ id: pId }) => pId === id);
  if (inexistentId) throw new ApiError(NOT_FOUND, 'Sale not found');

  const sale = await salesModels.getById(id);
  return sale;
};

const createSale = async (sale) => {
  const productsIds = await productsModels.getIds();
  const dontExist = sale.some((product) => !productsIds.some(({ id }) => id === product.productId));
  if (dontExist) throw new ApiError(NOT_FOUND, 'Product not found');
  const id = await salesModels.create(sale);
  return { id, itemsSold: sale };
};

const updateSale = async (id, sale) => {
  const searchedSale = await salesModels.getById(id);
  if (searchedSale.length === 0) throw new ApiError(NOT_FOUND, 'Sale not found');

  const productsId = await productsModels.getIds();

  const existentIds = sale.every((product) =>
    productsId.some(({ id: prodId }) => prodId === product.productId));
  
  if (!existentIds) throw new ApiError(NOT_FOUND, 'Product not found');

  const updatedSale = await salesModels.update(id, sale);
  return updatedSale;
};  

const deleteSale = async (id) => {
  const sale = await salesModels.getById(id);
  if (sale.length === 0) throw new ApiError(NOT_FOUND, 'Sale not found');
  const deletedSale = await salesModels.deleteById(id);
  return deletedSale;
};

module.exports = {
  getSales,
  getSaleById,
  createSale,
  updateSale,
  deleteSale,
};