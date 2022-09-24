const ApiError = require('../errors/ApiError');
const { INTERNAL_ERROR } = require('../errors/statusCodes');

const errorMiddleware = (err, _req, res, _next) => {
  console.error(err);
  if (err instanceof ApiError) { 
    return res.status(err.code).json({ message: err.message });
  }
  
  return res.status(INTERNAL_ERROR).json({ message: err.message });
};

module.exports = errorMiddleware;