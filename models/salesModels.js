const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(`
  SELECT 
    s.id AS saleId,
    s.date AS date,
    sp.product_id as productId,
    sp.quantity as quantity
  FROM
    StoreManager.sales AS s
    INNER JOIN
    StoreManager.sales_products AS sp
      ON s.id = sp.sale_id
  `);
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute(
    `
  SELECT 
    s.date AS date,
    sp.product_id as productId,
    sp.quantity as quantity
  FROM
    StoreManager.sales AS s
    INNER JOIN
    StoreManager.sales_products AS sp
      ON s.id = sp.sale_id
  WHERE
    s.id = ?
  `,
    [id],
  );

  return result;
};

const getSalesIds = async () => {
  const [result] = await connection.execute(
    'SELECT id FROM StoreManager.sales',
  );
  return result;
};

const create = async (sale) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales VALUES()',
  );
  await sale.forEach(async (product) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)'
        + 'VALUES(?, ?, ?)',
      [result.insertId, product.productId, product.quantity],
    );
  });

  return result.insertId;
};

module.exports = {
  getAll,
  getById,
  getSalesIds,
  create,
};
