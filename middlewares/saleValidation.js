const saleValidation = (req, res, next) => {
  const sales = req.body;
  console.log(typeof sales);

  const hasproductIds = sales.every((sale) => sale.productId);
  if (!hasproductIds) return res.status(400).json({ message: '"productId" is required' });

  const hasQuantities = sales.every((sale) => sale.quantity !== undefined);
  if (!hasQuantities) return res.status(400).json({ message: '"quantity" is required' });
  
  const hasValidQuantities = sales.every((sale) => sale.quantity >= 1);
  if (!hasValidQuantities) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = saleValidation;
