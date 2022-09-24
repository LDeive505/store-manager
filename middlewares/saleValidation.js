const ApiError = require('../errors/ApiError');
const { UNPROCESSABLE_ENTITY, BAD_REQUEST } = require('../errors/statusCodes');

const saleValidation = (req, res, next) => {
  const sales = req.body;

  const hasproductIds = sales.every((sale) => sale.productId !== undefined);
  if (!hasproductIds) throw new ApiError(BAD_REQUEST, '"productId" is required');

  const hasQuantities = sales.every((sale) => sale.quantity !== undefined);
  if (!hasQuantities) throw new ApiError(BAD_REQUEST, '"quantity" is required');

  const hasValidQuantities = sales.every((sale) => sale.quantity >= 1);
  if (!hasValidQuantities) {
    throw new ApiError(UNPROCESSABLE_ENTITY, '"quantity" must be greater than or equal to 1');
  }

  next();
};

module.exports = saleValidation;
