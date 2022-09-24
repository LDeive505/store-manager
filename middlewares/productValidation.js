const ApiError = require('../errors/ApiError');
const { UNPROCESSABLE_ENTITY, BAD_REQUEST } = require('../errors/statusCodes');

const productValidation = (req, res, next) => {
  const { name } = req.body;

  if (!name) throw new ApiError('"name" is required', BAD_REQUEST);
  if (name.length < 5) {
    throw new ApiError(
      '"name" length must be at least 5 characters long',
      UNPROCESSABLE_ENTITY,
    );
  }

  next();
};

module.exports = productValidation;