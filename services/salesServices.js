const salesModels = require('../models/salesModels');
const productsModels = require('../models/productsModels');

const createSale = async (sale) => {
  const productsIds = await productsModels.getIds();
  const dontExist = sale.some((product) => !productsIds.some(({ id }) => id === product.productId));
  if (dontExist) return false;

  const id = await salesModels.create(sale);
  return { id, itemsSold: sale };
};

module.exports = {
  createSale,
};