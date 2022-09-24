const ApiError = require('../errors/ApiError');
const { UNPROCESSABLE_ENTITY, BAD_REQUEST } = require('../errors/statusCodes');

const productValidation = (req, res, next) => {
  const { name } = req.body;

  if (!name) throw new ApiError(BAD_REQUEST, '"name" is required');
  if (name.length < 5) {
    throw new ApiError(
      UNPROCESSABLE_ENTITY,
      '"name" length must be at least 5 characters long',
    );
  }

  next();
};

module.exports = productValidation;