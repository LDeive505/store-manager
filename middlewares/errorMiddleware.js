const ApiError = require('../errors/ApiError');
const { INTERNAL_ERROR } = require('../errors/statusCodes');

module.exports = (err, _req, res, _next) => {
  if (err instanceof ApiError) { 
    return res.status(err.code).json({ message: err.message });
  }
  
  return res.status(INTERNAL_ERROR).json({ message: err.message });
};