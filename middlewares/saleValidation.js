const ApiError = require('../errors/ApiError');
const { UNPROCESSABLE_ENTITY, BAD_REQUEST } = require('../errors/statusCodes');

const saleValidation = (req, res, next) => {
  const sales = req.body;

  const hasproductIds = sales.every((sale) => sale.productId !== undefined);
  if (!hasproductIds) throw new ApiError('"productId" is required', BAD_REQUEST);

  const hasQuantities = sales.every((sale) => sale.quantity !== undefined);
  if (!hasQuantities) throw new ApiError('"quantity" is required', BAD_REQUEST);

  const hasValidQuantities = sales.every((sale) => sale.quantity >= 1);
  if (!hasValidQuantities) {
    throw new ApiError('"quantity" must be greater than or equal to 1', UNPROCESSABLE_ENTITY);
  }

  next();
};

module.exports = saleValidation;
