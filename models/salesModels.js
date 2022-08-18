const connection = require('./connection');

const create = async (sale) => {
  const [result] = await connection.execute('INSERT INTO StoreManager.sales VALUES()');
    await sale.forEach(async (product) => {
      await connection.execute(
        'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)'
          + 'VALUES(?, ?, ?)',
        [result.insertId, product.productId, product.quantity],
      );
    });
  
  return result.insertId;
};

const getSalesIds = async () => {
  const [result] = await connection.execute('SELECT id FROM StoreManager.sales');
  return result;
};

module.exports = {
  getSalesIds,
  create,
};
